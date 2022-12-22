// https://eth-goerli.g.alchemy.com/v2/DG_uUZzB_TdQrbJyWsKBISgsXFlKOdaN

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/DG_uUZzB_TdQrbJyWsKBISgsXFlKOdaN',
      accounts: ['2d38833310a093484c64b4389c79a55b353a96302f57ee2b85a6f4c908bbb53d']
    }
  }
}