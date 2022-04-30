/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestSignature,
  TestSignatureInterface,
} from "../../contracts/TestSignature";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_signerAddress",
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
    name: "validateSignatureMultiSig",
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
        internalType: "bytes",
        name: "signature",
        type: "bytes",
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
    name: "validateSignatureSingleSig",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610dcb380380610dcb83398101604081905261002f916100ad565b6100383361005d565b600180546001600160a01b0319166001600160a01b03929092169190911790556100dd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100bf57600080fd5b81516001600160a01b03811681146100d657600080fd5b9392505050565b610cdf806100ec6000396000f3fe608060405234801561001057600080fd5b506004361061006d5760003560e01c80635b7633d0146100725780635ef674a6146100a2578063715018a6146100c55780638da5cb5b146100cf5780638fa2a9f0146100d7578063ef689de6146100ea578063f2fde38b146100fd575b600080fd5b600154610085906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100b56100b036600461094f565b610110565b6040519015158152602001610099565b6100cd6101c3565b005b610085610207565b6100cd6100e5366004610a1b565b610216565b6100b56100f8366004610a3d565b610267565b6100cd61010b366004610a1b565b6103b7565b60008084848460405160200161012893929190610bcd565b604051602081830303815290604052805190602001209050600061014b82610457565b9050600061018f828a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506104a992505050565b90506001600160a01b038116158015906101b657506001546001600160a01b038281169116145b9998505050505050505050565b336101cc610207565b6001600160a01b0316146101fb5760405162461bcd60e51b81526004016101f290610bff565b60405180910390fd5b61020560006104cd565b565b6000546001600160a01b031690565b3361021f610207565b6001600160a01b0316146102455760405162461bcd60e51b81526004016101f290610bff565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000805b83518110156103ab5760008585838151811061028957610289610c34565b60200260200101518584815181106102a3576102a3610c34565b60200260200101516040516020016102dd9392919060609390931b6001600160601b03191683526014830191909152603482015260540190565b604051602081830303815290604052805190602001209050600061030082610457565b90506000610327828a868151811061031a5761031a610c34565b60200260200101516104a9565b90506001600160a01b0381161580159061034e57506001546001600160a01b038281169116145b6103955760405162461bcd60e51b81526020600482015260186024820152770a6d2cedcc2e8eae4ca40c8decae640dcdee840dac2e8c6d60431b60448201526064016101f2565b50505080806103a390610c60565b91505061026b565b50600195945050505050565b336103c0610207565b6001600160a01b0316146103e65760405162461bcd60e51b81526004016101f290610bff565b6001600160a01b03811661044b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101f2565b610454816104cd565b50565b6040517b0ca2ba3432b932bab69029b4b3b732b21026b2b9b9b0b3b29d05199960211b6020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b60008060006104b8858561051d565b915091506104c58161058d565b509392505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000808251604114156105545760208301516040840151606085015160001a61054887828585610743565b94509450505050610586565b82516040141561057e5760208301516040840151610573868383610826565b935093505050610586565b506000905060025b9250929050565b60008160048111156105a1576105a1610c7b565b14156105aa5750565b60018160048111156105be576105be610c7b565b14156106075760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b60448201526064016101f2565b600281600481111561061b5761061b610c7b565b14156106695760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016101f2565b600381600481111561067d5761067d610c7b565b14156106d65760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016101f2565b60048160048111156106ea576106ea610c7b565b14156104545760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016101f2565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b03831115610770575060009050600361081d565b8460ff16601b1415801561078857508460ff16601c14155b15610799575060009050600461081d565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156107ed573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166108165760006001925092505061081d565b9150600090505b94509492505050565b6000806001600160ff1b0383168161084360ff86901c601b610c91565b905061085187828885610743565b935093505050935093915050565b80356001600160a01b038116811461087657600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156108b9576108b961087b565b604052919050565b60006001600160401b038211156108da576108da61087b565b5060051b60200190565b600082601f8301126108f557600080fd5b8135602061090a610905836108c1565b610891565b82815260059290921b8401810191818101908684111561092957600080fd5b8286015b84811015610944578035835291830191830161092d565b509695505050505050565b60008060008060006080868803121561096757600080fd5b85356001600160401b038082111561097e57600080fd5b818801915088601f83011261099257600080fd5b8135818111156109a157600080fd5b8960208285010111156109b357600080fd5b602083019750809650506109c96020890161085f565b945060408801359150808211156109df57600080fd5b6109eb89838a016108e4565b93506060880135915080821115610a0157600080fd5b50610a0e888289016108e4565b9150509295509295909350565b600060208284031215610a2d57600080fd5b610a368261085f565b9392505050565b60008060008060808587031215610a5357600080fd5b84356001600160401b0380821115610a6a57600080fd5b818701915087601f830112610a7e57600080fd5b81356020610a8e610905836108c1565b82815260059290921b8401810191818101908b841115610aad57600080fd5b8286015b84811015610b3757803586811115610ac857600080fd5b8701603f81018e13610ad957600080fd5b8481013587811115610aed57610aed61087b565b610aff601f8201601f19168701610891565b8181528f6040838501011115610b155760008081fd5b8160408401888301376000918101870191909152845250918301918301610ab1565b509850610b47905089820161085f565b965050506040870135915080821115610b5f57600080fd5b610b6b888389016108e4565b93506060870135915080821115610b8157600080fd5b50610b8e878288016108e4565b91505092959194509250565b60008151602080840160005b83811015610bc257815187529582019590820190600101610ba6565b509495945050505050565b606084901b6001600160601b03191681526000610bf6610bf06014840186610b9a565b84610b9a565b95945050505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415610c7457610c74610c4a565b5060010190565b634e487b7160e01b600052602160045260246000fd5b60008219821115610ca457610ca4610c4a565b50019056fea26469706673582212205b419eaaa8ae25bbd5a26d965e439988ad3ae36b9da33178935a4a32058948a764736f6c63430008090033";

type TestSignatureConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestSignatureConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestSignature__factory extends ContractFactory {
  constructor(...args: TestSignatureConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _signerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestSignature> {
    return super.deploy(
      _signerAddress,
      overrides || {}
    ) as Promise<TestSignature>;
  }
  override getDeployTransaction(
    _signerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_signerAddress, overrides || {});
  }
  override attach(address: string): TestSignature {
    return super.attach(address) as TestSignature;
  }
  override connect(signer: Signer): TestSignature__factory {
    return super.connect(signer) as TestSignature__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestSignatureInterface {
    return new utils.Interface(_abi) as TestSignatureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestSignature {
    return new Contract(address, _abi, signerOrProvider) as TestSignature;
  }
}