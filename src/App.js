// src/App.js

import React from 'react';
import './App.css';

// Import the web3 modal and wagmi modules
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, polygon, goerli } from 'wagmi/chains';
import { Web3Button } from '@web3modal/react'
import { useWeb3ModalTheme } from '@web3modal/react';

const chains = [arbitrum, mainnet, polygon, goerli];
const projectId = process.env.REACT_APP_PROJECT_ID;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  const { setTheme } = useWeb3ModalTheme();
    React.useEffect(() => {
        setTheme({
          themeMode: 'dark',
          themeVariables: {
            // General
            '--w3m-font-family': '"Courier New", Courier, monospace',
            '--w3m-accent-color': '#c0c0c0',
            '--w3m-accent-fill-color': '#000000',
            '--w3m-background-color': '#c0c0c0',
            '--w3m-overlay-background-color': 'rgba(0, 0, 0, 0.7)',
            '--w3m-container-border-radius': '8px',
            '--w3m-wallet-icon-border-radius': '8px',
            '--w3m-button-border-radius': '8px',

            // Text styles
            '--w3m-text-big-bold-size': '2rem',
            '--w3m-text-big-bold-weight': 'bold',
            '--w3m-text-big-bold-font-family': '"Courier New", Courier, monospace',
            '--w3m-text-medium-regular-size': '1rem',
            '--w3m-text-medium-regular-font-family': '"Courier New", Courier, monospace',
            '--w3m-text-small-regular-size': '0.8rem',
            '--w3m-text-small-regular-font-family': '"Courier New", Courier, monospace',
            '--w3m-text-xsmall-regular-size': '0.6rem',
            '--w3m-text-xsmall-regular-font-family': '"Courier New", Courier, monospace',
          }
        });
    }, [setTheme]);
    return (
        <WagmiConfig config={wagmiConfig}>
            <div className="container">
                <h1 className="hackathon-title">Hackathon Quest</h1>
                <div className="iframe-container">
                    <iframe 
                        title="hackathon game" 
                        src="/game/index.html" 
                        allowFullScreen
                        style={{ border: '2px solid white' }}
                    ></iframe>
                </div>
                <div className="wallet-button">
                    <Web3Button/>
                </div>
            </div>
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </WagmiConfig>
    );
}

export default App;
