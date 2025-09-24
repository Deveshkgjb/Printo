import React from 'react';
import './CartModal.css';

const CartModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBrowseProducts = () => {
    // Handle browse products action
    console.log('Browse products clicked');
    onClose(); // Close modal after action
  };

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="cart-modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="empty-cart-container">
          <div className="cart-emoji">
            <div className="emoji-face">
              <div className="emoji-eyes">
                <div className="eye left-eye"></div>
                <div className="eye right-eye"></div>
              </div>
              <div className="emoji-mouth"></div>
            </div>
          </div>
          
          <h2 className="cart-message">
            This is embarrassing! Your cart is empty at the moment.
          </h2>
          
          <p className="cart-submessage">
            But we are here to help. Go ahead and customise your product by browsing products in.
          </p>
          
          <button className="browse-products-btn" onClick={handleBrowseProducts}>
            Browse all products
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
