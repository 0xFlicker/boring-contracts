/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StakingSimple,
  StakingSimpleInterface,
} from "../../contracts/StakingSimple";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_setBaseNFTContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_setSingnerAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokensAmount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokensAmount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "WithdrawStuckERC721",
    type: "event",
  },
  {
    inputs: [],
    name: "ACCELERATED_YIELD_DAYS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ACCELERATED_YIELD_MULTIPLIER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SECONDS_IN_DAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceleratedYield",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseNFT",
    outputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "signature",
        type: "bytes[]",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "rarityWeight",
        type: "uint256[]",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "getAccumulatedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "getCurrentReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "getStakerTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "getStakerYield",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getTokenYield",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "launchStaking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_pause",
        type: "bool",
      },
    ],
    name: "pauseDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "signerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingLaunched",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_yield",
        type: "uint256",
      },
    ],
    name: "updateBaseYield",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signerAddress",
        type: "address",
      },
    ],
    name: "updateSignerAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200228a3803806200228a8339810160408190526200003491620000ef565b6200003f3362000082565b60018055600280546001600160a01b039384166001600160a01b031991821617909155685150ae84a8cdf000006005556004805492909316911617905562000127565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b0381168114620000ea57600080fd5b919050565b600080604083850312156200010357600080fd5b6200010e83620000d2565b91506200011e60208401620000d2565b90509250929050565b61215380620001376000396000f3fe608060405234801561001057600080fd5b506004361061013e5760003560e01c806302befd2414610143578063041296671461016c57806309828c9f1461018d578063150b7a02146101965780631f29d2dc146101e75780631f68f20a146102355780632161a2b61461023e578063272f7dd01461025e5780633865716b14610271578063415855d6146102865780634bee21d4146102995780634d307e3f146102c25780635b7633d0146102d557806361a52a36146102e8578063687fff22146102f2578063715018a6146103055780637486560d1461030d5780638293744b146103155780638da5cb5b146103285780638fa2a9f014610330578063a30a247414610343578063c1c1ef981461030d578063d39f99fd1461034b578063dfeaa74c1461035e578063e1af569814610371578063f2fde38b14610385575b600080fd5b60045461015790600160a81b900460ff1681565b60405190151581526020015b60405180910390f35b61017f61017a366004611b3d565b610398565b604051908152602001610163565b61017f60035481565b6101ce6101a4366004611b5a565b7f150b7a023d4804d13e8c85fb27262cb750cf6ba9f9dd3bb30d90f482ceeb4b1f95945050505050565b6040516001600160e01b03199091168152602001610163565b61021d6101f5366004611bf8565b6001600160a01b03918216600090815260076020908152604080832093835292905220541690565b6040516001600160a01b039091168152602001610163565b61017f60055481565b61025161024c366004611b3d565b6103cf565b6040516101639190611c24565b61017f61026c366004611c68565b61043e565b61028461027f366004611d55565b61045c565b005b610284610294366004611eb2565b6108c3565b61017f6102a7366004611b3d565b6001600160a01b031660009081526006602052604090205490565b61017f6102d0366004611b3d565b610910565b60045461021d906001600160a01b031681565b61017f6201518081565b60025461021d906001600160a01b031681565b610284610ade565b61017f600281565b610284610323366004611ed4565b610b19565b61021d610eaa565b61028461033e366004611b3d565b610eb9565b610284610f0a565b610284610359366004611c68565b610fcd565b61028461036c366004611ed4565b611001565b60045461015790600160a01b900460ff1681565b610284610393366004611b3d565b611288565b60006103a382610910565b6001600160a01b0383166000908152600660205260409020600101546103c99190611f39565b92915050565b6001600160a01b03811660009081526006602090815260409182902060030180548351818402810184019094528084526060939283018282801561043257602002820191906000526020600020905b81548152602001906001019080831161041e575b50505050509050919050565b600081815260086020526040812054806103c9575060055492915050565b600260015414156104885760405162461bcd60e51b815260040161047f90611f51565b60405180910390fd5b6002600155600454600160a81b900460ff16156104d85760405162461bcd60e51b815260206004820152600e60248201526d11195c1bdcda5d081c185d5cd95960921b604482015260640161047f565b600454600160a01b900460ff1661052f5760405162461bcd60e51b815260206004820152601b60248201527a14dd185ada5b99c81a5cc81b9bdd081b185d5b98da1959081e595d602a1b604482015260640161047f565b805182511461058c5760405162461bcd60e51b815260206004820152602360248201527f6e6f6e2d6d61746368696e67206172726179206c656e677468732070726f766960448201526219195960ea1b606482015260840161047f565b6001600160a01b038316158015906105b157506002546001600160a01b038481169116145b6105cd5760405162461bcd60e51b815260040161047f90611f88565b80511561062a576105e084848484611328565b6106205760405162461bcd60e51b8152602060048201526011602482015270496e76616c6964207369676e617475726560781b604482015260640161047f565b61062a82826114c5565b336000908152600660205260408120805490915b845181101561086e57336001600160a01b0316866001600160a01b0316636352211e87848151811061067257610672611fb2565b60200260200101516040518263ffffffff1660e01b815260040161069891815260200190565b60206040518083038186803b1580156106b057600080fd5b505afa1580156106c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e89190611fc8565b6001600160a01b03161461070e5760405162461bcd60e51b815260040161047f90611fe5565b6001600160a01b0386166342842e0e333088858151811061073157610731611fb2565b60200260200101516040518463ffffffff1660e01b81526004016107579392919061200c565b600060405180830381600087803b15801561077157600080fd5b505af1158015610785573d6000803e3d6000fd5b505050506107903390565b6001600160a01b038716600090815260076020526040812087519091908890859081106107bf576107bf611fb2565b6020026020010151815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555061081b85828151811061080e5761080e611fb2565b602002602001015161043e565b6108259083611f39565b91508260030185828151811061083d5761083d611fb2565b602090810291909101810151825460018101845560009384529190922001558061086681612030565b91505061063e565b506108783361157f565b808255835160405133917f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f62916108af91899161204b565b60405180910390a250506001805550505050565b336108cc610eaa565b6001600160a01b0316146108f25760405162461bcd60e51b815260040161047f90612064565b60048054911515600160a81b0260ff60a81b19909216919091179055565b6001600160a01b03811660009081526006602090815260408083208151608081018352815481526001820154818501526002820154818401526003820180548451818702810187019095528085528695929460608601939092919083018282801561099a57602002820191906000526020600020905b815481526020019060010190808311610986575b50505050508152505090508060400151600014156109bb5750600092915050565b60035481604001511080156109d1575060035442105b15610a14578051604082015160029162015180916109ef9042612099565b6109f991906120b0565b610a0391906120cf565b610a0d91906120b0565b9392505050565b6003548160400151108015610a2a575060035442115b15610ab357600060026201518083600001518460400151600354610a4e9190612099565b610a5891906120b0565b610a6291906120cf565b610a6c91906120b0565b610a769082611f39565b82516003549192506201518091610a8d9042612099565b610a9791906120b0565b610aa191906120cf565b610aab9082611f39565b949350505050565b80516040820151620151809190610aca9042612099565b610ad491906120b0565b610a0d91906120cf565b33610ae7610eaa565b6001600160a01b031614610b0d5760405162461bcd60e51b815260040161047f90612064565b610b1760006115d8565b565b60026001541415610b3c5760405162461bcd60e51b815260040161047f90611f51565b60026001556001600160a01b03821615801590610b6657506002546001600160a01b038381169116145b610b825760405162461bcd60e51b815260040161047f90611f88565b336000908152600660205260408120805490915b8351811015610e4a57306001600160a01b0316856001600160a01b0316636352211e868481518110610bca57610bca611fb2565b60200260200101516040518263ffffffff1660e01b8152600401610bf091815260200190565b60206040518083038186803b158015610c0857600080fd5b505afa158015610c1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c409190611fc8565b6001600160a01b031614610c665760405162461bcd60e51b815260040161047f90611fe5565b6001600160a01b038516600090815260076020526040812085518290879085908110610c9457610c94611fb2565b6020026020010151815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508260000154600014610d01576000610cf185838151811061080e5761080e611fb2565b9050610cfd8184612099565b9250505b610d7683600301805480602002602001604051908101604052809291908181526020018280548015610d5257602002820191906000526020600020905b815481526020019060010190808311610d3e575b5050505050858381518110610d6957610d69611fb2565b6020026020010151611628565b8051610d8c916003860191602090910190611ab8565b5082600301805480610da057610da06120f1565b60019003818190600052602060002001600090559055846001600160a01b03166342842e0e30610dcd3390565b878581518110610ddf57610ddf611fb2565b60200260200101516040518463ffffffff1660e01b8152600401610e059392919061200c565b600060405180830381600087803b158015610e1f57600080fd5b505af1158015610e33573d6000803e3d6000fd5b505050508080610e4290612030565b915050610b96565b506003820154610e58575060005b610e613361157f565b808255825160405133917f9b1bfa7fa9ee420a16e124f794c35ac9f90472acc99140eb2f6447c714cad8eb91610e9891889161204b565b60405180910390a25050600180555050565b6000546001600160a01b031690565b33610ec2610eaa565b6001600160a01b031614610ee85760405162461bcd60e51b815260040161047f90612064565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b33610f13610eaa565b6001600160a01b031614610f395760405162461bcd60e51b815260040161047f90612064565b600454600160a01b900460ff1615610f9d5760405162461bcd60e51b815260206004820152602160248201527f5374616b696e6720686173206265656e206c61756e6368656420616c726561646044820152607960f81b606482015260840161047f565b6004805460ff60a01b1916600160a01b179055610fbe6002620151806120b0565b610fc89042611f39565b600355565b33610fd6610eaa565b6001600160a01b031614610ffc5760405162461bcd60e51b815260040161047f90612064565b600555565b3361100a610eaa565b6001600160a01b0316146110305760405162461bcd60e51b815260040161047f90612064565b6032815111156110755760405162461bcd60e51b815260206004820152601060248201526f06a6040d2e640dac2f040e0cae440e8f60831b604482015260640161047f565b61107f60016108c3565b60005b8151811015611283576001600160a01b0383166000908152600760205260408120835182908590859081106110b9576110b9611fb2565b6020908102919091018101518252810191909152604001600020546001600160a01b0316905080158015906111955750306001600160a01b0316846001600160a01b0316636352211e85858151811061111457611114611fb2565b60200260200101516040518263ffffffff1660e01b815260040161113a91815260200190565b60206040518083038186803b15801561115257600080fd5b505afa158015611166573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061118a9190611fc8565b6001600160a01b0316145b1561127057836001600160a01b03166323b872dd30838686815181106111bd576111bd611fb2565b60200260200101516040518463ffffffff1660e01b81526004016111e39392919061200c565b600060405180830381600087803b1580156111fd57600080fd5b505af1158015611211573d6000803e3d6000fd5b5050505082828151811061122757611227611fb2565b6020026020010151846001600160a01b0316826001600160a01b03167ffefe036cac4ee3a4aca074a81cbcc4376e1484693289078dbec149c890101d5b60405160405180910390a45b508061127b81612030565b915050611082565b505050565b33611291610eaa565b6001600160a01b0316146112b75760405162461bcd60e51b815260040161047f90612064565b6001600160a01b03811661131c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161047f565b611325816115d8565b50565b6000805b83518110156114b95760008585838151811061134a5761134a611fb2565b602002602001015185848151811061136457611364611fb2565b602002602001015160405160200161139e9392919060609390931b6001600160601b03191683526014830191909152603482015260540190565b604051602081830303815290604052805190602001209050600061140e826040517b0ca2ba3432b932bab69029b4b3b732b21026b2b9b9b0b3b29d05199960211b6020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b90506000611435828a868151811061142857611428611fb2565b6020026020010151611752565b90506001600160a01b0381161580159061145c57506004546001600160a01b038281169116145b6114a35760405162461bcd60e51b81526020600482015260186024820152770a6d2cedcc2e8eae4ca40c8decae640dcdee840dac2e8c6d60431b604482015260640161047f565b50505080806114b190612030565b91505061132c565b50600195945050505050565b60005b8251811015611283578181815181106114e3576114e3611fb2565b602002602001015160001415801561151d575068a2a15d09519be0000082828151811061151257611512611fb2565b602002602001015111155b1561156d5781818151811061153457611534611fb2565b60200260200101516008600085848151811061155257611552611fb2565b60200260200101518152602001908152602001600020819055505b8061157781612030565b9150506114c8565b61158881610910565b6001600160a01b038216600090815260066020526040812060010180549091906115b3908490611f39565b90915550506001600160a01b0316600090815260066020526040902042600290910155565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60606000806001855161163b9190612099565b855190915060005b81811015611690578587828151811061165e5761165e611fb2565b6020026020010151141561167e57611677816001611f39565b9350611690565b8061168881612030565b915050611643565b50826116dc5760405162461bcd60e51b815260206004820152601b60248201527a36b9b39739b2b73232b91034b9903737ba103a34329037bbb732b960291b604482015260640161047f565b6116e7600184612099565b92508183146117485785828151811061170257611702611fb2565b602002602001015186848151811061171c5761171c611fb2565b6020026020010181815250508486838151811061173b5761173b611fb2565b6020026020010181815250505b5093949350505050565b60008060006117618585611776565b9150915061176e816117e6565b509392505050565b6000808251604114156117ad5760208301516040840151606085015160001a6117a18782858561199c565b945094505050506117df565b8251604014156117d757602083015160408401516117cc868383611a7f565b9350935050506117df565b506000905060025b9250929050565b60008160048111156117fa576117fa612107565b14156118035750565b600181600481111561181757611817612107565b14156118605760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015260640161047f565b600281600481111561187457611874612107565b14156118c25760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161047f565b60038160048111156118d6576118d6612107565b141561192f5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161047f565b600481600481111561194357611943612107565b14156113255760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161047f565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b038311156119c95750600090506003611a76565b8460ff16601b141580156119e157508460ff16601c14155b156119f25750600090506004611a76565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611a46573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611a6f57600060019250925050611a76565b9150600090505b94509492505050565b6000806001600160ff1b03831681611a9c60ff86901c601b611f39565b9050611aaa8782888561199c565b935093505050935093915050565b828054828255906000526020600020908101928215611af3579160200282015b82811115611af3578251825591602001919060010190611ad8565b50611aff929150611b03565b5090565b5b80821115611aff5760008155600101611b04565b6001600160a01b038116811461132557600080fd5b8035611b3881611b18565b919050565b600060208284031215611b4f57600080fd5b8135610a0d81611b18565b600080600080600060808688031215611b7257600080fd5b8535611b7d81611b18565b94506020860135611b8d81611b18565b93506040860135925060608601356001600160401b0380821115611bb057600080fd5b818801915088601f830112611bc457600080fd5b813581811115611bd357600080fd5b896020828501011115611be557600080fd5b9699959850939650602001949392505050565b60008060408385031215611c0b57600080fd5b8235611c1681611b18565b946020939093013593505050565b6020808252825182820181905260009190848201906040850190845b81811015611c5c57835183529284019291840191600101611c40565b50909695505050505050565b600060208284031215611c7a57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611cbf57611cbf611c81565b604052919050565b60006001600160401b03821115611ce057611ce0611c81565b5060051b60200190565b600082601f830112611cfb57600080fd5b81356020611d10611d0b83611cc7565b611c97565b82815260059290921b84018101918181019086841115611d2f57600080fd5b8286015b84811015611d4a5780358352918301918301611d33565b509695505050505050565b60008060008060808587031215611d6b57600080fd5b84356001600160401b0380821115611d8257600080fd5b818701915087601f830112611d9657600080fd5b81356020611da6611d0b83611cc7565b82815260059290921b8401810191818101908b841115611dc557600080fd5b8286015b84811015611e4f57803586811115611de057600080fd5b8701603f81018e13611df157600080fd5b8481013587811115611e0557611e05611c81565b611e17601f8201601f19168701611c97565b8181528f6040838501011115611e2d5760008081fd5b8160408401888301376000918101870191909152845250918301918301611dc9565b509850611e5f9050898201611b2d565b965050506040870135915080821115611e7757600080fd5b611e8388838901611cea565b93506060870135915080821115611e9957600080fd5b50611ea687828801611cea565b91505092959194509250565b600060208284031215611ec457600080fd5b81358015158114610a0d57600080fd5b60008060408385031215611ee757600080fd5b8235611ef281611b18565b915060208301356001600160401b03811115611f0d57600080fd5b611f1985828601611cea565b9150509250929050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611f4c57611f4c611f23565b500190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b60208082526010908201526f155b9adb9bdddb8818dbdb9d1c9858dd60821b604082015260600190565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611fda57600080fd5b8151610a0d81611b18565b6020808252600d908201526c2737ba103a34329037bbb732b960991b604082015260600190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b600060001982141561204457612044611f23565b5060010190565b6001600160a01b03929092168252602082015260400190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000828210156120ab576120ab611f23565b500390565b60008160001904831182151516156120ca576120ca611f23565b500290565b6000826120ec57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220c0d121e96199d2094dc36165b0a44d3cc88b00105355c943ae4261f6178b932d64736f6c63430008090033";

type StakingSimpleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingSimpleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakingSimple__factory extends ContractFactory {
  constructor(...args: StakingSimpleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _setBaseNFTContract: string,
    _setSingnerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StakingSimple> {
    return super.deploy(
      _setBaseNFTContract,
      _setSingnerAddress,
      overrides || {}
    ) as Promise<StakingSimple>;
  }
  override getDeployTransaction(
    _setBaseNFTContract: string,
    _setSingnerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _setBaseNFTContract,
      _setSingnerAddress,
      overrides || {}
    );
  }
  override attach(address: string): StakingSimple {
    return super.attach(address) as StakingSimple;
  }
  override connect(signer: Signer): StakingSimple__factory {
    return super.connect(signer) as StakingSimple__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingSimpleInterface {
    return new utils.Interface(_abi) as StakingSimpleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingSimple {
    return new Contract(address, _abi, signerOrProvider) as StakingSimple;
  }
}
