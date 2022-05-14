// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.9 <0.9.0;

abstract contract IWeights {
  function getRank(uint16 index) external view virtual returns (uint256);
}
