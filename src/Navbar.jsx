import React, { useState } from 'react';
import './Navbar.css';
import LoginModal from './LoginModal';
import HelpCenterModal from './HelpCenterModal';
import CartModal from './CartModal';

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsLoginModalOpen(true);
  };

  const handleHelpClick = (e) => {
    e.preventDefault();
    setIsHelpModalOpen(true);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setIsCartModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleCloseHelpModal = () => {
    setIsHelpModalOpen(false);
  };

  const handleCloseCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <div className="logo-circle">
              <span className="logo-text">printo</span>
            </div>
            <div className="logo-tagline">easy, one-stop printing</div>
          </div>

          {/* Search Bar */}
          <div className="navbar-search">
            <input 
              type="text" 
              placeholder="Search" 
              className="search-input"
            />
            <div className="search-icon">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="navbar-nav">
            <a href="#" className="nav-item" onClick={handleHelpClick}>
              <div className="nav-icon">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  <path d="M13 8H7"></path>
                  <path d="M17 12H7"></path>
                </svg>
              </div>
              <span>Help Center</span>
            </a>

            <a href="#" className="nav-item" onClick={handleLoginClick}>
              <div className="nav-icon">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <span>Login / Signup</span>
            </a>

            <a href="#" className="nav-item cart-item" onClick={handleCartClick}>
              <div className="nav-icon">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="m1 1 4 4 13 0 3 8-13 0-4-4"></path>
                </svg>
              </div>
              <div className="cart-badge">0</div>
            </a>
          </div>
        </div>
      </div>
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={handleCloseLoginModal} 
      />
      
      <HelpCenterModal 
        isOpen={isHelpModalOpen} 
        onClose={handleCloseHelpModal} 
      />
      
      <CartModal 
        isOpen={isCartModalOpen} 
        onClose={handleCloseCartModal} 
      />
    </nav>
  );
};

export default Navbar;
