import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  SOA,
  SOA__factory,
  SOUL__factory,
  SignedWeights__factory,
  StakingSimple__factory,
  SignedWeights,
  StakingSimple,
} from "../typechain";
import { BigNumber, utils } from "ethers";

async function mint(contract: SOA, user: SignerWithAddress, count: number) {
  if (!(await contract.publicSaleActive())) {
    await contract.setMintActive(true);
  }
  return await contract.connect(user).mint(user.address, count, {
    value: utils.parseEther(count.toString()),
  });
}

async function deployNft(accounts: SignerWithAddress[]) {
  const [owner, signer, beneficiary] = accounts;
  const mintAmount = utils.parseEther("1");
  const mintFactory = new SOA__factory(owner);
  const mintContract = await mintFactory.deploy(
    "TestCoin",
    "TC",
    "foo",
    mintAmount,
    signer.address,
    [beneficiary.address],
    [1],
    beneficiary.address
  );
  return mintContract;
}

async function deployStaking(
  accounts: SignerWithAddress[],
  mintContract: SOA
): Promise<[StakingSimple, SignedWeights]> {
  const [owner, signer, beneficiary] = accounts;
  const stakingFactory = new StakingSimple__factory(owner);
  const stakingContract = await stakingFactory.deploy(
    mintContract.address,
    signer.address
  );
  const weightsContract = await new SignedWeights__factory(owner).deploy(
    signer.address,
    mintContract.address
  );
  await stakingContract.setWeights(weightsContract.address);
  return [stakingContract, weightsContract];
}

describe("staking", function () {
  let accounts: SignerWithAddress[];
  this.beforeAll(async () => {
    accounts = await ethers.getSigners();
  });

  it("can be staked", async () => {
    const [owner, signer, beneficiary, user] = accounts;
    let nft = await deployNft(accounts);
    await mint(nft, user, 1);
    let [staking, weightsContract] = await deployStaking(accounts, nft);
    nft = nft.connect(user);
    await nft.setApprovalForAll(staking.address, true);
    const weight = utils.parseEther("2");
    expect(await nft.balanceOf(user.address)).to.eq(1);
    await staking.launchStaking();
    staking = staking.connect(user);
    weightsContract = weightsContract.connect(user);
    await weightsContract.setWeights(
      [0],
      [weight],
      await signer.signMessage(
        utils.arrayify(
          utils.solidityPack(["uint16[]", "uint256[]"], [[0], [weight]])
        )
      )
    );
    await staking.deposit([0]);
    expect(await nft.balanceOf(staking.address)).to.eq(1);
    expect(await nft.balanceOf(user.address)).to.eq(0);
  });

  it("can be staked with multiple tokens", async () => {
    const [owner, signer, beneficiary, user] = accounts;
    let nft = await deployNft(accounts);
    await mint(nft, user, 10);
    let [staking, weightsContract] = await deployStaking(accounts, nft);
    nft = nft.connect(user);
    await nft.setApprovalForAll(staking.address, true);

    expect(await nft.balanceOf(user.address)).to.eq(10);
    await staking.launchStaking();
    const tokens = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const weights = tokens.map((w) => utils.parseUnits("1", 18).mul(w + 1));
    const signature = await signer.signMessage(
      utils.arrayify(
        utils.solidityPack(["uint16[]", "uint256[]"], [tokens, weights])
      )
    );
    weightsContract = weightsContract.connect(user);
    await weightsContract.setWeights(tokens, weights, signature);
    staking = staking.connect(user);
    await staking.deposit([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(await nft.balanceOf(staking.address)).to.eq(10);
    expect(await nft.balanceOf(user.address)).to.eq(0);
  });
});
