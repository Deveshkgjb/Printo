import React, { useState } from 'react';
import './ProductDetailModal.css';

const ProductDetailModal = ({ isOpen, onClose, productData }) => {
  const [selectedMaterial, setSelectedMaterial] = useState('Lykam Matte Coated Paper');
  const [selectedLamination, setSelectedLamination] = useState('No Finish');
  const [selectedOrientation, setSelectedOrientation] = useState('Landscape');
  const [selectedQuantity, setSelectedQuantity] = useState('100');
  const [selectedPrintingLocation, setSelectedPrintingLocation] = useState('Front');

  if (!isOpen || !productData) return null;

  const handleUploadFiles = () => {
    console.log('Upload files clicked');
  };

  const handleCreateDesign = () => {
    console.log('Create design clicked');
  };

  const removePrintingLocation = () => {
    setSelectedPrintingLocation('');
  };

  return (
    <div className="product-detail-modal-overlay">
      <div className="product-detail-modal-content">
        <button className="product-detail-modal-close" onClick={onClose}>
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

        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <span>Home</span>
          <span>/</span>
          <span>Business Cards</span>
          <span>/</span>
          <span>Standard Business Card</span>
        </div>

        <div className="product-detail-container">
          {/* Left Side - Product Images */}
          <div className="product-images-section">
            <div className="main-product-image">
              <img 
                src={productData.mainImage || "/src/App_1753334972.webp"} 
                alt={productData.name}
                className="main-image"
              />
            </div>
            
            <div className="thumbnail-images">
              <div className="thumbnail">
                <img 
                  src={productData.thumbnail1 || "/src/App_1753334972.webp"} 
                  alt="Product view 1"
                  className="thumbnail-img"
                />
              </div>
              <div className="thumbnail">
                <img 
                  src={productData.thumbnail2 || "/src/App_1753334972.webp"} 
                  alt="Size chart"
                  className="thumbnail-img"
                />
              </div>
              <div className="thumbnail">
                <img 
                  src={productData.thumbnail3 || "/src/App_1753334972.webp"} 
                  alt="Material detail"
                  className="thumbnail-img"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="product-details-section">
            <h1 className="product-title">Standard Business Card</h1>
            <p className="product-description">
              Clean, polished, and versatile - perfect for everyday business interactions.
            </p>

            {/* Key Features */}
            <div className="key-features">
              <ul className="features-list">
                <li><strong>Size:</strong> 3.5 x 2 inches</li>
                <li><strong>Paper Options:</strong> 300 GSM Lykam Matte or Glossy Coated Paper</li>
                <li><strong>Lamination:</strong> Matte, Glossy, or No Lamination</li>
                <li><strong>Finish:</strong> Sharp digital printing with a professional look</li>
                <li><strong>MOQ:</strong> 100 cards</li>
                <li><strong>Same-Day Delivery:</strong> On orders placed before 3 PM</li>
              </ul>
            </div>

            {/* Ideal For */}
            <div className="ideal-for">
              <p><strong>Ideal For:</strong> Startups, Consultants, Professionals, Events & Walk-in Customers</p>
            </div>

            {/* Promotional Link */}
            <div className="promotional-link">
              <a href="#" className="premium-link">
                Explore our Premium Business Cards for a standout finish
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </a>
            </div>

            {/* Disclaimer */}
            <div className="disclaimer">
              <p>We do not accept designs that belong to or represent government or government-affiliated organizations.</p>
            </div>

            {/* Customization Options */}
            <div className="customization-section">
              <div className="customization-row">
                <div className="customization-field">
                  <label>Materials</label>
                  <select 
                    value={selectedMaterial} 
                    onChange={(e) => setSelectedMaterial(e.target.value)}
                    className="customization-select"
                  >
                    <option value="Lykam Matte Coated Paper">Lykam Matte Coated Paper</option>
                    <option value="Lykam Glossy Coated Paper">Lykam Glossy Coated Paper</option>
                  </select>
                </div>

                <div className="customization-field">
                  <label>Lamination</label>
                  <select 
                    value={selectedLamination} 
                    onChange={(e) => setSelectedLamination(e.target.value)}
                    className="customization-select"
                  >
                    <option value="No Finish">No Finish</option>
                    <option value="Matte Lamination">Matte Lamination</option>
                    <option value="Glossy Lamination">Glossy Lamination</option>
                  </select>
                </div>
              </div>

              <div className="customization-row">
                <div className="customization-field">
                  <label>Orientation</label>
                  <select 
                    value={selectedOrientation} 
                    onChange={(e) => setSelectedOrientation(e.target.value)}
                    className="customization-select"
                  >
                    <option value="Landscape">Landscape</option>
                    <option value="Portrait">Portrait</option>
                  </select>
                </div>

                <div className="customization-field">
                  <label>Printing Location</label>
                  {selectedPrintingLocation ? (
                    <div className="printing-location-tag">
                      <span className="tag-text">{selectedPrintingLocation}</span>
                      <button 
                        className="tag-remove"
                        onClick={removePrintingLocation}
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <select 
                      value={selectedPrintingLocation} 
                      onChange={(e) => setSelectedPrintingLocation(e.target.value)}
                      className="customization-select"
                    >
                      <option value="">Select Location</option>
                      <option value="Front">Front</option>
                      <option value="Back">Back</option>
                      <option value="Both Sides">Both Sides</option>
                    </select>
                  )}
                </div>
              </div>

              <div className="customization-row">
                <div className="customization-field">
                  <label>Quantity</label>
                  <select 
                    value={selectedQuantity} 
                    onChange={(e) => setSelectedQuantity(e.target.value)}
                    className="customization-select"
                  >
                    <option value="100">100</option>
                    <option value="250">250</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="pricing-section">
              <div className="price-main">₹214.76 inclusive of all taxes</div>
              <div className="price-details">for 100 Qty (₹2.15 / piece)</div>
              <a href="#" className="bulk-save-link">
                Buy in bulk and save
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="upload-btn" onClick={handleUploadFiles}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7,10 12,15 17,10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Upload your Files
              </button>
              
              <button className="create-btn" onClick={handleCreateDesign}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
                Create your Design
              </button>
            </div>

            {/* Estimate Delivery */}
            <div className="delivery-section">
              <h3 className="delivery-title">Estimate Delivery</h3>
              <div className="delivery-content">
                {/* Delivery information will be populated here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
