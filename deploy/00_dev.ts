import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { metadata_url } from "../utils/network";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network, run } = hre;
  const { deploy } = deployments;

  const { deployer, signer, staking } = await getNamedAccounts();
  const args = [metadata_url(network.name), signer, staking];
  const deployed = await deploy("TestERC721", {
    from: deployer,
    args,
    log: true,
  });
  try {
    await run("verify:verify", {
      address: deployed.address,
      constructorArguments: args,
    });
  } catch (err: any) {
    console.log(`Failed to verify: ${err.message}`);
  }
};
export default func;
func.tags = ["ERC721"];
