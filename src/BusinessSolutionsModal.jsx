import React, { useState } from 'react';
import './BusinessSolutionsModal.css';

const BusinessSolutionsModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: 'Devesh kumar',
    businessEmail: 'deveshkumar48507@gmail.com',
    contactNumber: '9899899989',
    companyName: 'Carteasy Pvt Ltd',
    employeeCount: '0-10',
    lookingFor: 'Joining Kits'
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGetQuote = () => {
    console.log('Get Quote clicked with data:', formData);
    // Handle get quote action
  };

  const handleWhatsApp = () => {
    console.log('WhatsApp clicked');
    // Handle WhatsApp action
  };

  return (
    <div className="business-modal-overlay" onClick={onClose}>
      <div className="business-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="business-modal-close" onClick={onClose}>
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

        <div className="business-modal-header">
          <div className="business-logo">
            <img 
              src="/images/printo-logo_1710143759.webp" 
              alt="Printo Logo" 
              className="business-logo-image"
            />
          </div>
          <h1 className="business-title">Your Ultimate Printing & Gifting Partner</h1>
        </div>
        
        <div className="business-form-container">
          <h2 className="form-title">
            Business Solutions Tailored to Your Needs - Fill the Form Today!
          </h2>
          
          <form className="business-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="businessEmail">Business Email</label>
                <input
                  type="email"
                  id="businessEmail"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="employeeCount">Employee Count</label>
                <select
                  id="employeeCount"
                  name="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="0-10">0-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="lookingFor">What are you looking for?</label>
                <input
                  type="text"
                  id="lookingFor"
                  name="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-buttons">
              <button type="button" className="get-quote-btn" onClick={handleGetQuote}>
                Get Quote
              </button>
              <button type="button" className="whatsapp-btn" onClick={handleWhatsApp}>
                WhatsApp Us
              </button>
            </div>
            
            <div className="contact-info">
              <p className="contact-text">Or talk to us at 9513734374</p>
              <p className="response-time">
                *We typically reply within 30 minutes 10 AM to 7 PM MON to SAT.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutionsModal;
