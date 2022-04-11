// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "hardhat/console.sol";

contract TestERC20 is ERC20, AccessControl {
  mapping(address => int32) public addressMintNonce;

  address public signer;
  bytes32 public constant ROLE_SIGNER_ADMIN = keccak256("ROLE_SIGNER_ADMIN");

  constructor() ERC20("Test", "TEST") {
    _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
    _setRoleAdmin(ROLE_SIGNER_ADMIN, DEFAULT_ADMIN_ROLE);
    signer = _msgSender();
  }

  function mint(
    address _to,
    uint256 _amount,
    int32 _nonce,
    bytes calldata _sig
  ) public returns (bool) {
    require(addressMintNonce[_to] == _nonce, "Invalid nonce");
    require(
      verifyOwnerSignature(
        keccak256(abi.encodePacked(_to, _amount, _nonce)),
        _sig
      ),
      "Invalid Signature"
    );

    _mint(_to, _amount);
    addressMintNonce[_to]++;

    return true;
  }

  function getMintNonce(address _to) public view returns (int32) {
    return addressMintNonce[_to];
  }

  function setSigner(address _signer) public onlyRole(ROLE_SIGNER_ADMIN) {
    require(_signer != address(0), "Signer zero");
    signer = _signer;
  }

  function verifyOwnerSignature(bytes32 hash, bytes memory signature)
    private
    view
    returns (bool)
  {
    return
      ECDSA.recover(ECDSA.toEthSignedMessageHash(hash), signature) == signer;
  }
}
