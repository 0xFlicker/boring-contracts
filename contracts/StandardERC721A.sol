// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.9 <0.9.0;

import "@divergencetech/ethier/contracts/erc721/BaseTokenURI.sol";
import "@divergencetech/ethier/contracts/erc721/ERC721ACommon.sol";
import "@divergencetech/ethier/contracts/sales/FixedPriceSeller.sol";
import "@divergencetech/ethier/contracts/utils/Monotonic.sol";
import "@openzeppelin/contracts/finance/PaymentSplitter.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "hardhat/console.sol";

// @author divergence.xyz
contract StandardERC721A is
  ERC721ACommon,
  BaseTokenURI,
  ERC2981,
  PaymentSplitter
{
  using Monotonic for Monotonic.Increaser;

  //sale settings
  uint256 public cost = 0.00 ether;
  uint256 public maxSupply = 9000;
  uint256 public maxMint = 20;
  bool public publicSaleActive = false;

  constructor(
    string memory name,
    string memory symbol,
    string memory baseURI,
    uint256 price,
    address[] memory payments,
    uint256[] memory shares,
    address payable royaltyReceiver
  )
    ERC721ACommon(name, symbol)
    BaseTokenURI(baseURI)
    PaymentSplitter(payments, shares)
  {
    cost = price;
    _setDefaultRoyalty(royaltyReceiver, 500);
  }

  /**
    @notice Mint token.
    */
  function mint(address to, uint8 mintAmount) external payable {
    require(publicSaleActive, "Main Sale Not Enabled");
    require(mintAmount > 0, "Cant mint 0");
    require(mintAmount <= maxMint, "Cant mint more then maxmint");
    require(totalSupply() + mintAmount <= maxSupply, "Cant go over supply");
    require(cost * mintAmount == msg.value, "Wrong amount");
    _safeMint(to, mintAmount);
  }

  // admin minting
  function gift(uint256[] calldata _mintAmount, address[] calldata recipient)
    external
    onlyOwner
  {
    require(
      _mintAmount.length == recipient.length,
      "Provide equal mintAmount and recipients"
    );
    for (uint256 i = 0; i < recipient.length; ++i) {
      require(
        totalSupply() + _mintAmount[i] <= maxSupply,
        "Cant go over supply"
      );
      require(_mintAmount[i] > 0, "Cant mint 0");
      _safeMint(recipient[i], _mintAmount[i]);
    }
  }

  function setCost(uint256 _newCost) public onlyOwner {
    cost = _newCost;
  }

  function setMaxMint(uint256 _newmaxMint) public onlyOwner {
    maxMint = _newmaxMint;
  }

  function setMaxSupply(uint256 _newMaxSupply) public onlyOwner {
    maxSupply = _newMaxSupply;
  }

  function setMintActive(bool _newMintActive) public onlyOwner {
    publicSaleActive = _newMintActive;
  }

  /**
    @dev Required override to select the correct baseTokenURI.
     */
  function _baseURI()
    internal
    view
    override(BaseTokenURI, ERC721A)
    returns (string memory)
  {
    return BaseTokenURI._baseURI();
  }

  /**
    @notice Sets the contract-wide royalty info.
     */
  function setRoyaltyInfo(address receiver, uint96 feeBasisPoints)
    external
    onlyOwner
  {
    _setDefaultRoyalty(receiver, feeBasisPoints);
  }

  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721ACommon, ERC2981)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }

  function withdrawSplit() public onlyOwner {
    uint256 shares = totalShares();
    for (uint256 i = 0; i < shares; i++) {
      address payable wallet = payable(payee(i));
      release(wallet);
    }
  }
}
