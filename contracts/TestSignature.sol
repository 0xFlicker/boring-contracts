// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TestSignature is Ownable {
  address public signerAddress;

  constructor(address _signerAddress) {
    signerAddress = _signerAddress;
  }

  //return true if received signature address matches internal signerAddress
  function validateSignatureSingleSig(
    bytes calldata signature,
    address contractAddress,
    uint256[] memory tokenIds,
    uint256[] memory rarityWeight
  ) external view returns (bool) {
    bytes32 messageHash = keccak256(
      abi.encodePacked(contractAddress, tokenIds, rarityWeight)
    );
    bytes32 ethSignedMessageHash = ECDSA.toEthSignedMessageHash(messageHash);
    address recoveredAddress = ECDSA.recover(ethSignedMessageHash, signature);
    return (recoveredAddress != address(0) &&
      recoveredAddress == signerAddress);
  }

  //return true if received signature address matches internal signerAddress
  function validateSignatureMultiSig(
    bytes[] memory signature,
    address contractAddress,
    uint256[] memory tokenIds,
    uint256[] memory rarityWeight
  ) external view returns (bool) {
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
        (recoveredAddress != address(0) && recoveredAddress == signerAddress),
        "Signature does not match"
      );
    }
    return true;
  }

  function updateSignerAddress(address _signerAddress) public onlyOwner {
    signerAddress = _signerAddress;
  }
}
