# Introduction

The SoA contracts

# Prerequisites

Install:

- Node 16
- yarn

Run:

```
yarn
```

# Configuration

Copy the `.env.example` file:

```
cp .env.example .env
```

This is enough to get a local hardhat node running.

# Contributing

Local development and testing information

## Tests

Run the tests:

```
yarn test
```

## Development

Start a local hardhat node:

```
yarn hardhat node
```

# POCs

## Signature mint

```
yarn hardhat mint --to 0xbcd4042de499d14e55001ccbb24a551f3b954096 --nonce 0 --network localhost
```

Advance the nonce to mint more to the same address

## Signatures accept

Demonstrates making a signature and verifying on the contract. See [here](test/test-signature.ts) for details
