import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { TestERC20__factory } from "../typechain";
import { BigNumber } from "ethers";

describe("TestERC20 signature test", function () {
  let accounts: SignerWithAddress[];
  this.beforeAll(async () => {
    accounts = await ethers.getSigners();
  });

  it("can mint", async () => {
    const [owner, user] = accounts;
    const testCoinFactory = new TestERC20__factory(owner);
    const testCoin = await testCoinFactory.deploy();
    // Create signed payload
    const { utils } = ethers;
    // Packed signature is of the form: [address, uint256, int32]
    const amount = utils.parseEther("1");

    const signature = await owner.signMessage(
      utils.arrayify(
        utils.solidityKeccak256(
          ["address", "uint256", "int32"],
          [user.address, amount, 0]
        )
      )
    );
    // Call mint function
    await testCoin.mint(user.address, amount, 0, signature);

    expect(await testCoin.balanceOf(user.address)).to.eq(amount);
  });
});
