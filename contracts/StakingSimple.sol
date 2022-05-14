// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./IWeights.sol";
import "hardhat/console.sol";

pragma solidity ^0.8.9;

contract StakingSimple is Ownable, ReentrancyGuard {
  IERC721 public baseNFT;

  uint256 public constant SECONDS_IN_DAY = 24 * 60 * 60;
  uint256 public constant ACCELERATED_YIELD_DAYS = 2;
  uint256 public constant ACCELERATED_YIELD_MULTIPLIER = 2;
  uint256 public acceleratedYield;

  address public signerAddress;
  address public weightsAddress;
  bool public stakingLaunched;
  bool public depositPaused;

  struct Staker {
    uint256 currentYield;
    uint256 accumulatedAmount;
    uint256 lastCheckpoint;
    uint256[] stakedBaseNFT;
  }

  uint256 public baseRate;
  mapping(address => Staker) private _stakers;
  mapping(uint16 => address) private _ownerOfToken;
  mapping(uint16 => uint256) private _tokensMultiplier;

  event Deposit(
    address indexed staker,
    address contractAddress,
    uint256 tokensAmount
  );
  event Withdraw(
    address indexed staker,
    address contractAddress,
    uint256 tokensAmount
  );
  event WithdrawStuckERC721(
    address indexed receiver,
    address indexed tokenAddress,
    uint256 indexed tokenId
  );

  constructor(address _setBaseNFTContract, address _setSingnerAddress) {
    baseNFT = IERC721(_setBaseNFTContract);
    baseRate = 1500 ether;
    signerAddress = _setSingnerAddress;
  }

  //deposit tokens function
  function deposit(uint16[] memory tokenIds) public nonReentrant {
    require(!depositPaused, "Deposit paused");
    require(stakingLaunched, "Staking is not launched yet");
    address contractAddress = address(baseNFT);

    Staker storage user = _stakers[_msgSender()];
    uint256 newYield = user.currentYield;

    //loop through each token and setup staking settings
    for (uint256 i; i < tokenIds.length; i++) {
      require(
        IERC721(contractAddress).ownerOf(tokenIds[i]) == _msgSender(),
        "Not the owner"
      );

      IERC721(contractAddress).safeTransferFrom(
        _msgSender(),
        address(this),
        tokenIds[i]
      );

      _ownerOfToken[tokenIds[i]] = _msgSender();

      newYield += getTokenYield(tokenIds[i]);

      //add token id to user struct
      user.stakedBaseNFT.push(tokenIds[i]);
    }

    accumulate(_msgSender());
    user.currentYield = newYield;
    emit Deposit(_msgSender(), contractAddress, tokenIds.length);
  }

  //withdraw tokens function
  function withdraw(uint16[] memory tokenIds) public nonReentrant {
    Staker storage user = _stakers[_msgSender()];
    uint256 newYield = user.currentYield;
    address contractAddress = address(baseNFT);

    for (uint256 i; i < tokenIds.length; i++) {
      require(
        IERC721(contractAddress).ownerOf(tokenIds[i]) == address(this),
        "Not the owner"
      );

      _ownerOfToken[tokenIds[i]] = address(0);

      if (user.currentYield != 0) {
        uint256 tokenYield = getTokenYield(tokenIds[i]);
        newYield -= tokenYield;
      }

      user.stakedBaseNFT = _moveTokenInTheList(user.stakedBaseNFT, tokenIds[i]);
      user.stakedBaseNFT.pop();

      IERC721(contractAddress).safeTransferFrom(
        address(this),
        _msgSender(),
        tokenIds[i]
      );
    }

    if (user.stakedBaseNFT.length == 0) {
      newYield = 0;
    }

    accumulate(_msgSender());
    user.currentYield = newYield;

    emit Withdraw(_msgSender(), contractAddress, tokenIds.length);
  }

  //Take rarity weight and asign it to staked token
  function setTokensValues(
    uint16[] memory tokenIds,
    uint256[] memory rarityWeight
  ) external onlyOwner {
    for (uint16 i; i < tokenIds.length; i++) {
      if (rarityWeight[i] != 0 && rarityWeight[i] <= 3000 ether) {
        _tokensMultiplier[tokenIds[i]] = rarityWeight[i];
      }
    }
  }

  //Return yield for specific token ID
  function getTokenYield(uint16 tokenId) public view returns (uint256) {
    require(weightsAddress != address(0), "Weights contract is not set");
    uint256 tokenYield = IWeights(weightsAddress).getRank(tokenId);
    if (tokenYield == 0) {
      tokenYield = baseRate;
    }
    return tokenYield;
  }

  //Accumulate reward amounts
  function accumulate(address staker) internal {
    _stakers[staker].accumulatedAmount += getCurrentReward(staker);
    _stakers[staker].lastCheckpoint = block.timestamp;
  }

  //returns current staking session rewards
  //resets to 0 each time you stake/unstake
  function getCurrentReward(address staker) public view returns (uint256) {
    Staker memory user = _stakers[staker];
    if (user.lastCheckpoint == 0) {
      return 0;
    }
    if (
      user.lastCheckpoint < acceleratedYield &&
      block.timestamp < acceleratedYield
    ) {
      return
        (((block.timestamp - user.lastCheckpoint) * user.currentYield) /
          SECONDS_IN_DAY) * ACCELERATED_YIELD_MULTIPLIER;
    }
    if (
      user.lastCheckpoint < acceleratedYield &&
      block.timestamp > acceleratedYield
    ) {
      uint256 currentReward;
      currentReward +=
        (((acceleratedYield - user.lastCheckpoint) * user.currentYield) /
          SECONDS_IN_DAY) *
        ACCELERATED_YIELD_MULTIPLIER;
      currentReward +=
        ((block.timestamp - acceleratedYield) * user.currentYield) /
        SECONDS_IN_DAY;
      return currentReward;
    }
    return
      ((block.timestamp - user.lastCheckpoint) * user.currentYield) /
      SECONDS_IN_DAY;
  }

  // Returns token owner address (returns address(0) if token is not inside the gateway)
  function ownerOf(uint16 tokenId) public view returns (address) {
    return _ownerOfToken[tokenId];
  }

  //returns all accumulated user rewards
  function getAccumulatedAmount(address staker)
    external
    view
    returns (uint256)
  {
    return _stakers[staker].accumulatedAmount + getCurrentReward(staker);
  }

  //returns combined rarity weight of all staked tokens
  function getStakerYield(address staker) public view returns (uint256) {
    return _stakers[staker].currentYield;
  }

  //return all staked token IDs
  function getStakerTokens(address staker)
    public
    view
    returns (uint256[] memory)
  {
    return (_stakers[staker].stakedBaseNFT);
  }

  //move token to end of list ready for removal
  function _moveTokenInTheList(uint256[] memory list, uint256 tokenId)
    internal
    pure
    returns (uint256[] memory)
  {
    uint256 tokenIndex = 0;
    uint256 lastTokenIndex = list.length - 1;
    uint256 length = list.length;

    for (uint256 i = 0; i < length; i++) {
      if (list[i] == tokenId) {
        tokenIndex = i + 1;
        break;
      }
    }

    require(tokenIndex != 0, "msg.sender is not the owner");

    tokenIndex -= 1;

    if (tokenIndex != lastTokenIndex) {
      list[tokenIndex] = list[lastTokenIndex];
      list[lastTokenIndex] = tokenId;
    }

    return list;
  }

  //return true if received signature address matches internal signerAddress
  function _validateSignatureMultiSig(
    bytes memory signature,
    uint16[] memory tokenIds,
    uint256[] memory rarityWeight
  ) internal view returns (bool) {
    bytes memory content = abi.encodePacked(tokenIds, rarityWeight);
    bytes32 ethSignedMessageHash = ECDSA.toEthSignedMessageHash(content);
    address recoveredAddress = ECDSA.recover(ethSignedMessageHash, signature);
    require(
      (recoveredAddress != address(0) && recoveredAddress == signerAddress),
      "Signature does not match"
    );
    return true;
  }

  //launch staking contract
  function launchStaking() public onlyOwner {
    require(!stakingLaunched, "Staking has been launched already");
    stakingLaunched = true;
    acceleratedYield =
      block.timestamp +
      (SECONDS_IN_DAY * ACCELERATED_YIELD_DAYS);
  }

  //allows dev to pause deposits if needed. Withdraw remains active.
  function pauseDeposit(bool _pause) public onlyOwner {
    depositPaused = _pause;
  }

  //update set signer address
  function updateSignerAddress(address _signerAddress) public onlyOwner {
    signerAddress = _signerAddress;
  }

  //update base token yield weight
  function updateBaseYield(uint256 _yield) public onlyOwner {
    baseRate = _yield;
  }

  // Function allows dev withdraw ERC721 in case of emergency.
  function emergencyWithdraw(uint16[] memory tokenIds) public onlyOwner {
    require(tokenIds.length <= 50, "50 is max per tx");
    pauseDeposit(true);
    address tokenAddress = address(baseNFT);
    for (uint256 i; i < tokenIds.length; i++) {
      address receiver = _ownerOfToken[tokenIds[i]];
      if (
        receiver != address(0) &&
        IERC721(tokenAddress).ownerOf(tokenIds[i]) == address(this)
      ) {
        IERC721(tokenAddress).transferFrom(
          address(this),
          receiver,
          tokenIds[i]
        );
        emit WithdrawStuckERC721(receiver, tokenAddress, tokenIds[i]);
      }
    }
  }

  //let contract know what to do with received ERC721 tokens
  function onERC721Received(
    address,
    address,
    uint256,
    bytes calldata
  ) external pure returns (bytes4) {
    return bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));
  }

  function setWeights(address _weightsAddress) public onlyOwner {
    weightsAddress = _weightsAddress;
  }
}
