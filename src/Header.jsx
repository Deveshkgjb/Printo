import React, { useState } from 'react';
import './Header.css';
import BusinessSolutionsModal from './BusinessSolutionsModal';
import TrackOrderModal from './TrackOrderModal';
import StoreLocatorModal from './StoreLocatorModal';

const Header = () => {
  const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);
  const [isTrackOrderModalOpen, setIsTrackOrderModalOpen] = useState(false);
  const [isStoreLocatorModalOpen, setIsStoreLocatorModalOpen] = useState(false);

  const handleBusinessClick = (e) => {
    e.preventDefault();
    setIsBusinessModalOpen(true);
  };

  const handleTrackOrderClick = (e) => {
    e.preventDefault();
    setIsTrackOrderModalOpen(true);
  };

  const handleCloseBusinessModal = () => {
    setIsBusinessModalOpen(false);
  };

  const handleCloseTrackOrderModal = () => {
    setIsTrackOrderModalOpen(false);
  };

  const handleStoreLocatorClick = (e) => {
    e.preventDefault();
    setIsStoreLocatorModalOpen(true);
  };

  const handleCloseStoreLocatorModal = () => {
    setIsStoreLocatorModalOpen(false);
  };

  return (
    <header className="header">
      {/* Dark grey top strip */}
      <div className="header-top-strip"></div>
      
      <div className="header-container">
        <div className="header-content">
          {/* Left side - Track Order only */}
          <div className="header-left">
            <a href="#" className="header-link" onClick={handleTrackOrderClick}>
              Track Order
            </a>
          </div>
          
          {/* Right side - Store Locator, Sample Kit, Business Solutions */}
          <div className="header-right">
                <a href="#" className="header-link-with-icon header-link-purple" onClick={handleStoreLocatorClick}>
                  <svg 
                    className="header-icon" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  <span>Store Locator</span>
                </a>
            
            <a href="#" className="header-link">
              Sample Kit
            </a>
            
            <button className="header-button" onClick={handleBusinessClick}>
              Business Solutions
            </button>
          </div>
        </div>
      </div>
      
      <BusinessSolutionsModal 
        isOpen={isBusinessModalOpen} 
        onClose={handleCloseBusinessModal} 
      />
      
          <TrackOrderModal 
            isOpen={isTrackOrderModalOpen} 
            onClose={handleCloseTrackOrderModal} 
          />
          
          <StoreLocatorModal 
            isOpen={isStoreLocatorModalOpen} 
            onClose={handleCloseStoreLocatorModal} 
          />
        </header>
  );
};

export default Header;
