import IPFS from 'ipfs-core';

const ipfs = await IPFS.create();

const metadata = { name: "My NFT", description: "This is my first NFT", image: "https://example.com/my-nft.jpg" };

const metadataCID = await ipfs.add(JSON.stringify(metadata));

const imageCID = metadata.image.substring(metadata.image.lastIndexOf("/") + 1);

const image = await ipfs.cat(imageCID);
const imageURL = URL.createObjectURL(new Blob([image]));

// Display the image using an <img> tag
<img src={imageURL} alt="My NFT" />
