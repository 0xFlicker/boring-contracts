import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { metadata_url } from "../utils/network";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;

  const { deployer, owner, signer } = await getNamedAccounts();

  await deploy("TestERC721", {
    from: deployer,
    args: [metadata_url(network.name), owner, signer],
    log: true,
  });
};
export default func;
func.tags = ["ERC721"];
