/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  APIRequestBuilder,
  APIRequestBuilderInterface,
} from "../APIRequestBuilder";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
      {
        internalType: "string",
        name: "_jobId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_link",
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
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkRequested",
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
    inputs: [],
    name: "data",
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
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_data",
        type: "uint256",
      },
    ],
    name: "fulfill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isOwner",
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
        internalType: "string",
        name: "url",
        type: "string",
      },
      {
        internalType: "string",
        name: "path",
        type: "string",
      },
      {
        internalType: "int256",
        name: "timesAmount",
        type: "int256",
      },
    ],
    name: "requestData",
    outputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "source",
        type: "string",
      },
    ],
    name: "stringToBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "result",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "text",
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
    name: "withdrawLink",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260016004553480156200001657600080fd5b5060405162001c9738038062001c97833981810160405260808110156200003c57600080fd5b8101908080519060200190929190805160405193929190846401000000008211156200006757600080fd5b838201915060208201858111156200007e57600080fd5b82518660018202830111640100000000821117156200009c57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000d2578082015181840152602081019050620000b5565b50505050905090810190601f168015620001005780820380516001836020036101000a031916815260200191505b50604052602001805190602001909291908051906020019092919050505033600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620002285762000222620002a360201b60201c565b6200023a565b62000239816200034d60201b60201c565b5b83600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200028c836200039160201b60201c565b600a8190555081600b8190555050505050620003be565b6200034b73c89bd4e1632d3a43cb03aaad5262cbe4038bc57173ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b815260040160206040518083038186803b1580156200030257600080fd5b505afa15801562000317573d6000803e3d6000fd5b505050506040513d60208110156200032e57600080fd5b81019080805190602001909291905050506200034d60201b60201c565b565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006060829050600081511415620003b0576000801b915050620003b9565b60208301519150505b919050565b6118c980620003ce6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80638dc654a2116100665780638dc654a2146101bb5780638f32d59b146101c5578063cfb51928146101e7578063f2fde38b146102b6578063ff825bf6146102fa57610093565b80631f1bd692146100985780634357855e1461011b57806373d4a13a146101535780638da5cb5b14610171575b600080fd5b6100a061046a565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e05780820151818401526020810190506100c5565b50505050905090810190601f16801561010d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101516004803603604081101561013157600080fd5b810190808035906020019092919080359060200190929190505050610508565b005b61015b61062f565b6040518082815260200191505060405180910390f35b610179610635565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101c361065f565b005b6101cd6108d3565b604051808215151515815260200191505060405180910390f35b6102a0600480360360208110156101fd57600080fd5b810190808035906020019064010000000081111561021a57600080fd5b82018360208201111561022c57600080fd5b8035906020019184600183028401116401000000008311171561024e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061092b565b6040518082815260200191505060405180910390f35b6102f8600480360360208110156102cc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610956565b005b6104546004803603606081101561031057600080fd5b810190808035906020019064010000000081111561032d57600080fd5b82018360208201111561033f57600080fd5b8035906020019184600183028401116401000000008311171561036157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156103c457600080fd5b8201836020820111156103d657600080fd5b803590602001918460018302840111640100000000831117156103f857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506109dc565b6040518082815260200191505060405180910390f35b60088054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105005780601f106104d557610100808354040283529160200191610500565b820191906000526020600020905b8154815290600101906020018083116104e357829003601f168201915b505050505081565b816005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061186c6028913960400191505060405180910390fd5b6005600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a281600781905550505050565b60075481565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6106676108d3565b6106d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60006106e3610b13565b90508073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb338373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561077f57600080fd5b505afa158015610793573d6000803e3d6000fd5b505050506040513d60208110156107a957600080fd5b81019080805190602001909291905050506040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561082357600080fd5b505af1158015610837573d6000803e3d6000fd5b505050506040513d602081101561084d57600080fd5b81019080805190602001909291905050506108d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f556e61626c6520746f207472616e73666572000000000000000000000000000081525060200191505060405180910390fd5b50565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b60006060829050600081511415610948576000801b915050610951565b60208301519150505b919050565b61095e6108d3565b6109d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6109d981610b3d565b50565b60006109e661179b565b6109fa600a5430634357855e60e01b610c83565b9050610a466040518060400160405280600381526020017f67657400000000000000000000000000000000000000000000000000000000008152508683610cb49092919063ffffffff16565b610a906040518060400160405280600481526020017f70617468000000000000000000000000000000000000000000000000000000008152508583610cb49092919063ffffffff16565b610ada6040518060400160405280600581526020017f74696d65730000000000000000000000000000000000000000000000000000008152508483610ce79092919063ffffffff16565b610b09600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682600b54610d1a565b9150509392505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610bc3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806118236026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610c8b61179b565b610c9361179b565b610caa85858584610fd2909392919063ffffffff16565b9150509392505050565b610ccb82846080015161108290919063ffffffff16565b610ce281846080015161108290919063ffffffff16565b505050565b610cfe82846080015161108290919063ffffffff16565b610d158184608001516110a790919063ffffffff16565b505050565b600030600454604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140182815260200192505050604051602081830303815290604052805190602001209050600454836060018181525050836005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550807fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af960405160405180910390a2600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634000aea08584610e528761114b565b6040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610ed9578082015181840152602081019050610ebe565b50505050905090810190601f168015610f065780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b158015610f2757600080fd5b505af1158015610f3b573d6000803e3d6000fd5b505050506040513d6020811015610f5157600080fd5b8101908080519060200190929190505050610fb7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806118496023913960400191505060405180910390fd5b60016004600082825401925050819055508090509392505050565b610fda61179b565b610fea8560800151610100611317565b508385600001818152505082856020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508185604001907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681525050849050949350505050565b61108f826003835161136b565b6110a281836114b090919063ffffffff16565b505050565b7fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000008112156110de576110d982826114d2565b611147565b67ffffffffffffffff8113156110fd576110f88282611540565b611146565b60008112611116576111118260008361136b565b611145565b611144826001837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0361136b565b5b5b5b5050565b6060634042994660e01b60008084600001518560200151866040015187606001516001896080015160000151604051602401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018781526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561127a57808201518184015260208101905061125f565b50505050905090810190601f1680156112a75780820380516001836020036101000a031916815260200191505b509950505050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050919050565b61131f611808565b60006020838161132b57fe5b0614611344576020828161133b57fe5b06602003820191505b81836020018181525050604051808452600081528281016020016040525082905092915050565b60178111611398576113928160058460ff16901b60ff16178461158c90919063ffffffff16565b506114ab565b60ff81116113da576113bd601860058460ff16901b178461158c90919063ffffffff16565b506113d4816001856115ac9092919063ffffffff16565b506114aa565b61ffff811161141d57611400601960058460ff16901b178461158c90919063ffffffff16565b50611417816002856115ac9092919063ffffffff16565b506114a9565b63ffffffff811161146257611445601a60058460ff16901b178461158c90919063ffffffff16565b5061145c816004856115ac9092919063ffffffff16565b506114a8565b67ffffffffffffffff81116114a75761148e601b60058460ff16901b178461158c90919063ffffffff16565b506114a5816008856115ac9092919063ffffffff16565b505b5b5b5b5b505050565b6114b8611808565b6114ca838460000151518485516115ce565b905092915050565b6114f060036005600660ff16901b178361158c90919063ffffffff16565b5061153c82827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0360405160200180828152602001915050604051602081830303815290604052611687565b5050565b61155e60026005600660ff16901b178361158c90919063ffffffff16565b50611588828260405160200180828152602001915050604051602081830303815290604052611687565b5050565b611594611808565b6115a483846000015151846116ac565b905092915050565b6115b4611808565b6115c58485600001515185856116fa565b90509392505050565b6115d6611808565b82518211156115e457600080fd5b8460200151828501111561160f5761160e856002611608886020015188870161175b565b02611777565b5b60008086518051876020830101935080888701111561162e5787860182525b60208701925050505b6020841061165a5780518252602082019150602081019050602084039350611637565b60006001856020036101000a03905080198251168184511681811785525050879350505050949350505050565b611694826002835161136b565b6116a781836114b090919063ffffffff16565b505050565b6116b4611808565b836020015183106116d1576116d0846002866020015102611777565b5b83518051602085830101848153818614156116ed576001820183525b5050508390509392505050565b611702611808565b846020015184830111156117205761171f85600286850102611777565b5b60006001836101000a039050855183868201018583198251161781528151858801111561174d5784870182525b505085915050949350505050565b60008183111561176d57829050611771565b8190505b92915050565b60608260000151905061178a8383611317565b5061179583826114b0565b50505050565b6040518060a0016040528060008019168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200160008152602001611802611808565b81525090565b60405180604001604052806060815260200160008152509056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373756e61626c6520746f207472616e73666572416e6443616c6c20746f206f7261636c65536f75726365206d75737420626520746865206f7261636c65206f66207468652072657175657374a2646970667358221220266792610236af6b474ee020a215ae936e023fc3e94d34cbf3c25829321f634164736f6c63430006060033";

export class APIRequestBuilder__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _oracle: string,
    _jobId: string,
    _fee: BigNumberish,
    _link: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<APIRequestBuilder> {
    return super.deploy(
      _oracle,
      _jobId,
      _fee,
      _link,
      overrides || {}
    ) as Promise<APIRequestBuilder>;
  }
  getDeployTransaction(
    _oracle: string,
    _jobId: string,
    _fee: BigNumberish,
    _link: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _oracle,
      _jobId,
      _fee,
      _link,
      overrides || {}
    );
  }
  attach(address: string): APIRequestBuilder {
    return super.attach(address) as APIRequestBuilder;
  }
  connect(signer: Signer): APIRequestBuilder__factory {
    return super.connect(signer) as APIRequestBuilder__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): APIRequestBuilderInterface {
    return new utils.Interface(_abi) as APIRequestBuilderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): APIRequestBuilder {
    return new Contract(address, _abi, signerOrProvider) as APIRequestBuilder;
  }
}
