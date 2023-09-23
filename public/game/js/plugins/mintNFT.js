// mintNFT.js

import { ethers } from 'ethers';

// Define the ABI of your NFT contract (you'll need to replace this with your contract's ABI)
const CONTRACT_ABI = [
    // Add the ABI from your contract here
];

// Dictionary for contract addresses per chain (replace these with your contract addresses)
const CONTRACT_ADDRESSES = {
    mainnet: "YOUR_MAINNET_ADDRESS",
    goerli: "YOUR_GOERLI_ADDRESS",
    // Add addresses for other chains
};

export async function mintNFT(chainName) {
    // Check if window.ethereum is available
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Create an instance of ethers provider
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Create a signer (represents the Ethereum account)
            const signer = provider.getSigner();

            // Connect to the NFT contract
            const contractAddress = CONTRACT_ADDRESSES[chainName];
            const contract = new ethers.Contract(contractAddress, CONTRACT_ABI, signer);

            // Mint the NFT (Assuming mint is the function name and it doesn't require arguments)
            const tx = await contract.mint();

            // Wait for the transaction to be mined
            const receipt = await tx.wait();
            return receipt.status === 1 ? "Success" : "Failed";
        } catch (error) {
            console.error("Error minting NFT:", error);
            return "Error";
        }
    } else {
        console.error("Ethereum object not available in window. Please install MetaMask.");
        return "MetaMask not detected";
    }
}
