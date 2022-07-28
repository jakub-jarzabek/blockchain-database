# Blockchain database with CRUD operations
  Example project for checking gas prices for simple blockchain database

## Getting started

1. Clone repo

2. Run script

```
cd blockchain-database && yarn
```

## Requirements

- yarn installed
- Hardhat shorthand installed

## Required env
```
API_KEY=<coinmarket_api_key>
ETH_API_KEY=<etherscan_api_key>
```

## Check Gas Prices

1. Ethereum

`hh test`

2. avalanche

`CHAIN=avalanche hh test`

3. Binance

`CHAIN=binance hh test`

4. Polygon

`CHAIN=polygon hh test`
