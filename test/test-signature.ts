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
    const { utils } = ethers;
    const amount = utils.parseEther("1");

    // Packed signature is of the form: [address, uint256, int32]
    // This is mirrored in the contract

    // signMessage uses "personal_sign" RPC call
    const signature = await owner.signMessage(
      // Needs to be cast to binary data, otherwise will be signed as a string
      utils.arrayify(
        // This call is the same a utils.keccak256(utils.solidityPack(...))
        utils.solidityKeccak256(
          // This helps ethers.js typecast
          ["address", "uint256", "int32"],
          // And this is the actual data to sign
          [user.address, amount, 0]
        )
      )
    );

    // Call mint function with the same values as the signature and the signature
    await testCoin.mint(user.address, amount, 0, signature);

    // Check that the balance is correct
    expect(await testCoin.balanceOf(user.address)).to.eq(amount);
  });
});
