import IPFS from 'ipfs-core';

const ipfs = await IPFS.create();

const metadata = { name: "My NFT", description: "This is my first NFT", image: "https://example.com/my-nft.jpg" };

const metadataCID = await ipfs.add(JSON.stringify(metadata));
