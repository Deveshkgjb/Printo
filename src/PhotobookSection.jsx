import React from 'react';
import './PhotobookSection.css';

const PhotobookSection = () => {
  return (
    <div className="photobook-section">
      <div className="photobook-container">
        <div className="photobook-content">
          <img 
            src="/images/2_1754130942.webp" 
            alt="Photobook"
            className="photobook-full-image"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotobookSection;
