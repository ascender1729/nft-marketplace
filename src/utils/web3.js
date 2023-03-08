import Web3 from 'web3';
import NFTMarketplace from './contracts/NFTMarketplace.json';

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

const nftMarketplace = new web3.eth.Contract(NFTMarketplace.abi, NFTMarketplace.address);

// Fetch a list of available NFTs
const nfts = await Promise.all(
  Array(nftMarketplace.methods.totalSupply().call()).fill().map((_, index) => {
    return nftMarketplace.methods.tokenByIndex(index).call()
      .then(id => nftMarketplace.methods.nfts(id).call())
  })
);

// Fetch details about a specific NFT
const nft = await nftMarketplace.methods.nfts(id).call();

// Fetch a list of NFTs owned by the current user
const myNfts = await Promise.all(
  Array(nftMarketplace.methods.balanceOf(web3.eth.defaultAccount).call()).fill().map((_, index) => {
    return nftMarketplace.methods.tokenOfOwnerByIndex(web3.eth.defaultAccount, index).call()
      .then(id => nftMarketplace.methods.nfts(id).call())
  })
);

// Purchase an NFT
const price = web3.utils.toWei("1", "ether");
await nftMarketplace.methods.purchaseNFT(id).send({ from: web3.eth.defaultAccount, value: price });
