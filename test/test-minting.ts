import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { StandardERC721A__factory } from "../typechain";
import { utils } from "ethers";

describe("Minting test", function () {
  let accounts: SignerWithAddress[];
  this.beforeAll(async () => {
    accounts = await ethers.getSigners();
  });

  it("mint must be active", async () => {
    const [owner, signer, beneficiary, user] = accounts;
    const mintAmount = utils.parseEther("1");
    const mintFactory = new StandardERC721A__factory(owner);
    const mintContract = await mintFactory.deploy(
      "TestCoin",
      "TC",
      "foo",
      mintAmount,
      [beneficiary.address],
      [1],
      beneficiary.address
    );
    // Call mint function with the same values as the signature and the signature
    await expect(
      mintContract.mint(user.address, 1, {
        value: mintAmount,
      })
    ).revertedWith("Main Sale Not Enabled");
  });

  it("can mint", async () => {
    const [owner, signer, beneficiary, user] = accounts;
    const mintAmount = utils.parseEther("1");
    const mintFactory = new StandardERC721A__factory(owner);
    const mintContract = await mintFactory.deploy(
      "TestCoin",
      "TC",
      "foo",
      mintAmount,
      [beneficiary.address],
      [1],
      beneficiary.address
    );
    await mintContract.setMintActive(true);

    // Call mint function with the same values as the signature and the signature
    await mintContract.mint(user.address, 1, {
      value: mintAmount,
    });

    // Check that the balance is correct
    expect(await mintContract.balanceOf(user.address)).to.eq(1);
  });

  it("gas costs for single mint", async () => {
    const [owner, signer, beneficiary, user] = accounts;
    const mintAmount = utils.parseEther("1");
    const mintFactory = new StandardERC721A__factory(owner);
    const mintContract = await mintFactory.deploy(
      "TestCoin",
      "TC",
      "foo",
      mintAmount,
      [beneficiary.address],
      [1],
      beneficiary.address
    );
    await mintContract.setMintActive(true);

    // Call mint function with the same values as the signature and the signature
    const transaction = await mintContract.mint(user.address, 1, {
      value: mintAmount,
    });

    const receipt = await transaction.wait();
    expect(receipt.gasUsed).to.be.lt(140_000);
  });

  it("gas costs for multiple mint", async () => {
    const [owner, signer, beneficiary, user] = accounts;
    const mintAmount = utils.parseEther("1");
    const mintFactory = new StandardERC721A__factory(owner);
    const mintContract = await mintFactory.deploy(
      "TestCoin",
      "TC",
      "foo",
      mintAmount,
      [beneficiary.address],
      [1],
      beneficiary.address
    );
    await mintContract.setMintActive(true);

    // Call mint function with the same values as the signature and the signature
    const transaction = await mintContract.mint(user.address, 4, {
      value: utils.parseEther("4"),
    });

    const receipt = await transaction.wait();
    expect(receipt.gasUsed).to.be.lt(160_000);
  });

  it("can gift", async () => {
    const [owner, signer, beneficiary, user] = accounts;
    const mintAmount = utils.parseEther("1");
    const mintFactory = new StandardERC721A__factory(owner);
    const mintContract = await mintFactory.deploy(
      "TestCoin",
      "TC",
      "foo",
      mintAmount,
      [beneficiary.address],
      [1],
      beneficiary.address
    );

    await mintContract.gift([1], [user.address]);
    expect(await mintContract.balanceOf(user.address)).to.eq(1);
  });
});
