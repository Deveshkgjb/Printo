import React, { useState } from 'react';
import './StoreLocatorModal.css';

const StoreLocatorModal = ({ isOpen, onClose }) => {
  const [pincode, setPincode] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  if (!isOpen) return null;

  const cities = [
    { name: 'Bangalore', image: '/src/App_1753334972.webp' },
    { name: 'Chennai', image: '/src/App_1753334972.webp' },
    { name: 'Hyderabad', image: '/src/App_1753334972.webp' },
    { name: 'New Delhi', image: '/src/App_1753334972.webp' },
    { name: 'Pune', image: '/src/App_1753334972.webp' },
    { name: 'Gurugram', image: '/src/App_1753334972.webp' }
  ];

  const stores = [
    {
      id: 1,
      name: 'Brigade Road',
      status: 'Closed Now',
      address: '123 Brigade Road, Bangalore, Karnataka 560001',
      image: '/src/App_1753334972.webp',
      services: ['Digital Printing', 'Instant Photo Prints', 'Photo Books and Frames', 'Outdoor Signage']
    },
    {
      id: 2,
      name: 'Electronic City',
      status: 'Closed Now',
      address: '456 Electronic City Phase 1, Bangalore, Karnataka 560100',
      image: '/src/App_1753334972.webp',
      services: ['Corporate Gifts', 'Brochures and Pamphlets', 'Business Cards', 'Letterheads and Envelopes']
    },
    {
      id: 3,
      name: 'Frazer Town',
      status: 'Closed Now',
      address: '789 Frazer Town, Bangalore, Karnataka 560005',
      image: '/src/App_1753334972.webp',
      services: ['Photo Gifts', 'T-shirts and Shirts', 'Wide Format Printing', 'Digital Printing']
    },
    {
      id: 4,
      name: 'HSR Layout',
      status: 'Closed Now',
      address: '321 HSR Layout, Bangalore, Karnataka 560102',
      image: '/src/App_1753334972.webp',
      services: ['Instant Photo Prints', 'Photo Books and Frames', 'Outdoor Signage', 'Corporate Gifts']
    },
    {
      id: 5,
      name: 'Hinjewadi',
      status: 'Closed Now',
      address: '654 Hinjewadi, Pune, Maharashtra 411057',
      image: '/src/App_1753334972.webp',
      services: ['Brochures and Pamphlets', 'Business Cards', 'Letterheads and Envelopes', 'Photo Gifts']
    },
    {
      id: 6,
      name: 'Gurugram',
      status: 'Closed Now',
      address: '987 Gurugram, Haryana 122001',
      image: '/src/App_1753334972.webp',
      services: ['T-shirts and Shirts', 'Wide Format Printing', 'Digital Printing', 'Instant Photo Prints']
    },
    {
      id: 7,
      name: 'Sohna Road',
      status: 'Closed Now',
      address: '147 Sohna Road, Gurugram, Haryana 122001',
      image: '/src/App_1753334972.webp',
      services: ['Photo Books and Frames', 'Outdoor Signage', 'Corporate Gifts', 'Brochures and Pamphlets']
    },
    {
      id: 8,
      name: 'South Campus',
      status: 'Closed Now',
      address: '258 South Campus, New Delhi, Delhi 110021',
      image: '/src/App_1753334972.webp',
      services: ['Business Cards', 'Letterheads and Envelopes', 'Photo Gifts', 'T-shirts and Shirts']
    },
    {
      id: 9,
      name: 'Gachibowli',
      status: 'Closed Now',
      address: '369 Gachibowli, Hyderabad, Telangana 500032',
      image: '/src/App_1753334972.webp',
      services: ['Wide Format Printing', 'Digital Printing', 'Instant Photo Prints', 'Photo Books and Frames']
    }
  ];

  const handlePincodeSearch = () => {
    console.log('Searching for pincode:', pincode);
  };

  const handleCitySelect = (cityName) => {
    setSelectedCity(cityName);
    console.log('Selected city:', cityName);
  };

  const handleCall = (storeName) => {
    console.log('Calling store:', storeName);
  };

  const handleEmail = (storeName) => {
    console.log('Emailing store:', storeName);
  };

  const handleDirections = (storeName) => {
    console.log('Getting directions to:', storeName);
  };

  return (
    <div className="store-locator-modal-overlay">
      <div className="store-locator-modal-content">
        <button className="store-locator-modal-close" onClick={onClose}>
          ×
        </button>
        
        {/* Back to Home Button */}
        <button className="back-to-home-btn" onClick={onClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          Back to Home
        </button>

        {/* Main Navbar */}
        <div className="main-navbar">
          <div className="navbar-container">
            <div className="navbar-content">
              {/* Logo */}
              <div className="navbar-logo">
                <img 
                  src="/images/printo-logo_1710143759.webp" 
                  alt="Printo Logo" 
                  className="logo-image"
                />
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
                <a href="#" className="nav-item">
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

                <a href="#" className="nav-item">
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

                <a href="#" className="nav-item cart-item">
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
        </div>

        <div className="store-locator-container">
          {/* Left Panel - Store Locator */}
          <div className="store-locator-panel">
            <div className="store-locator-content">
              {/* Header */}
              <div className="locator-header">
                <h2 className="locator-title">Find a store near you</h2>
                <div className="pincode-search">
                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="pincode-input"
                  />
                  <button className="search-btn" onClick={handlePincodeSearch}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* City Filter */}
              <div className="city-filter">
                <h3 className="filter-title">Filter by City</h3>
                <div className="city-grid">
                  {cities.map((city, index) => (
                    <div 
                      key={index}
                      className={`city-item ${selectedCity === city.name ? 'selected' : ''}`}
                      onClick={() => handleCitySelect(city.name)}
                    >
                      <img 
                        src={city.image} 
                        alt={city.name}
                        className="city-image"
                      />
                      <span className="city-name">{city.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Store Listings */}
              <div className="store-listings">
                <h3 className="listings-title">28 Stores Available Across India</h3>
                <div className="stores-list">
                  {stores.map((store) => (
                    <div key={store.id} className="store-item">
                      <div className="store-image">
                        <img 
                          src={store.image} 
                          alt={store.name}
                          className="store-thumbnail"
                        />
                      </div>
                      <div className="store-details">
                        <div className="store-header">
                          <h4 className="store-name">{store.name}</h4>
                          <span className="store-status">{store.status}</span>
                        </div>
                        <p className="store-address">{store.address}</p>
                        <div className="store-actions">
                          <button 
                            className="action-btn call-btn"
                            onClick={() => handleCall(store.name)}
                          >
                            Call
                          </button>
                          <button 
                            className="action-btn email-btn"
                            onClick={() => handleEmail(store.name)}
                          >
                            Email
                          </button>
                          <button 
                            className="action-btn directions-btn"
                            onClick={() => handleDirections(store.name)}
                          >
                            Directions
                          </button>
                        </div>
                        <div className="store-services">
                          <ul>
                            {store.services.map((service, index) => (
                              <li key={index}>{service}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="stores-count">Showing 28 stores</div>
              </div>
            </div>
          </div>

          {/* Right Panel - Map */}
          <div className="map-panel">
            <div className="map-container">
              <div className="map-controls">
                <button className="zoom-btn zoom-in">+</button>
                <button className="zoom-btn zoom-out">-</button>
              </div>
              <div className="map-placeholder">
                <div className="map-pins">
                  {stores.map((store, index) => (
                    <div 
                      key={store.id}
                      className="map-pin"
                      style={{
                        left: `${20 + (index * 8)}%`,
                        top: `${30 + (index * 5)}%`
                      }}
                    >
                      📍
                    </div>
                  ))}
                </div>
                <div className="map-attribution">OpenStreetMap contributors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocatorModal;
