# Introduction

Completely boring, yet functional ERC721A contract

# Prerequisites

Install:

- Node 16
- yarn

Run:

```
yarn
```

In addition, the following services are needed:

- IPFS pinning for metadata / images and a basetokenURI pointing into ipfs://
- RPC endpoint for deployment. Sign up at infura or alchemy for a free endpoint
- Etherscan free API key https://etherscan.io/apis

# Configuration

Copy the `.env.example` file:

```
cp .env.example .env
```

Update the fields in the .env file

# Deployment

```
yarn deploy
```

# Contributing

Local development and testing information

## Tests

Run the tests:

```
yarn test
```

## Development

### Local node

Start a local hardhat node:

```
yarn hardhat node
```

### Testnet deploy

Prerequisites:

- testnet currency
- etherscan API key
- RPC node (e.g. infura or alchemy)
- coinmarketcap API key (optional, for estimating gas costs in USD)

Set the following environment variables:

```
MNEMONIC_SEPOLIA=seed phrase....
ETH_NODE_URI_SEPOLIA=https://sepolia.0xflick.xyz
NFT_NAME_SEPOLIA=TestToken
NFT_SYMBOL_SEPOLIA=TT
METADATA_URI_SEPOLIA=ipfs://qmwhatever
MINT_PRICE_SEPOLIA=0
```

Run:

```
yarn deploy:sepolia
```
