// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.9 <0.9.0;

import "@divergencetech/ethier/contracts/crypto/SignatureChecker.sol";
import "@divergencetech/ethier/contracts/crypto/SignerManager.sol";
import "@divergencetech/ethier/contracts/erc721/BaseTokenURI.sol";
import "@divergencetech/ethier/contracts/erc721/ERC721ACommon.sol";
import "@divergencetech/ethier/contracts/erc721/ERC721Redeemer.sol";
import "@divergencetech/ethier/contracts/sales/FixedPriceSeller.sol";
import "@divergencetech/ethier/contracts/utils/Monotonic.sol";
import "@openzeppelin/contracts/finance/PaymentSplitter.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "hardhat/console.sol";

interface ITokenURIGenerator {
  function tokenURI(uint256 tokenId) external view returns (string memory);
}

// @author divergence.xyz
contract SOA is
  ERC721ACommon,
  BaseTokenURI,
  SignerManager,
  ERC2981,
  AccessControlEnumerable,
  PaymentSplitter
{
  using EnumerableSet for EnumerableSet.AddressSet;
  using ERC721Redeemer for ERC721Redeemer.Claims;
  using Monotonic for Monotonic.Increaser;
  using SignatureChecker for EnumerableSet.AddressSet;

  //sale settings
  uint256 public cost = 0.00 ether;
  uint256 public maxSupply = 9000;
  uint256 public maxMint = 20;
  uint256 public preSaleMaxMintPerAccount = 4;
  bool public presaleActive = false;
  bool public publicSaleActive = false;

  // mint count tracker
  mapping(address => Monotonic.Increaser) private presaleMinted;

  /**
    @notice Role of administrative users allowed to expel a Token from the
    nest.
    @dev See expelFromNest().
     */
  bytes32 public constant EXPULSION_ROLE = keccak256("EXPULSION_ROLE");

  constructor(
    string memory name,
    string memory symbol,
    string memory baseURI,
    uint256 price,
    address signer,
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
    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    signers.add(signer);
  }

  /**
    @dev Record of already-used signatures.
     */
  mapping(bytes32 => bool) public usedMessages;

  /**
    @notice Mint token.
    */
  function presaleMint(
    address to,
    bytes32 nonce,
    uint8 mintAmount,
    bytes calldata sig
  ) external payable {
    signers.requireValidSignature(
      signaturePayload(to, nonce),
      sig,
      usedMessages
    );
    require(presaleActive, "Presale disabled");
    require(mintAmount > 0, "Cant mint 0");
    require(mintAmount <= maxMint, "Cant mint more then maxmint");
    require(
      (presaleMinted[to].current() + mintAmount) <= preSaleMaxMintPerAccount,
      "too many mints"
    );
    require(totalSupply() + mintAmount <= maxSupply, "Cant go over supply");
    require(cost * mintAmount == msg.value, "Wrong amount");
    _safeMint(to, mintAmount);
    presaleMinted[to].add(mintAmount);
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

  function setPreSaleMaxMintPerAccount(uint256 _newPreSaleMaxMintPerAccount)
    public
    onlyOwner
  {
    preSaleMaxMintPerAccount = _newPreSaleMaxMintPerAccount;
  }

  function setPresaleActive(bool _newPresaleActive) public onlyOwner {
    presaleActive = _newPresaleActive;
  }

  function setMintActive(bool _newMintActive) public onlyOwner {
    publicSaleActive = _newMintActive;
  }

  /**
   * @notice Returns the number of minted tokens per presale address
   */
  function presaleMintedByAddress(address _address)
    public
    view
    returns (uint256)
  {
    return presaleMinted[_address].current();
  }

  /**
    @notice Returns whether the address has minted with the particular nonce. If
    true, future calls to mint() with the same parameters will fail.
    @dev In production we will never issue more than a single nonce per address,
    but this allows for testing with a single address.
     */
  function alreadyMinted(address to, bytes32 nonce)
    external
    view
    returns (bool)
  {
    return
      usedMessages[
        SignatureChecker.generateMessage(signaturePayload(to, nonce))
      ];
  }

  /**
    @dev Constructs the buffer that is hashed for validation with a minting
    signature.
     */
  function signaturePayload(address to, bytes32 nonce)
    internal
    pure
    returns (bytes memory)
  {
    return abi.encodePacked(to, nonce);
  }

  /**
    @dev tokenId to seeking start time (0 = not seeking).
     */
  mapping(uint256 => uint256) private seekingStarted;

  /**
    @dev Cumulative per-token seeking, excluding the current period.
     */
  mapping(uint256 => uint256) private seekingTotal;

  /**
    @notice Returns the length of time, in seconds, that the Token has
    nested.
    @dev Seeking is tied to a specific Token, not to the owner, so it doesn't
    reset upon sale.
    @return seeking Whether the Token is currently seeking. MAY be true with
    zero current seeking if in the same block as seeking began.
    @return current Zero if not currently seeking, otherwise the length of time
    since the most recent seeking began.
    @return total Total period of time for which the Token has nested across
    its life, including the current period.
     */
  function seekingPeriod(uint256 tokenId)
    external
    view
    returns (
      bool seeking,
      uint256 current,
      uint256 total
    )
  {
    uint256 start = seekingStarted[tokenId];
    if (start != 0) {
      seeking = true;
      current = block.timestamp - start;
    }
    total = current + seekingTotal[tokenId];
  }

  /**
    @dev MUST only be modified by safeTransferWhileSeeking(); if set to 2 then
    the _beforeTokenTransfer() block while seeking is disabled.
     */
  uint256 private seekingTransfer = 1;

  /**
    @notice Transfer a token between addresses while the Token is minting,
    thus not resetting the seeking period.
     */
  function safeTransferWhileSeeking(
    address from,
    address to,
    uint256 tokenId
  ) external {
    require(ownerOf(tokenId) == _msgSender(), "SOA: Only owner");
    seekingTransfer = 2;
    safeTransferFrom(from, to, tokenId);
    seekingTransfer = 1;
  }

  /**
    @dev Block transfers while seeking.
     */
  function _beforeTokenTransfers(
    address from,
    address to,
    uint256 startTokenId,
    uint256 quantity
  ) internal override {
    uint256 tokenId = startTokenId;
    for (uint256 end = tokenId + quantity; tokenId < end; ++tokenId) {
      require(
        seekingStarted[tokenId] == 0 || seekingTransfer == 2,
        "SOA: seeking"
      );
      seekingTotal[tokenId] = 0;
    }
    super._beforeTokenTransfers(from, to, startTokenId, quantity);
  }

  /**
    @dev Emitted when begining seeking.
     */
  event Seeking(uint256 indexed tokenId);

  /**
    @dev Emitted when stops seeking; either through standard means or
    by expulsion.
     */
  event Unseeking(uint256 indexed tokenId);

  /**
    @dev Emitted when expelled from seeking.
     */
  event Expelled(uint256 indexed tokenId);

  /**
    @notice Whether seeking is currently allowed.
    @dev If false then seeking is blocked, but unseeking is always allowed.
     */
  bool public seekingOpen = false;

  /**
    @notice Toggles the `seekingOpen` flag.
     */
  function setSeekingOpen(bool open) external onlyOwner {
    seekingOpen = open;
  }

  /**
    @notice Changes the Token's seeking status.
    */
  function toggleSeeking(uint256 tokenId)
    internal
    onlyApprovedOrOwner(tokenId)
  {
    uint256 start = seekingStarted[tokenId];
    if (start == 0) {
      require(seekingOpen, "SOA: seeking closed");
      seekingStarted[tokenId] = block.timestamp;
      emit Seeking(tokenId);
    } else {
      seekingTotal[tokenId] += block.timestamp - start;
      seekingStarted[tokenId] = 0;
      emit Unseeking(tokenId);
      (tokenId);
    }
  }

  /**
    @notice Changes the seeking statuses
    @dev Changes the seeking.
     */
  function toggleSeeking(uint256[] calldata tokenIds) external {
    uint256 n = tokenIds.length;
    for (uint256 i = 0; i < n; ++i) {
      toggleSeeking(tokenIds[i]);
    }
  }

  /**
    @notice Admin-only ability to expel a Token from the nest.
    @dev As most sales listings use off-chain signatures it's impossible to
    detect someone who has nested and then deliberately undercuts the floor
    price in the knowledge that the sale can't proceed. This function allows for
    monitoring of such practices and expulsion if abuse is detected, allowing
    the undercutting token to be sold on the open market. Since OpenSea uses
    isApprovedForAll() in its pre-listing checks, we can't block by that means
    because seeking would then be all-or-nothing for all of a particular owner's
    Tokens.
     */
  function expelFromSeeking(uint256 tokenId) external onlyRole(EXPULSION_ROLE) {
    require(seekingStarted[tokenId] != 0, "SOA: not nested");
    seekingTotal[tokenId] += block.timestamp - seekingStarted[tokenId];
    seekingStarted[tokenId] = 0;
    emit Unseeking(tokenId);
    emit Expelled(tokenId);
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
    @notice If set, contract to which tokenURI() calls are proxied.
     */
  ITokenURIGenerator public renderingContract;

  /**
    @notice Sets the optional tokenURI override contract.
     */
  function setRenderingContract(ITokenURIGenerator _contract)
    external
    onlyOwner
  {
    renderingContract = _contract;
  }

  /**
    @notice If renderingContract is set then returns its tokenURI(tokenId)
    return value, otherwise returns the standard baseTokenURI + tokenId.
     */
  function tokenURI(uint256 tokenId)
    public
    view
    override
    returns (string memory)
  {
    if (address(renderingContract) != address(0)) {
      return renderingContract.tokenURI(tokenId);
    }
    return super.tokenURI(tokenId);
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
    override(ERC721ACommon, ERC2981, AccessControlEnumerable)
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
