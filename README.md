# NFT Marketplace

A non-fungible token (NFT) marketplace is a decentralized platform that allows users to buy, sell, and trade unique digital assets on the blockchain. Developing an NFT marketplace requires expertise in smart contract development, user authentication, and frontend web development.It uses Solidity for creating smart contracts, JavaScript for building the frontend, and IPFS for storing the NFT data.
## Technologies Used
|Solidity|Truffle|IPFS|React|Web3.js|MetaMask|
|---|---|---|---|---|---|
## Installation 

### To install the NFT Marketplace, follow the steps below:

1. Install Node.js and npm: Node.js is a JavaScript runtime environment and npm is a package manager for Node.js. You can download and install both from the official Node.js website (https://nodejs.org/en/).

2. Install Truffle: Truffle is a development framework for building Ethereum applications. You can install it globally using npm with the following command:
   ```bash
    npm install -g truffle
   ``` 

3. Install Ganache: Ganache is a personal blockchain for Ethereum development. You can download and install it from the official Ganache website (https://www.trufflesuite.com/ganache).

4. Install IPFS: IPFS is a peer-to-peer network for storing and sharing files in a decentralized manner. You can download and install it from the official IPFS website (https://ipfs.io/docs/install/).

5. Install MetaMask: MetaMask is a browser extension that allows users to interact with Ethereum applications. You can install it as a Chrome or Firefox extension from the official MetaMask website (https://metamask.io/).

6.  Clone the project repository: You can clone the NFT Marketplace project repository from        GitHub using the following command:
   ```bash
    git clone https://github.com/username/nft-marketplace.git
   ``` 
7. Install project dependencies: Navigate to the project directory and install the project dependencies using npm with the following command:
   ```bash
    cd nft-marketplace
    npm install
   ``` 

8. Compile and migrate the smart contracts: Compile the Solidity smart contracts using Truffle with the following command:

   ```bash
    truffle compile
   ``` 
   Then, migrate the contracts to the local blockchain using Ganache with the following command:
   ```bash
    truffle migrate
   ``` 
9. Start the IPFS daemon: Start the IPFS daemon in another terminal window with the following      command:
   ```bash
    ipfs daemon
   ``` 
10. Start the frontend: Start the React frontend in another terminal window with the following     command:
   ```bash
      npm start
   ``` 
   This will start the application in your browser at http://localhost:3000.




## Usage 

To start the NFT Marketplace, run the following command: 

Then open http://localhost:3000 in your web browser. 

## License 

This project is licensed under the MIT License. See LICENSE.md for details.
