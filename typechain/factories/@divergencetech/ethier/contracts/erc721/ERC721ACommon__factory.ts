/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721ACommon,
  ERC721ACommonInterface,
} from "../../../../../@divergencetech/ethier/contracts/erc721/ERC721ACommon";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintERC2309QuantityExceedsLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnershipNotInitializedForExtraData",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
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
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
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
    ],
    name: "ConsecutiveTransfer",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "renounceOwnership",
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
    inputs: [],
    name: "totalSupply",
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620017683803806200176883398101604081905262000034916200024f565b8151829082906200004d906002906020850190620000dc565b50805162000063906003906020840190620000dc565b5050600080555062000075336200008a565b50506009805460ff60a01b19169055620002f6565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000ea90620002b9565b90600052602060002090601f0160209004810192826200010e576000855562000159565b82601f106200012957805160ff191683800117855562000159565b8280016001018555821562000159579182015b82811115620001595782518255916020019190600101906200013c565b50620001679291506200016b565b5090565b5b808211156200016757600081556001016200016c565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001aa57600080fd5b81516001600160401b0380821115620001c757620001c762000182565b604051601f8301601f19908116603f01168101908282118183101715620001f257620001f262000182565b816040528381526020925086838588010111156200020f57600080fd5b600091505b8382101562000233578582018301518183018401529082019062000214565b83821115620002455760008385830101525b9695505050505050565b600080604083850312156200026357600080fd5b82516001600160401b03808211156200027b57600080fd5b620002898683870162000198565b93506020850151915080821115620002a057600080fd5b50620002af8582860162000198565b9150509250929050565b600181811c90821680620002ce57607f821691505b60208210811415620002f057634e487b7160e01b600052602260045260246000fd5b50919050565b61146280620003066000396000f3fe608060405234801561001057600080fd5b50600436106100fc5760003560e01c806301ffc9a71461010157806306fdde0314610129578063081812fc1461013e578063095ea7b31461015e57806318160ddd1461017357806323b872dd146101895780633f4ba83a1461019c57806342842e0e146101a45780635c975abb146101b75780636352211e146101bf57806370a08231146101d2578063715018a6146101e55780638456cb59146101ed5780638da5cb5b146101f557806395d89b41146101fd578063a22cb46514610205578063b88d4fde14610218578063c87b56dd1461022b578063e985e9c51461023e578063f2fde38b14610251575b600080fd5b61011461010f366004611060565b610264565b60405190151581526020015b60405180910390f35b610131610275565b60405161012091906110d5565b61015161014c3660046110e8565b610307565b6040516101209190611101565b61017161016c36600461112a565b61034b565b005b600154600054035b604051908152602001610120565b610171610197366004611156565b6103eb565b610171610589565b6101716101b2366004611156565b61059b565b6101146105bb565b6101516101cd3660046110e8565b6105cb565b61017b6101e0366004611197565b6105d6565b610171610624565b610171610636565b610151610646565b610131610655565b6101716102133660046111b4565b610664565b610171610226366004611208565b610718565b6101316102393660046110e8565b610762565b61011461024c3660046112e7565b6107f4565b61017161025f366004611197565b61086b565b600061026f826108e9565b92915050565b60606002805461028490611315565b80601f01602080910402602001604051908101604052809291908181526020018280546102b090611315565b80156102fd5780601f106102d2576101008083540402835291602001916102fd565b820191906000526020600020905b8154815290600101906020018083116102e057829003601f168201915b5050505050905090565b600061031282610937565b61032f576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b6000610356826105cb565b9050336001600160a01b0382161461038f5761037281336107f4565b61038f576040516367d9dca160e11b815260040160405180910390fd5b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60006103f68261095e565b9050836001600160a01b0316816001600160a01b0316146104295760405162a1148160e81b815260040160405180910390fd5b60008281526006602052604090208054338082146001600160a01b038816909114176104765761045986336107f4565b61047657604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b03851661049d57604051633a954ecd60e21b815260040160405180910390fd5b6104aa86868660016109bf565b80156104b557600082555b6001600160a01b038681166000908152600560205260408082208054600019019055918716808252919020805460010190554260a01b17600160e11b17600085815260046020526040902055600160e11b8316610540576001840160008181526004602052604090205461053e57600054811461053e5760008181526004602052604090208490555b505b83856001600160a01b0316876001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050505050565b610591610a18565b610599610a77565b565b6105b683838360405180602001604052806000815250610718565b505050565b600954600160a01b900460ff1690565b600061026f8261095e565b60006001600160a01b0382166105ff576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b03166000908152600560205260409020546001600160401b031690565b61062c610a18565b6105996000610ac6565b61063e610a18565b610599610b18565b6009546001600160a01b031690565b60606003805461028490611315565b3361066e81610b5b565b6001600160a01b0316836001600160a01b0316141561070e5781610693576001610696565b60005b6001600160a01b0382166000908152600860205260409020805460ff1916600183818111156106c7576106c7611350565b0217905550826001600160a01b0316816001600160a01b031660008051602061140d83398151915284604051610701911515815260200190565b60405180910390a3505050565b6105b68383610ccc565b6107238484846103eb565b6001600160a01b0383163b1561075c5761073f84848484610d50565b61075c576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b606061076d82610937565b61078a57604051630a14c4b560e41b815260040160405180910390fd5b60006107a160408051602081019091526000815290565b90508051600014156107c257604051806020016040528060008152506107ed565b806107cc84610e47565b6040516020016107dd929190611366565b6040516020818303038152906040525b9392505050565b6001600160a01b03808316600090815260076020908152604080832093851683529290529081205460ff161561082c5750600161026f565b6001600160a01b03831660009081526008602052604081205460ff16600181111561085957610859611350565b1480156107ed57506107ed8383610e96565b610873610a18565b6001600160a01b0381166108dd5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6108e681610ac6565b50565b60006301ffc9a760e01b6001600160e01b03198316148061091a57506380ac58cd60e01b6001600160e01b03198316145b8061026f5750506001600160e01b031916635b5e139f60e01b1490565b600080548210801561026f575050600090815260046020526040902054600160e01b161590565b6000816000548110156109a657600081815260046020526040902054600160e01b81166109a4575b806107ed575060001901600081815260046020526040902054610986565b505b604051636f96cda160e11b815260040160405180910390fd5b6109c76105bb565b15610a0c5760405162461bcd60e51b8152602060048201526015602482015274115490cdcc8c5050dbdb5b5bdb8e881c185d5cd959605a1b60448201526064016108d4565b61075c84848484610ed4565b33610a21610646565b6001600160a01b0316146105995760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108d4565b610a7f610fb7565b6009805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b604051610abc9190611101565b60405180910390a1565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610b20611002565b6009805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610aaf3390565b600080468060018114610b905760898114610bac5760048114610bc857620138818114610be4576105398114610c0057610c18565b73a5409ec958c83c3f309868babaca7c86dcb077c19250610c18565b7358807bad0b376efc12f5ad86aac70e78ed67deae9250610c18565b73f57b2c51ded3a29e6891aba85459d600256cf3179250610c18565b73ff7ca10af37178bdd056628ef42fd7f799fac77c9250610c18565b73e1a2bbc877b29adbc56d2659dbcb0ae14ee6207192505b506001600160a01b0382161580610c2f5750806089145b80610c3c57508062013881145b15610c48575092915050565b60405163c455279160e01b81526001600160a01b0383169063c455279190610c74908790600401611101565b60206040518083038186803b158015610c8c57600080fd5b505afa158015610ca0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc49190611395565b949350505050565b6001600160a01b038216331415610cf65760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155905190815291929160008051602061140d833981519152910160405180910390a35050565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290610d859033908990889088906004016113b2565b602060405180830381600087803b158015610d9f57600080fd5b505af1925050508015610dcf575060408051601f3d908101601f19168201909252610dcc918101906113ef565b60015b610e2a573d808015610dfd576040519150601f19603f3d011682016040523d82523d6000602084013e610e02565b606091505b508051610e22576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b604080516080810191829052607f0190826030600a8206018353600a90045b8015610e8457600183039250600a81066030018353600a9004610e66565b50819003601f19909101908152919050565b600080610ea284610b5b565b90506001600160a01b03811615801590610cc45750826001600160a01b0316816001600160a01b031614949350505050565b6001600160a01b0383161580610f16575060016001600160a01b03841660009081526008602052604090205460ff166001811115610f1457610f14611350565b145b15610f205761075c565b6000610f2b84610b5b565b90506001600160a01b038116610f6457506001600160a01b0383166000908152600860205260409020805460ff1916600117905561075c565b610f6d846105d6565b610fb057806001600160a01b0316846001600160a01b031660008051602061140d8339815191526001604051610fa7911515815260200190565b60405180910390a35b5050505050565b610fbf6105bb565b6105995760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016108d4565b61100a6105bb565b156105995760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016108d4565b6001600160e01b0319811681146108e657600080fd5b60006020828403121561107257600080fd5b81356107ed8161104a565b60005b83811015611098578181015183820152602001611080565b8381111561075c5750506000910152565b600081518084526110c181602086016020860161107d565b601f01601f19169290920160200192915050565b6020815260006107ed60208301846110a9565b6000602082840312156110fa57600080fd5b5035919050565b6001600160a01b0391909116815260200190565b6001600160a01b03811681146108e657600080fd5b6000806040838503121561113d57600080fd5b823561114881611115565b946020939093013593505050565b60008060006060848603121561116b57600080fd5b833561117681611115565b9250602084013561118681611115565b929592945050506040919091013590565b6000602082840312156111a957600080fd5b81356107ed81611115565b600080604083850312156111c757600080fd5b82356111d281611115565b9150602083013580151581146111e757600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561121e57600080fd5b843561122981611115565b9350602085013561123981611115565b92506040850135915060608501356001600160401b038082111561125c57600080fd5b818701915087601f83011261127057600080fd5b813581811115611282576112826111f2565b604051601f8201601f19908116603f011681019083821181831017156112aa576112aa6111f2565b816040528281528a60208487010111156112c357600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156112fa57600080fd5b823561130581611115565b915060208301356111e781611115565b600181811c9082168061132957607f821691505b6020821081141561134a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052602160045260246000fd5b6000835161137881846020880161107d565b83519083019061138c81836020880161107d565b01949350505050565b6000602082840312156113a757600080fd5b81516107ed81611115565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906113e5908301846110a9565b9695505050505050565b60006020828403121561140157600080fd5b81516107ed8161104a56fe17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31a26469706673582212205d0010b4946c69d254c8d4790a7897fdbe21e1668b86be9f8c76cccc7c58e28364736f6c63430008090033";

type ERC721ACommonConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ACommonConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721ACommon__factory extends ContractFactory {
  constructor(...args: ERC721ACommonConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721ACommon> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<ERC721ACommon>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): ERC721ACommon {
    return super.attach(address) as ERC721ACommon;
  }
  override connect(signer: Signer): ERC721ACommon__factory {
    return super.connect(signer) as ERC721ACommon__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721ACommonInterface {
    return new utils.Interface(_abi) as ERC721ACommonInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721ACommon {
    return new Contract(address, _abi, signerOrProvider) as ERC721ACommon;
  }
}
