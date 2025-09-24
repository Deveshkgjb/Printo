import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Find Stores</h3>
            <ul className="footer-links">
              <li><a href="#">Bangalore</a></li>
              <li><a href="#">Gurgoan</a></li>
              <li><a href="#">New Delhi</a></li>
              <li><a href="#">Chennai</a></li>
              <li><a href="#">Hyderabad</a></li>
              <li><a href="#">Pune</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Our Company</h3>
            <ul className="footer-links">
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li><a href="#">Help</a></li>
              <li><a href="#">Business Solutions</a></li>
              <li><a href="#">Find Stores</a></li>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Important Links</h3>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Delivery & Return Policy</a></li>
              <li><a href="#">Terms & conditions</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+91 951 3734374</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>care@printo.in</span>
              </div>
            </div>
            
            <div className="social-links">
              <h4 className="social-title">Follow us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">📷</a>
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">🐦</a>
                <a href="#" className="social-icon">💼</a>
                <a href="#" className="social-icon">📌</a>
              </div>
            </div>
            
            <div className="app-downloads">
              <h4 className="download-title">App Downloads</h4>
              <div className="download-buttons">
                <button className="download-button">
                  <span>🍎</span>
                  <div>
                    <div className="download-text-small">Download on the</div>
                    <div className="download-text-large">App Store</div>
                  </div>
                </button>
                <button className="download-button">
                  <span>▶️</span>
                  <div>
                    <div className="download-text-small">GET IT ON</div>
                    <div className="download-text-large">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="payment-methods">
              <h4 className="payment-title">Payment Methods</h4>
              <div className="payment-icons">
                <span className="payment-icon">💳</span>
                <span className="payment-icon">📱</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © 2025 Printo Document Services Pvt. Ltd.. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
