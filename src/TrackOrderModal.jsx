import React, { useState } from 'react';
import './TrackOrderModal.css';

const TrackOrderModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otpEmail, setOtpEmail] = useState('');

  if (!isOpen) return null;

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleGenerateOTP = () => {
    console.log('Generate OTP for:', otpEmail);
  };

  const handlePasswordLogin = () => {
    console.log('Password login:', email, password);
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  return (
    <div className="track-order-modal-overlay">
      <div className="track-order-modal-content">
        <button className="track-order-modal-close" onClick={onClose}>
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
        
        {/* Navigation Bar */}
        <div className="track-navbar">
          <div className="nav-links">
            <a href="#" className="nav-link">Calendars & Diaries</a>
            <a href="#" className="nav-link">Same Day Delivery</a>
            <a href="#" className="nav-link">Stationery</a>
            <a href="#" className="nav-link">Corporate Gifts</a>
            <a href="#" className="nav-link">Apparel</a>
            <a href="#" className="nav-link">Boxes & Packaging</a>
            <a href="#" className="nav-link">Awards & Trophies</a>
            <a href="#" className="nav-link">Marketing</a>
            <a href="#" className="nav-link">Photo Gifts</a>
            <a href="#" className="nav-link">Decor</a>
            <a href="#" className="nav-link">New Launches</a>
          </div>
        </div>

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

        <div className="track-main-content">
          {/* Left Side - Login/Signup Form */}
          <div className="login-section">
            <div className="login-form">
              {/* Social Login */}
              <div className="social-login">
                <button className="facebook-login-btn" onClick={handleFacebookLogin}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Log in with Facebook
                </button>
                
                <button className="google-login-btn" onClick={handleGoogleLogin}>
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Sign in with Google
                </button>
              </div>

              {/* Separator */}
              <div className="separator">
                <span>---------- OR ----------</span>
              </div>

              {/* OTP Login */}
              <div className="otp-login">
                <h3 className="login-title">Login with OTP</h3>
                <div className="input-group">
                  <label htmlFor="otpEmail">Enter Email / Mobile number</label>
                  <input
                    type="text"
                    id="otpEmail"
                    value={otpEmail}
                    onChange={(e) => setOtpEmail(e.target.value)}
                    placeholder="Enter Email / Mobile number"
                    className="form-input"
                  />
                </div>
                <button className="generate-otp-btn" onClick={handleGenerateOTP}>
                  Generate OTP
                </button>
              </div>

              {/* Separator */}
              <div className="separator">
                <span>---------- OR ----------</span>
              </div>

              {/* Password Login */}
              <div className="password-login">
                <h3 className="login-title">Login with password</h3>
                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="form-input"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="form-input"
                  />
                </div>
                <button className="login-btn" onClick={handlePasswordLogin}>
                  Log in
                </button>
                <a href="#" className="forgot-password" onClick={handleForgotPassword}>
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Advantages */}
          <div className="advantages-section">
            <h2 className="advantages-title">Advantages of Sign up</h2>
            
            <div className="advantages-list">
              <div className="advantage-item">
                <div className="advantage-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    <path d="M13 8H7"></path>
                    <path d="M17 12H7"></path>
                    <circle cx="18" cy="6" r="3"></circle>
                  </svg>
                </div>
                <div className="advantage-content">
                  <h3 className="advantage-title">Instant notification update</h3>
                  <p className="advantage-description">
                    Get access to instant timely notification of the status of your order.
                  </p>
                </div>
              </div>

              <div className="advantage-item">
                <div className="advantage-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 17l20 0"></path>
                    <path d="M4 15l0 2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
                    <path d="M6 15l0-3a6 6 0 0 1 12 0v3"></path>
                    <path d="M8 11l0-1a4 4 0 0 1 8 0v1"></path>
                  </svg>
                </div>
                <div className="advantage-content">
                  <h3 className="advantage-title">Delivery status</h3>
                  <p className="advantage-description">
                    Know about your delivery status of your order instantly over emails & notifications.
                  </p>
                </div>
              </div>

              <div className="advantage-item">
                <div className="advantage-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    <path d="M12 11l0 6"></path>
                    <path d="M9 14l3-3 3 3"></path>
                    <circle cx="12" cy="8" r="1"></circle>
                  </svg>
                </div>
                <div className="advantage-content">
                  <h3 className="advantage-title">Save designs securely</h3>
                  <p className="advantage-description">
                    Save your designs securely and make it easy for your re-order next time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrderModal;
