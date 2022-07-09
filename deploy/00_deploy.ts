import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { StandardERC721A__factory } from "../typechain";
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
  if (network.name === "mainnet") {
    return;
  }
  console.log(`Deploying to ${network.name} with ${deployer}`);
  const args = [
    nft_name(network.name),
    nft_symbol(network.name),
    metadata_url(network.name),
    nft_mint_price(network.name),
    [beneficiary],
    [1],
    beneficiary,
  ];

  console.log(`Deploying SOA with arguments: ${JSON.stringify(args)}`);

  await deploy("Enumerator", {
    from: deployer,
    args: [],
  });
  let isDeployed;
  let nftContractAddress = "";
  try {
    const d = await deployments.get("StandardERC721A");
    const { differences } = await deployments.fetchIfDifferent(
      "StandardERC721A",
      {
        from: deployer,
        args,
      }
    );
    isDeployed = !differences;
    if (isDeployed) {
      nftContractAddress = d.address;
    }
  } catch (e) {
    isDeployed = false;
  }
  console.log(`Current NFT is deployed: ${isDeployed}`);
  if (!isDeployed) {
    const deployed = await deploy("StandardERC721A", {
      from: deployer,
      args,
    });
    const ownerSigner = await ethers.getSigner(deployer);
    const contract = StandardERC721A__factory.connect(
      deployed.address,
      ownerSigner
    );
    nftContractAddress = deployed.address;
  }

  if (network.name === "hardhat" || !nftContractAddress) {
    return;
  }
  try {
    await run("verify:verify", {
      address: nftContractAddress,
      constructorArguments: args,
    });
  } catch (err: any) {
    console.log(`Failed to verify: ${err.message}`);
  }
};
export default func;
func.tags = ["ERC721"];
