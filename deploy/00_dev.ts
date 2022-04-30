import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { SOA__factory } from "../typechain";
import {
  nft_name,
  nft_symbol,
  metadata_url,
  nft_mint_price,
} from "../utils/network";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network, run, ethers } = hre;
  const { deploy } = deployments;

  const { deployer, signer, beneficiary } = await getNamedAccounts();
  const args = [
    nft_name(network.name),
    nft_symbol(network.name),
    metadata_url(network.name),
    nft_mint_price(network.name),
    beneficiary,
    beneficiary,
  ];
  const deployed = await deploy("SOA", {
    from: deployer,
    args,
    log: true,
  });

  const ownerSigner = await ethers.getSigner(deployer);
  const contract = SOA__factory.connect(deployed.address, ownerSigner);
  await contract.addSigner(signer);
  if (network.name === "hardhat") {
    return;
  }
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
