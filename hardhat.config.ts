import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const setChain = () => {
  switch (process.env.CHAIN) {
    case "polygon":
      return {
        token: "MATIC",
        gasPriceApi:
          "https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice",
      };
    case "binance":
      return {
        token: "BNB",
        gasPriceApi:
          "https://api.bscscan.com/api?module=proxy&action=eth_gasPrice",
      };
    case "avalanche":
      return {
        token: "AVAX",
        gasPriceApi:
          "https://api.snowtrace.io/api?module=proxy&action=eth_gasPrice",
      };
    default:
      return {};
  }
};

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  gasReporter: {
    enabled: true,
    currency: "PLN",
    coinmarketcap: process.env.API_KEY,
    ...setChain()
  },
  etherscan: {
    apiKey: process.env.ETH_API_KEY,
  },
};

export default config;
