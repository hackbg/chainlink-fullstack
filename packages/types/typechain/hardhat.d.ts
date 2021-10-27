/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ChainlinkClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkClient__factory>;
    getContractFactory(
      name: "AggregatorInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorInterface__factory>;
    getContractFactory(
      name: "AggregatorV2V3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV2V3Interface__factory>;
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "ChainlinkRequestInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkRequestInterface__factory>;
    getContractFactory(
      name: "ENSInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ENSInterface__factory>;
    getContractFactory(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenInterface__factory>;
    getContractFactory(
      name: "PointerInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PointerInterface__factory>;
    getContractFactory(
      name: "LinkTokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenReceiver__factory>;
    getContractFactory(
      name: "MockV3Aggregator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockV3Aggregator__factory>;
    getContractFactory(
      name: "VRFCoordinatorMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFCoordinatorMock__factory>;
    getContractFactory(
      name: "ENSResolver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ENSResolver__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "VRFConsumerBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFConsumerBase__factory>;
    getContractFactory(
      name: "Denominations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Denominations__factory>;
    getContractFactory(
      name: "AggregatorInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorInterface__factory>;
    getContractFactory(
      name: "AggregatorV2V3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV2V3Interface__factory>;
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "FeedRegistryInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FeedRegistryInterface__factory>;
    getContractFactory(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenInterface__factory>;
    getContractFactory(
      name: "VRFConsumerBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFConsumerBase__factory>;
    getContractFactory(
      name: "ERC677Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC677Token__factory>;
    getContractFactory(
      name: "LinkToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkToken__factory>;
    getContractFactory(
      name: "ERC677",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC677__factory>;
    getContractFactory(
      name: "ERC677Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC677Receiver__factory>;
    getContractFactory(
      name: "LinkERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkERC20__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "APIConsumer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.APIConsumer__factory>;
    getContractFactory(
      name: "MockFeedRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockFeedRegistry__factory>;
    getContractFactory(
      name: "MockOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockOracle__factory>;
    getContractFactory(
      name: "Multicall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Multicall__factory>;
    getContractFactory(
      name: "PriceConsumer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PriceConsumer__factory>;
    getContractFactory(
      name: "PriceConsumerV3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PriceConsumerV3__factory>;
    getContractFactory(
      name: "RandomNumberConsumer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RandomNumberConsumer__factory>;
    getContractFactory(
      name: "RandomSVG",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RandomSVG__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}