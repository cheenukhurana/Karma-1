require("@nomiclabs/hardhat-ethers");
const fs = require('fs');

const ALCHEMY_PRIVATE_KEY = "18e7bf0d730fe4209ee68c9dfcc7ee8b0da51cf210493917477a2672018708dd";


module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [ALCHEMY_PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}