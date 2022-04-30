/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721,
  ERC721Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC721/ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200149a3803806200149a8339810160408190526200003491620001db565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b50505062000282565b828054620000769062000245565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013657600080fd5b81516001600160401b03808211156200015357620001536200010e565b604051601f8301601f19908116603f011681019082821181831017156200017e576200017e6200010e565b816040528381526020925086838588010111156200019b57600080fd5b600091505b83821015620001bf5785820183015181830184015290820190620001a0565b83821115620001d15760008385830101525b9695505050505050565b60008060408385031215620001ef57600080fd5b82516001600160401b03808211156200020757600080fd5b620002158683870162000124565b935060208501519150808211156200022c57600080fd5b506200023b8582860162000124565b9150509250929050565b600181811c908216806200025a57607f821691505b602082108114156200027c57634e487b7160e01b600052602260045260246000fd5b50919050565b61120880620002926000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806301ffc9a7146100b457806306fdde03146100dc578063081812fc146100f1578063095ea7b31461011c57806323b872dd1461013157806342842e0e146101445780636352211e1461015757806370a082311461016a57806395d89b411461018b578063a22cb46514610193578063b88d4fde146101a6578063c87b56dd146101b9578063e985e9c5146101cc575b600080fd5b6100c76100c2366004610d19565b6101df565b60405190151581526020015b60405180910390f35b6100e4610231565b6040516100d39190610d8e565b6101046100ff366004610da1565b6102c3565b6040516001600160a01b0390911681526020016100d3565b61012f61012a366004610dd6565b610350565b005b61012f61013f366004610e00565b610461565b61012f610152366004610e00565b610492565b610104610165366004610da1565b6104ad565b61017d610178366004610e3c565b610524565b6040519081526020016100d3565b6100e46105ab565b61012f6101a1366004610e57565b6105ba565b61012f6101b4366004610ea9565b6105c9565b6100e46101c7366004610da1565b610601565b6100c76101da366004610f84565b6106d9565b60006001600160e01b031982166380ac58cd60e01b148061021057506001600160e01b03198216635b5e139f60e01b145b8061022b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461024090610fb7565b80601f016020809104026020016040519081016040528092919081815260200182805461026c90610fb7565b80156102b95780601f1061028e576101008083540402835291602001916102b9565b820191906000526020600020905b81548152906001019060200180831161029c57829003601f168201915b5050505050905090565b60006102ce82610707565b6103345760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061035b826104ad565b9050806001600160a01b0316836001600160a01b031614156103c95760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161032b565b336001600160a01b03821614806103e557506103e581336106d9565b6104525760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776044820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b606482015260840161032b565b61045c8383610724565b505050565b61046b3382610792565b6104875760405162461bcd60e51b815260040161032b90610ff2565b61045c83838361085c565b61045c838383604051806020016040528060008152506105c9565b6000818152600260205260408120546001600160a01b03168061022b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161032b565b60006001600160a01b03821661058f5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161032b565b506001600160a01b031660009081526003602052604090205490565b60606001805461024090610fb7565b6105c53383836109f8565b5050565b6105d33383610792565b6105ef5760405162461bcd60e51b815260040161032b90610ff2565b6105fb84848484610ac3565b50505050565b606061060c82610707565b6106705760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b606482015260840161032b565b600061068760408051602081019091526000815290565b905060008151116106a757604051806020016040528060008152506106d2565b806106b184610af6565b6040516020016106c2929190611043565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610759826104ad565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061079d82610707565b6107fe5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161032b565b6000610809836104ad565b9050806001600160a01b0316846001600160a01b031614806108445750836001600160a01b0316610839846102c3565b6001600160a01b0316145b80610854575061085481856106d9565b949350505050565b826001600160a01b031661086f826104ad565b6001600160a01b0316146108d35760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161032b565b6001600160a01b0382166109355760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161032b565b610940600082610724565b6001600160a01b0383166000908152600360205260408120805460019290610969908490611088565b90915550506001600160a01b038216600090815260036020526040812080546001929061099790849061109f565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b03161415610a565760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604482015260640161032b565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610ace84848461085c565b610ada84848484610bf3565b6105fb5760405162461bcd60e51b815260040161032b906110b7565b606081610b1a5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610b445780610b2e81611109565b9150610b3d9050600a8361113a565b9150610b1e565b6000816001600160401b03811115610b5e57610b5e610e93565b6040519080825280601f01601f191660200182016040528015610b88576020820181803683370190505b5090505b841561085457610b9d600183611088565b9150610baa600a8661114e565b610bb590603061109f565b60f81b818381518110610bca57610bca611162565b60200101906001600160f81b031916908160001a905350610bec600a8661113a565b9450610b8c565b60006001600160a01b0384163b15610cf557604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610c37903390899088908890600401611178565b602060405180830381600087803b158015610c5157600080fd5b505af1925050508015610c81575060408051601f3d908101601f19168201909252610c7e918101906111b5565b60015b610cdb573d808015610caf576040519150601f19603f3d011682016040523d82523d6000602084013e610cb4565b606091505b508051610cd35760405162461bcd60e51b815260040161032b906110b7565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610854565b506001949350505050565b6001600160e01b031981168114610d1657600080fd5b50565b600060208284031215610d2b57600080fd5b81356106d281610d00565b60005b83811015610d51578181015183820152602001610d39565b838111156105fb5750506000910152565b60008151808452610d7a816020860160208601610d36565b601f01601f19169290920160200192915050565b6020815260006106d26020830184610d62565b600060208284031215610db357600080fd5b5035919050565b80356001600160a01b0381168114610dd157600080fd5b919050565b60008060408385031215610de957600080fd5b610df283610dba565b946020939093013593505050565b600080600060608486031215610e1557600080fd5b610e1e84610dba565b9250610e2c60208501610dba565b9150604084013590509250925092565b600060208284031215610e4e57600080fd5b6106d282610dba565b60008060408385031215610e6a57600080fd5b610e7383610dba565b915060208301358015158114610e8857600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610ebf57600080fd5b610ec885610dba565b9350610ed660208601610dba565b92506040850135915060608501356001600160401b0380821115610ef957600080fd5b818701915087601f830112610f0d57600080fd5b813581811115610f1f57610f1f610e93565b604051601f8201601f19908116603f01168101908382118183101715610f4757610f47610e93565b816040528281528a6020848701011115610f6057600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610f9757600080fd5b610fa083610dba565b9150610fae60208401610dba565b90509250929050565b600181811c90821680610fcb57607f821691505b60208210811415610fec57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008351611055818460208801610d36565b835190830190611069818360208801610d36565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b60008282101561109a5761109a611072565b500390565b600082198211156110b2576110b2611072565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600060001982141561111d5761111d611072565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261114957611149611124565b500490565b60008261115d5761115d611124565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906111ab90830184610d62565b9695505050505050565b6000602082840312156111c757600080fd5b81516106d281610d0056fea26469706673582212209ebdf4050fb25d8cb0ef9d8be4e07302c1379878a220b12bcab2550e530ce1f664736f6c63430008090033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  override getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  override connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}