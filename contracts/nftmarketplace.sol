pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract NFTMarketplace is ERC721 {
    using SafeMath for uint256;

    struct NFT {
        string metadata;
        uint256 price;
        address owner;
        bool forSale;
    }

    mapping(uint256 => NFT) public nfts;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    function createNFT(uint256 _id, string memory _metadata, uint256 _price) public {
        require(msg.sender == owner(), "Only contract owner can create NFTs");
        require(nfts[_id].owner == address(0), "NFT with this ID already exists");
        
        nfts[_id] = NFT(_metadata, _price, address(0), false);
        _mint(msg.sender, _id);
    }

    function listForSale(uint256 _id, uint256 _price) public {
        require(nfts[_id].owner == msg.sender, "Only the owner can list the NFT for sale");
        require(!nfts[_id].forSale, "NFT is already listed for sale");

        nfts[_id].forSale = true;
        nfts[_id].price = _price;
    }

    function purchaseNFT(uint256 _id) public payable {
        require(nfts[_id].forSale, "NFT is not for sale");
        require(msg.value >= nfts[_id].price, "Insufficient funds to purchase NFT");

        address payable seller = payable(nfts[_id].owner);
        seller.transfer(msg.value);

        _transfer(seller, msg.sender, _id);
        nfts[_id].owner = msg.sender;
        nfts[_id].forSale = false;
    }
}
