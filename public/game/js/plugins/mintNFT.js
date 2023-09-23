const script = document.createElement("script");
const providers = {
    arbitrumGoerli: new ethers.providers.JsonRpcProvider('https://fragrant-hidden-silence.arbitrum-goerli.quiknode.pro/4283ef6392b9d6d218ea9d5ae7c8d210d1e02194/'), //quicknode
    goerli: new ethers.providers.JsonRpcProvider('https://nameless-sly-water.ethereum-goerli.quiknode.pro/d7a309d63727e59f0301e67f24dfbfb251bcd62b/'), //quicknode
    baseGoerli: new ethers.providers.JsonRpcProvider('https://dark-capable-field.base-goerli.quiknode.pro/a0fc6ffb7e75e2b9be67c4a2030dbbcbbf49348b/'), //quicknode
    lineaTestnet: new ethers.providers.JsonRpcProvider('https://linea-goerli.infura.io/v3/21012e1100294bf49d6bfff140f28a62'), //infura
    celo: new ethers.providers.JsonRpcProvider('https://quaint-restless-hexagon.celo-mainnet.quiknode.pro/4e7b47fd765d9465a7a78df7c9bf4dba211e3359/'), //quicknode
    gnosis: new ethers.providers.JsonRpcProvider('https://warmhearted-sparkling-sound.xdai.quiknode.pro/08fffbbfa51d1413654ae0dd968de259339ffce8/'), //quicknode
    // mantle: new ethers.providers.JsonRpcProvider('https://rpc.mantle.xyz/'), //main
    mantleTestnet: new ethers.providers.JsonRpcProvider('https://rpc.testnet.mantle.xyz/'), //main
    scrollSepolia: new ethers.providers.JsonRpcProvider('	https://sepolia-rpc.scroll.io/') //main
}

function getCurrentProvider() {
  const providerKey = networkToProviderKey[window.currentNetwork] || 'goerli';
  return providers[providerKey];
}

script.src = "https://cdn.ethers.io/lib/ethers-5.0.umd.min.js";
script.onload = () => {
  let contractAddress = "0xD70208Aa646dfe9974c7149fb90CF79E01e6Bd97"; // REAL ETH ADDY!
  let songAddress = "0x41d4f154c8affa3d10f93a082157f4a17a4eaec9"; // REAL ITS TIME ADDY!
  let contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_fromTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_toTokenId",
				"type": "uint256"
			}
		],
		"name": "BatchMetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "MetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "MAX_SUPPLY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PRICE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

  window.mintNFT = async function () {
    const provider = getCurrentProvider();
    if (typeof window.ethereum === "undefined") {
        console.error("Ethereum provider is not available.");
        return;
    }

    try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // Create a contract instance
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

	    // Get total supply
		const totalSupply = await contract.totalSupply();

	    // Get maximum supply
		const maxSupply = await contract.MAX_SUPPLY();
		
	    // Check if max supply has been reached
		if (totalSupply.eq(maxSupply)) {
			$gameMessage.add("sorry, edition 0 is minted out! check back later.");
			return;
		}

        // Call the mint function of the contract with the new tokenURI
		const price = ethers.utils.parseEther("0.013"); // price in Ether
        const transaction = await contract.safeMint(signer.getAddress(), { value: price });

		console.log("Minting NFT...");
		$gameMessage.add("pls be patient, this will take 30 sec (press enter)");
		
        // Wait for the transaction to be mined
        const receipt = await transaction.wait();
		$gameMessage.add("success!!! check your mm, opensea, or wallet");
        console.log("Minted NFT with transaction:", receipt.transactionHash);
    } catch (error) {
        console.error("Error minting NFT:", error);
		$gameMessage.add("nft failed to mint!!!");
    }
  };  

  window.withdrawFunds = async function () {
    if (typeof window.ethereum === "undefined") {
        console.error("Ethereum provider is not available.");
        return;
    }

    try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // Create a contract instance
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Call the withdraw function of the contract
        const transaction = await contract.withdraw();
        console.log("Withdrawing funds...");
        // Remember to wait for the transaction to be mined, if needed
        const receipt = await transaction.wait();
        console.log("Withdrawal completed.", receipt);

    } catch (error) {
        console.error("An error occurred: ", error);
    }
}

  window.checkNFTOwnership = async function() {
	try {
	  // Check if the wallet is connected
	  if (!window.ethereum) {
		$gameMessage.add("error popping your metamask! check ur browser and try again.");
		return;
	  }
  
	  // Connect to the wallet if not already connected
	  if (!window.ethereum.selectedAddress) {
		// Request account access if needed
		await window.ethereum.enable();
		
		// After enabling, if the wallet is still not connected then return.
		if (!window.ethereum.selectedAddress) {
		  return;
		}
	  }
	
	  const walletAddress = window.ethereum.selectedAddress;
	
	  // Create a provider instance to connect to the Ethereum network
	  const provider = new ethers.providers.Web3Provider(window.ethereum);
	
	  // Define the contract instance and address
	  const contract = new ethers.Contract(contractAddress, contractABI, provider);
	
	  // Use the contract instance to check NFT ownership
	  const balance = await contract.balanceOf(walletAddress);
  
	  // Set an in-game variable based on NFT ownership
	  $gameVariables.setValue("3", balance > 0 ? 1 : 0);
		
	} catch (error) {
	  $gameMessage.add("error! make sure you are on mainnet and try again.");
	}
  }

  window.checkSongOwnership = async function() {
	try {
	  // Check if the wallet is connected
	  if (!window.ethereum) {
		$gameMessage.add("error popping your metamask! check ur browser and try again.");
		return;
	  }
  
	  // Connect to the wallet if not already connected
	  if (!window.ethereum.selectedAddress) {
		// Request account access if needed
		await window.ethereum.enable();
		
		// After enabling, if the wallet is still not connected then return.
		if (!window.ethereum.selectedAddress) {
		  return;
		}
	  }
	
	  const walletAddress = window.ethereum.selectedAddress;
	
	  // Create a provider instance to connect to the Ethereum network
	  const provider = new ethers.providers.Web3Provider(window.ethereum);
	
	  // Define the contract instance and address
	  const contract = new ethers.Contract(songAddress, contractABI, provider);
	
	  // Use the contract instance to check NFT ownership
	  const balance = await contract.balanceOf(walletAddress);
  
	  // Set an in-game variable based on NFT ownership
	  $gameVariables.setValue("4", balance > 0 ? 1 : 0);
		
	} catch (error) {
		$gameMessage.add("error! make sure you are on mainnet and try again.");
	}
  }  

};
document.body.appendChild(script);