// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.9 <0.9.0;

import "@divergencetech/ethier/contracts/crypto/SignatureChecker.sol";
import "@divergencetech/ethier/contracts/crypto/SignerManager.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./IWeights.sol";

contract SignedWeights is IWeights, SignerManager {
  using EnumerableSet for EnumerableSet.AddressSet;
  using SignatureChecker for EnumerableSet.AddressSet;

  mapping(uint16 => uint256) private weights;
  uint256 private constant MAX_WEIGHT = 7000 ether;
  address public baseNft;

  constructor(address signer, address nft) {
    signers.add(signer);
    baseNft = nft;
  }

  function setWeights(
    uint16[] calldata tokenIds,
    uint256[] memory _weights,
    bytes calldata signature
  ) public {
    require(baseNft != address(0), "nft not set");
    IERC721 nft = IERC721(baseNft);
    for (uint16 i = 0; i < tokenIds.length; i++) {
      require(_weights[i] > 0, "!Weights > 0");
      require(_weights[i] <= MAX_WEIGHT, "Weights to great");
      require(weights[tokenIds[i]] == 0, "Weight already set");
      require(nft.ownerOf(tokenIds[i]) == msg.sender, "!Owner");
    }
    signers.requireValidSignature(
      signaturePayload(tokenIds, _weights),
      signature
    );
    for (uint16 i = 0; i < tokenIds.length; i++) {
      weights[i] = _weights[i];
    }
  }

  function getRank(uint16 index) external view override returns (uint256) {
    return weights[index];
  }

  /**
    @dev Constructs the buffer that is hashed for validation with a minting
    signature.
     */
  function signaturePayload(
    uint16[] calldata tokenIds,
    uint256[] memory _weights
  ) internal pure returns (bytes memory) {
    return abi.encodePacked(tokenIds, _weights);
  }
}
