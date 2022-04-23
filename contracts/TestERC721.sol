// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract TestERC721 is ERC721Enumerable, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private mTokenIds;

  uint256 public constant BATCH_LIMIT = 20;
  string private mBaseURI;
  address private mSigner;
  address private mStakingContract;

  constructor(
    string memory baseUri,
    address signer,
    address stakingContract
  ) ERC721("Test", "TST") {
    mSigner = signer;
    mBaseURI = baseUri;
    mStakingContract = stakingContract;
  }

  function _baseURI() internal view override returns (string memory) {
    return mBaseURI;
  }

  function setBaseURI(string memory baseURI) public onlyOwner {
    mBaseURI = baseURI;
  }

  function mint(address to) public payable returns (uint256) {
    mTokenIds.increment();
    uint256 newItemId = mTokenIds.current();
    _mint(to, newItemId);
    return newItemId;
  }

  function tokenCount() public view returns (uint256) {
    return mTokenIds.current();
  }

  function validateSignature(
    bytes calldata signature,
    address contractAddress,
    uint256 tokenId,
    uint256 rarityWeight
  ) external view returns (bool) {
    require(contractAddress == mStakingContract, "BADSTAKE");
    bytes32 messageHash = keccak256(
      abi.encodePacked(contractAddress, tokenId, rarityWeight)
    );
    bytes32 ethSignedMessageHash = ECDSA.toEthSignedMessageHash(messageHash);
    address recoveredAddress = ECDSA.recover(ethSignedMessageHash, signature);
    require(
      recoveredAddress != address(0) && recoveredAddress == mSigner,
      "BADSIG"
    );
    return true;
  }

  function validateBatchSignature(
    bytes calldata signature,
    address contractAddress,
    uint256[] memory tokenIds,
    uint256[] memory rarityWeight
  ) external view returns (bool) {
    require(contractAddress == mStakingContract, "BADSTAKE");
    require(tokenIds.length == rarityWeight.length, "BADLENGTH");
    bytes32 messageHash = keccak256(
      abi.encodePacked(contractAddress, tokenIds, rarityWeight)
    );
    bytes32 ethSignedMessageHash = ECDSA.toEthSignedMessageHash(messageHash);
    address recoveredAddress = ECDSA.recover(ethSignedMessageHash, signature);
    require(
      recoveredAddress != address(0) && recoveredAddress == mSigner,
      "BADSIG"
    );
    return true;
  }

  function validateMultiSignatures(
    bytes[] memory signature,
    address contractAddress,
    uint256[] memory tokenIds,
    uint256[] memory rarityWeight
  ) external view returns (bool) {
    require(contractAddress == mStakingContract, "BADSTAKE");
    require(tokenIds.length == rarityWeight.length, "BADLENGTH");
    for (uint256 i; i < tokenIds.length; i++) {
      bytes32 messageHash = keccak256(
        abi.encodePacked(contractAddress, tokenIds[i], rarityWeight[i])
      );
      bytes32 ethSignedMessageHash = ECDSA.toEthSignedMessageHash(messageHash);
      address recoveredAddress = ECDSA.recover(
        ethSignedMessageHash,
        signature[i]
      );
      require(
        (recoveredAddress != address(0) && recoveredAddress == mSigner),
        "BADSIG"
      );
    }
    return true;
  }

  function updateSignerAddress(address signer) public onlyOwner {
    mSigner = signer;
  }

  function updateStakingContract(address stakingContract) public onlyOwner {
    mStakingContract = stakingContract;
  }
}
