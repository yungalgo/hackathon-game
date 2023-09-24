function triggerMintEvent() {
    window.parent.postMessage({ action: 'mintNFT' }, '*');
}

window.addEventListener('message', function(event) {
    if (event.data.action === 'NFT_SUCCESS') {
        // Set a game variable to indicate successful NFT minting
        // Replace `1` with the ID of the game variable you want to use.
        $gameVariables.setValue(1, 1); // This sets variable #1 to the value of 1.
    }
});