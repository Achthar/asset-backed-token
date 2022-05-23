/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Distributor, DistributorInterface } from "../Distributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "address",
        name: "_req",
        type: "address",
      },
      {
        internalType: "address",
        name: "_staking",
        type: "address",
      },
      {
        internalType: "address",
        name: "_authority",
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
        internalType: "contract IAuthority",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardRate",
        type: "uint256",
      },
    ],
    name: "addRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "adjustments",
    outputs: [
      {
        internalType: "bool",
        name: "add",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "target",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract IAuthority",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bounty",
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
    name: "distribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "info",
    outputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
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
        name: "_rate",
        type: "uint256",
      },
    ],
    name: "nextRewardAt",
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
        name: "_recipient",
        type: "address",
      },
    ],
    name: "nextRewardFor",
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
        name: "_index",
        type: "uint256",
      },
    ],
    name: "removeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieveBounty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_add",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_target",
        type: "uint256",
      },
    ],
    name: "setAdjustment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IAuthority",
        name: "_newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bounty",
        type: "uint256",
      },
    ],
    name: "setBounty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x610140604052600c6101008190526b15539055551213d49256915160a21b610120908152620000329160009190620001a7565b50620f424060e0523480156200004757600080fd5b5060405162001eae38038062001eae8339810160408190526200006a916200026a565b600180546001600160a01b0319166001600160a01b0383161790556001600160a01b038416620000e15760405162461bcd60e51b815260206004820152601660248201527f5a65726f20616464726573733a2054726561737572790000000000000000000060448201526064015b60405180910390fd5b6001600160a01b0380851660a0528316620001335760405162461bcd60e51b81526020600482015260116024820152705a65726f20616464726573733a2052455160781b6044820152606401620000d8565b6001600160a01b038084166080528216620001915760405162461bcd60e51b815260206004820152601560248201527f5a65726f20616464726573733a205374616b696e6700000000000000000000006044820152606401620000d8565b506001600160a01b031660c05250620003039050565b828054620001b590620002c7565b90600052602060002090601f016020900481019282620001d9576000855562000224565b82601f10620001f457805160ff191683800117855562000224565b8280016001018555821562000224579182015b828111156200022457825182559160200191906001019062000207565b506200023292915062000236565b5090565b5b8082111562000232576000815560010162000237565b80516001600160a01b03811681146200026557600080fd5b919050565b600080600080608085870312156200028157600080fd5b6200028c856200024d565b93506200029c602086016200024d565b9250620002ac604086016200024d565b9150620002bc606086016200024d565b905092959194509250565b600181811c90821680620002dc57607f821691505b602082108103620002fd57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e051611b556200035960003960008181610ee801526114d4015260008181610fc9015281816111dc01526112d801526000818161108c01526112ab01526000610f0a0152611b556000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063943dfef11161008c578063c9fa8b2a11610066578063c9fa8b2a14610234578063e4fc6b6d14610247578063e7187e8a1461024f578063f79822431461025757600080fd5b8063943dfef114610195578063bc3b2b121461019e578063bf7e214f146101ef57600080fd5b80635db854b0116100bd5780635db854b01461015c5780637a9e5e4b1461016f5780638e69e2551461018257600080fd5b80632e340599146100e457806336d33f44146101265780635d87d36314610147575b600080fd5b6100f76100f2366004611801565b61026a565b6040805192835273ffffffffffffffffffffffffffffffffffffffff9091166020830152015b60405180910390f35b61013961013436600461183c565b6102ae565b60405190815260200161011d565b61015a610155366004611801565b61036a565b005b61015a61016a366004611860565b6104e4565b61015a61017d36600461183c565b610a21565b61015a610190366004611801565b610b8a565b61013960035481565b6101d26101ac366004611801565b600260208190526000918252604090912080546001820154919092015460ff9092169183565b60408051931515845260208401929092529082015260600161011d565b60015461020f9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161011d565b610139610242366004611801565b610ee4565b61015a610fb1565b6101396111c2565b61015a6102653660046118a2565b61135b565b6004818154811061027a57600080fd5b60009182526020909120600290910201805460019091015490915073ffffffffffffffffffffffffffffffffffffffff1682565b60008060005b600454811015610363578373ffffffffffffffffffffffffffffffffffffffff16600482815481106102e8576102e86118ce565b600091825260209091206001600290920201015473ffffffffffffffffffffffffffffffffffffffff1603610351576103446004828154811061032d5761032d6118ce565b906000526020600020906002020160000154610ee4565b61034e908361192c565b91505b8061035b81611944565b9150506102b4565b5092915050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630c340a246040518163ffffffff1660e01b8152600401602060405180830381865afa1580156103d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103fb919061197c565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161460009061046c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104639190611999565b60405180910390fd5b50671bc16d674ec800008111156104df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f546f6f206d7563680000000000000000000000000000000000000000000000006044820152606401610463565b600355565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630c340a246040518163ffffffff1660e01b8152600401602060405180830381865afa158015610551573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610575919061197c565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806106695750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663452a93206040518163ffffffff1660e01b8152600401602060405180830381865afa158015610616573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063a919061197c565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b6106f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f43616c6c6572206973206e6f7420676f7665726e6f72206f722067756172646960448201527f616e0000000000000000000000000000000000000000000000000000000000006064820152608401610463565b600073ffffffffffffffffffffffffffffffffffffffff1660048581548110610720576107206118ce565b600091825260209091206001600290920201015473ffffffffffffffffffffffffffffffffffffffff16036107b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f526563697069656e7420646f6573206e6f7420657869737400000000000000006044820152606401610463565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663452a93206040518163ffffffff1660e01b8152600401602060405180830381865afa15801561081e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610842919061197c565b73ffffffffffffffffffffffffffffffffffffffff163303610905576103e860048581548110610874576108746118ce565b90600052602060002090600202016000015460196108929190611a77565b61089c9190611ab4565b821115610905576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f4c696d697465723a2063616e6e6f742061646a757374206279203e322e3525006044820152606401610463565b826109be576004848154811061091d5761091d6118ce565b9060005260206000209060020201600001548211156109be576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f43616e6e6f742064656372656173652072617465206279206d6f72652074686160448201527f6e20697420616c726561647920697300000000000000000000000000000000006064820152608401610463565b604080516060810182529315158452602080850193845284820192835260009586526002908190529420925183547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169015151783559051600183015551910155565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630c340a246040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a8e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab2919061197c565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614600090610b1a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104639190611999565b50600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a250565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630c340a246040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bf7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1b919061197c565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610d0f5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663452a93206040518163ffffffff1660e01b8152600401602060405180830381865afa158015610cbc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce0919061197c565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b610d9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f43616c6c6572206973206e6f7420676f7665726e6f72206f722067756172646960448201527f616e0000000000000000000000000000000000000000000000000000000000006064820152608401610463565b600073ffffffffffffffffffffffffffffffffffffffff1660048281548110610dc657610dc66118ce565b600091825260209091206001600290920201015473ffffffffffffffffffffffffffffffffffffffff1603610e57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f526563697069656e7420646f6573206e6f7420657869737400000000000000006044820152606401610463565b600060048281548110610e6c57610e6c6118ce565b906000526020600020906002020160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060048281548110610ed057610ed06118ce565b600091825260209091206002909102015550565b60007f0000000000000000000000000000000000000000000000000000000000000000827f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f979190611aef565b610fa19190611a77565b610fab9190611ab4565b92915050565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611050576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4f6e6c79207374616b696e6700000000000000000000000000000000000000006044820152606401610463565b60005b6004548110156111bf57600060048281548110611072576110726118ce565b90600052602060002090600202016000015411156111ad577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166340c10f19600483815481106110d9576110d96118ce565b906000526020600020906002020160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166111216004858154811061032d5761032d6118ce565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff90921660048301526024820152604401600060405180830381600087803b15801561118c57600080fd5b505af11580156111a0573d6000803e3d6000fd5b505050506111ad81611616565b806111b781611944565b915050611053565b50565b60003373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611263576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4f6e6c79207374616b696e6700000000000000000000000000000000000000006044820152606401610463565b60035415611354576003546040517f40c10f1900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916340c10f1991611321917f00000000000000000000000000000000000000000000000000000000000000009160040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b15801561133b57600080fd5b505af115801561134f573d6000803e3d6000fd5b505050505b5060035490565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630c340a246040518163ffffffff1660e01b8152600401602060405180830381865afa1580156113c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ec919061197c565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614600090611454576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104639190611999565b5073ffffffffffffffffffffffffffffffffffffffff82166114d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f5a65726f20616464726573733a20526563697069656e740000000000000000006044820152606401610463565b7f000000000000000000000000000000000000000000000000000000000000000081111561155c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f526174652063616e6e6f74206578636565642064656e6f6d696e61746f7200006044820152606401610463565b6040805180820190915290815273ffffffffffffffffffffffffffffffffffffffff918216602082019081526004805460018101825560009190915291517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b600290930292830155517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19c90910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001691909216179055565b6000818152600260208181526040928390208351606081018552815460ff161515815260018201549281018390529201549282019290925290156117075780511561170b57806020015160048381548110611673576116736118ce565b90600052602060002090600202016000016000828254611693919061192c565b9091555050604081015160048054849081106116b1576116b16118ce565b90600052602060002090600202016000015410611707576000828152600260205260408082206001019190915581015160048054849081106116f5576116f56118ce565b60009182526020909120600290910201555b5050565b806020015160048381548110611723576117236118ce565b906000526020600020906002020160000154111561177e57806020015160048381548110611753576117536118ce565b906000526020600020906002020160000160008282546117739190611b08565b909155506117a59050565b600060048381548110611793576117936118ce565b60009182526020909120600290910201555b8060400151600483815481106117bd576117bd6118ce565b90600052602060002090600202016000015411611707576000828152600260205260408082206001019190915581015160048054849081106116f5576116f56118ce565b60006020828403121561181357600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff811681146111bf57600080fd5b60006020828403121561184e57600080fd5b81356118598161181a565b9392505050565b6000806000806080858703121561187657600080fd5b843593506020850135801515811461188d57600080fd5b93969395505050506040820135916060013590565b600080604083850312156118b557600080fd5b82356118c08161181a565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561193f5761193f6118fd565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611975576119756118fd565b5060010190565b60006020828403121561198e57600080fd5b81516118598161181a565b600060208083526000845481600182811c9150808316806119bb57607f831692505b85831081036119f1577f4e487b710000000000000000000000000000000000000000000000000000000085526022600452602485fd5b878601838152602001818015611a0e5760018114611a3d57611a68565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861682528782019650611a68565b60008b81526020902060005b86811015611a6257815484820152908501908901611a49565b83019750505b50949998505050505050505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611aaf57611aaf6118fd565b500290565b600082611aea577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600060208284031215611b0157600080fd5b5051919050565b600082821015611b1a57611b1a6118fd565b50039056fea2646970667358221220769464e8dd9b955274f351f8e565a6968195ebeb0da6492500e720aadb6c94ac64736f6c634300080e0033";

export class Distributor__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _treasury: string,
    _req: string,
    _staking: string,
    _authority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Distributor> {
    return super.deploy(
      _treasury,
      _req,
      _staking,
      _authority,
      overrides || {}
    ) as Promise<Distributor>;
  }
  getDeployTransaction(
    _treasury: string,
    _req: string,
    _staking: string,
    _authority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _treasury,
      _req,
      _staking,
      _authority,
      overrides || {}
    );
  }
  attach(address: string): Distributor {
    return super.attach(address) as Distributor;
  }
  connect(signer: Signer): Distributor__factory {
    return super.connect(signer) as Distributor__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DistributorInterface {
    return new utils.Interface(_abi) as DistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Distributor {
    return new Contract(address, _abi, signerOrProvider) as Distributor;
  }
}