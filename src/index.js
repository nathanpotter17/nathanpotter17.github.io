import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import './desktopC.css';
import { App } from './App';

function EpilepsyWarning() {
  const [isVisible, setIsVisible] = useState(true);

  const handleHideWarning = () => {
    setIsVisible(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'black',
        display: isVisible ? 'block' : 'none',
        zIndex: 9999, // Make sure it's on top
      }}
    >
      <div className='messageCenter'>
        <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src="./nate2.jpg" alt="Nate Logo" />
        <p style={{ color: 'white', textAlign: 'center' }}>
          WARNING: This app may contain flashing lights that could trigger epilepsy seizures by moving the window or resizing.
        </p>
        <button style={{ display: 'block', padding: '5px', marginLeft: 'auto', marginRight: 'auto' }} onClick={handleHideWarning}>Proceed</button>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<EpilepsyWarning />}>
    <EpilepsyWarning />
    <App />
  </Suspense>
);
