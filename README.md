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
MNEMONIC_RINKEBY=seed phrase....
ETH_NODE_URI_RINKEBY=https://eth-rinkeby.alchemyapi.io/v2/apikeyhere
NFT_NAME_RINKEBY=TestToken
NFT_SYMBOL_RINKEBY=TT
METADATA_URI_RINKEBY=https://example.xyz/
MINT_PRICE_RINKEBY=0
```

Run:

```
yarn deploy
```

### Using the contracts locally in development

Inside this directory, run:

If using yarn:

```
yarn link
```

If using npm:

```
npm link
```

Go to the project you want to use these contracts and run:

Is using yarn

```
yarn link @souls-of-akaso/contracts
```

If using npm

```
npm link @souls-of-akaso/contracts
```

The contracts can now be imported into javascript:

```
import { SOA, SOA__factory } from "@souls-of-akaso/contracts";
import { Signer, providers } from "ethers";

export function factory(signerOrProvider: Signer | providers.Provider, address: string): SOA {
  return SOA__factory.connect(
    address,
    signerOrProvider
  );
}
```

# POCs

## Signature mint

```
yarn hardhat mint --to 0xbcd4042de499d14e55001ccbb24a551f3b954096 --nonce 0 --network localhost
```

Advance the nonce to mint more to the same address

## Signatures accept

Demonstrates making a signature and verifying on the contract. See [here](test/test-signature.ts) for details
