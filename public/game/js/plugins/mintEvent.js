function triggerMintEvent() {
    window.parent.postMessage({ action: 'mintNFT' }, '*');
}