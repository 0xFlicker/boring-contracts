import * as dotenv from "dotenv";

import { HardhatUserConfig, task, types } from "hardhat/config";
import "hardhat-deploy";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import { node_url, accounts, addForkConfiguration } from "./utils/network";
import { utils } from "ethers";

dotenv.config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10,
      },
    },
  },
  defaultNetwork: "hardhat",
  namedAccounts: {
    deployer: 0,
    owner: 1,
    user: 2,
  },
  networks: addForkConfiguration({
    hardhat: {
      initialBaseFeePerGas: 0, // to fix : https://github.com/sc-forks/solidity-coverage/issues/652, see https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136
      accounts: accounts("hardhat"),
      tags: ["local"],
    },
    localhost: {
      url: node_url("localhost"),
      accounts: accounts("localhost"),
      tags: ["local"],
    },
    ganache: {
      url: node_url("ganache"),
      accounts: accounts("ganache"),
      tags: ["local"],
    },
    "hardhat-node": {
      url: node_url("hardhat-node"),
      accounts: accounts("hardhat-node"),
      tags: ["local"],
    },
    rinkeby: {
      url: node_url("rinkeby"),
      accounts: accounts("rinkeby"),
    },
    mainnet: {
      url: node_url("mainnet"),
      accounts: accounts("mainnet"),
    },
    kovan: {
      url: node_url("kovan"),
      accounts: accounts("kovan"),
    },
    goerli: {
      url: node_url("goerli"),
      accounts: accounts("goerli"),
      deploy: ["deploy-l1"],
    },
    maticmum: {
      url: node_url("maticmum"),
      accounts: accounts("maticmum"),
      deploy: ["deploy-l2"],
      gasPrice: utils.parseUnits("35", "gwei").toNumber(),
    },
    matic: {
      url: node_url("matic"),
      accounts: accounts("matic"),
      deploy: ["deploy-l2"],
      gasPrice: utils.parseUnits("50", "gwei").toNumber(),
    },
  }),
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    // @ts-ignore this is for the verifier
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY_MAINNET,
      goerli: process.env.ETHERSCAN_API_KEY_GOERLI,
      polygonMumbai: process.env.ETHERSCAN_API_KEY_MATICMUM,
      polygon: process.env.ETHERSCAN_API_KEY_MATIC,
    },
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
};

export default config;
