const { ethers } = require("hardhat");

//节点地址
API_URL = process.env.API_URL

//工厂合约地址
CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

//NFT1013合约地址
NFT1013_CONTRACT_ADDR = process.env.NFT1013_CONTRACT_ADDR

//签发者私钥
PRIVATE_KEY = process.env.PRIVATE_KEY
//签发者公钥
PUBLIC_KEY = process.env.PUBLIC_KEY

//非签发者私钥
PRIVATE_KEY_IS_NOT_SIGNER = process.env.PRIVATE_KEY_IS_NOT_SIGNER
//非签发者用户地址
PUBLIC_KEY_IS_NOT_SIGNER = process.env.PUBLIC_KEY_IS_NOT_SIGNER

//非签发者私钥2
PRIVATE_KEY_IS_NOT_SIGNER_2 = process.env.PRIVATE_KEY_IS_NOT_SIGNER_2
//非签发者用户地址
PUBLIC_KEY_IS_NOT_SIGNER_2 = process.env.PUBLIC_KEY_IS_NOT_SIGNER_2

//零地址
PUBLIC_KEY_ZERO = process.env.PUBLIC_KEY_ZERO

//无效地址
PUBLIC_KEY_INVALID = process.env.PUBLIC_KEY_INVALID

//提供一些测试使用的用户地址
PUBLIC_KEY_ARRAY = [
    "0x8E569fBD8E6Af2cFcdF61F41bAAC9109AaE19f96",
    "0xC293Ca538454Dd357Cea8CA6fbe80a1415DBC64C"
]

//网络节点
PROVIDER = new ethers.providers.JsonRpcProvider(API_URL); 
//PROVIDER = new ethers.providers.WebSocketProvider(API_URL); 
//签发者钱包
WALLET_SIGNER = new ethers.Wallet(PRIVATE_KEY, PROVIDER);
//非签发者钱包
WALLET_NOT_SIGNER = new ethers.Wallet(PRIVATE_KEY_IS_NOT_SIGNER, PROVIDER);
//非签发者钱包2
WALLET_NOT_SIGNER_2 = new ethers.Wallet(PRIVATE_KEY_IS_NOT_SIGNER_2, PROVIDER);

//运行时相关配置
RUN_CONFIG = {
    isCreateContract1013: false,
    contractSubAddr : process.env.NFT1013_CONTRACT_ADDR,
    isIssueToken: true,
    isIssueTokenSafe : true,
    isSetName: false,
    isSetSymbol: false,
    isSetBaseURI: false,
    isTransferFrom: true,
    isSetUser: true,
    isApprove: true,
    isBurn: true,
    isTransferOwnership: true,
    isSetApprovalForAll: true
}

//工厂合约接囗ABI
ABI_FACTORY = process.env.ABI_FACTORY
//  [
//     "function deployContract(string calldata _id) external returns (address)",
//     "function register(string calldata _id, address master) external",
//     "function getContractsDeployed() external view returns (address[] memory)",
//     "event ContractRegistered(string ID, address indexed deployAddress)",
//     "event ContractDeployed(address indexed deployAddress, address indexed ownerAddress)"
// ]
//NFT1013合约接囗
ABI_NFT1013 = [
    //"struct TokenOwnership {address addr; uint64 startTimestamp; bool burned; uint24 extraData;}",
    //"function explicitOwnershipOf(uint256 tokenId) external view returns (TokenOwnership memory)",
    // "function explicitOwnershipsOf(uint256[] memory tokenIds) external view returns (TokenOwnership[] memory)",
    "error MintZeroQuantity()",
    "function totalSupply() external view returns (uint256)",
    "function supportsInterface(bytes4 interfaceId) external view returns (bool)",
    "function balanceOf(address owner) external view returns (uint256 balance)",
    "function ownerOf(uint256 tokenId) external view returns (address owner)",
    "function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) external",
    "function safeTransferFrom(address from, address to, uint256 tokenId) external",
    "function transferFrom(address from, address to, uint256 tokenId) external",
    "function approve(address to, uint256 tokenId) external",
    "function setApprovalForAll(address operator, bool _approved) external",
    "function getApproved(uint256 tokenId) external view returns (address)",
    "function isApprovedForAll(address owner, address operator) external view returns (bool)",
    "function name() external view returns (string memory)",
    "function symbol() external view returns (string memory)",
    "function tokenURI(uint256 tokenId) external view returns (string memory)",
    "function setUser(uint256 tokenId, address user, uint64 expires) external",
    "function userOf(uint256 tokenId) external view returns (address)",
    "function userExpires(uint256 tokenId) external view returns (uint256)",
    "function tokenByIndex(uint256 index) external view returns (uint256)",
    "function tokenOfOwnerByIndex(address owner, uint256 index)  external view returns (uint256 tokenId)",
    "function burn(uint256 tokenId) external",
    "function burned() external view returns (uint256)",
    "function setBaseURI(string memory _base) external",
    "function setName(string memory name_) external",
    "function setSymbol(string memory symbol_) external",
    "function mint(address _to, uint256 quantity) external",
    "function safeMint(address _to, uint256 quantity) external",
    "function transferOwnership(address newOwner) external",
    // "event UpdateUser(uint256 indexed tokenId, address indexed user, uint64 expires)",
    // "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
    // "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
    // "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
    // "event ConsecutiveTransfer(uint256 indexed fromTokenId, uint256 toTokenId, address indexed from, address indexed to)",
    // "event baseUIRChanged(string uri)",
    // "event gasLoaded(address gasManager)"
]
