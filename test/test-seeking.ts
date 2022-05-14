import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { SOA, SOA__factory } from "../typechain";
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

describe("seeking", function () {
  let accounts: SignerWithAddress[];
  this.beforeAll(async () => {
    accounts = await ethers.getSigners();
  });

  it("can seek", async () => {
    const [owner, signer, beneficiary, user] = accounts;
    let nft = await deployNft(accounts);
    await mint(nft, user, 1);
    await nft.setSeekingOpen(true);
    nft = nft.connect(user);
    await nft.toggleSeeking([0]);
    expect(await nft.seekingPeriod(0)).to.deep.equal([
      true,
      BigNumber.from(0),
      BigNumber.from(0),
    ]);
  });

  it("can seek x10", async () => {
    const [owner, signer, beneficiary, user] = accounts;
    let nft = await deployNft(accounts);
    await mint(nft, user, 10);
    await nft.setSeekingOpen(true);
    nft = nft.connect(user);
    const seeking = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    await nft.toggleSeeking(seeking);
    for (const s of seeking) {
      expect(await nft.seekingPeriod(s)).to.deep.equal([
        true,
        BigNumber.from(0),
        BigNumber.from(0),
      ]);
    }
  });
});
