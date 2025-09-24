import React from 'react';
import './StoresSection.css';

const StoresSection = () => {
  return (
    <div className="stores-section">
      <div className="stores-container">
        <div className="stores-content">
          <div className="stores-text">
            <h2 className="stores-title">STORES</h2>
            <p className="stores-subtitle">6 Cities 27 Stores</p>
          </div>
          <div className="stores-visual">
            <div className="stores-map">
              <img 
                src="/images/Screenshot 2025-09-24 at 11.05.52 PM.png" 
                alt="Stores Map"
                className="stores-map-image"
              />
            </div>
            <button className="find-stores-button">Find Stores</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoresSection;
