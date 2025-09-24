import React from 'react';
import './AppPromotion.css';

const AppPromotion = () => {
  return (
    <div className="app-promotion">
      <div className="app-container">
        <div className="app-content">
          <div className="app-text">
            <h2 className="app-title">Tap. Print. Treasure</h2>
            <p className="app-subtitle">Your memories, turn into prints & gifts in minutes.</p>
            <p className="app-cta">Download Printo Photo App</p>
            <div className="app-buttons">
              <button className="app-store-button">
                <span className="store-icon">🍎</span>
                App Store
              </button>
              <button className="google-play-button">
                <span className="play-icon">▶️</span>
                Google Play
              </button>
            </div>
          </div>
          <div className="app-visual">
            <div className="app-items">
              <div className="mug-with-photo">
                <img 
                  src="/images/Cafe_1753853634.webp" 
                  alt="Photo mug"
                  className="mug-image"
                />
              </div>
              <div className="phone-order">
                <div className="phone-screen">
                  <div className="order-status">Order Placed ✓</div>
                </div>
              </div>
              <div className="photo-stack">
                <img 
                  src="/images/1_1754130220.webp" 
                  alt="Photo stack"
                  className="stack-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromotion;
