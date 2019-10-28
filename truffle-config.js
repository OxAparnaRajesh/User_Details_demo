var HDWalletProvider = require("truffle-hdwallet-provider");
var Web3 = require("web3");

var MNEMONIC = "You can add your mnemonic here";

module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 8545,
        network_id: "*"
      },
      haitwik: {
        provider: function() {
          return new HDWalletProvider(MNEMONIC, "https://rinkeby.infura.io/v3/cd4498acefe044fea55ef7d37fb26b6c")
        },
        network_id: "*",
        gasPrice: 0,
        gas: 3000000,
      }
    }
  }