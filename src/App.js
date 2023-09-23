// src/App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ margin: 0, padding: 0, overflow: 'hidden', width: '100vw', height: '100vh' }}>
      <iframe 
        title="RPGMaker Game" 
        src="/game/index.html" 
        width="100%" 
        height="100%" 
        frameborder="0" 
        allowfullscreen
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
}

export default App;
