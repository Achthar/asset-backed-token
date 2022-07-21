
/* global ethers task */
require("@nomiclabs/hardhat-truffle5");
require('hardhat-contract-sizer');
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config()


const pk1 = process.env.PK_1 || '';
const pk2 = process.env.PK_2 || '';

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "fuji",
  networks: {
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      accounts: [pk1, pk2],
      chainId: 43113,
      live: true,
      saveDeployments: true,
      // tags: ['staging'],
      // gasMultiplier: 4,
      // gas: 800000000,
      // gasPrice: 25000000000,
    },
    'oasis-test': {
      url: 'https://testnet.emerald.oasis.dev',
      accounts: [pk1, pk2],
      chainId: 42261,
      live: true,
      saveDeployments: true,
      // tags: ['staging'],
      // gasMultiplier: 4,
      gas: 800000,
      gasPrice: 250000000000,
    },
  },
  solidity: {
    compilers: [{ version: '0.8.15' }],
    settings: {
      optimizer: {
        enabled: true,
        runs: 999999
      }
    }
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
    deploy: "./deploy",
    deployments: "./deployments",
  },
  contractSizer: {
    runOnCompile: true,
    disambiguatePaths: false,
  },
  // typechain: {
  //   outDir: 'types',
  //   target: 'ethers-v5',
  // },

}
