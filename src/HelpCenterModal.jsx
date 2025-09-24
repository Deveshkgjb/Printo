import React, { useState } from 'react';
import './HelpCenterModal.css';

const HelpCenterModal = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState({});

  if (!isOpen) return null;

  const toggleExpanded = (category, index) => {
    const key = `${category}-${index}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const myOrdersQuestions = [
    "How do I place an order?",
    "Will I get a design proof / preview before placing the order?",
    "Should I place an order only via online?",
    "I am placing a re-order and the price seems to be higher than the previous time I ordered",
    "I have a re-order token but am not able to use it!",
    "Can I place multiple orders for a single product?",
    "Can I share multiple images / designs in an order?",
    "Do you provide Tax Invoices? How can I get my invoice after placing the order?",
    "How do I Re-order? Is it possible to re-order with design changes?"
  ];

  const designingQuestions = [
    "How do I upload my design?",
    "Why is the page showing an error that my image is larger?",
    "Don't you have an option to curve the letters for stamps or rounded stamps?",
    "Why are there no design templates for many products?",
    "What file formats do you guys support?",
    "Why do you show square shapes for rounded cards?",
    "Why do you have standard color options for all products and not specific for each product?",
    "I have designed and placed the order but the design is not seen on my order"
  ];

  return (
    <div className="help-modal-overlay" onClick={onClose}>
      <div className="help-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="help-modal-close" onClick={onClose}>
          ×
        </button>
        
        {/* Help Center Section */}
        <div className="help-center-section">
          <h2 className="help-center-title">Help Center</h2>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-info">
                <h3>Call us for Queries:</h3>
                <p className="contact-detail">Helpdesk: +91 951 373 4374</p>
                <p className="contact-time">(Mon-Sat: 10:00 AM - 7:00 PM)</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-info">
                <h3>E-Mail us:</h3>
                <p className="contact-detail">Sales enquiries and customer support:</p>
                <p className="contact-email">care@printo.in</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-info">
                <h3>Postal address:</h3>
                <p className="contact-detail">Printo Document Services Pvt. Ltd.</p>
                <p className="contact-address">No. 320/3/5, Siddappa Layout, 1st Main, Bommanahalli, Bangalore 560 068.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="faqs-section">
          <h2 className="faqs-title">FAQs</h2>
          
          <div className="faq-categories">
            <div className="faq-category">
              <h3 className="category-title">My orders</h3>
              <div className="faq-list">
                {myOrdersQuestions.map((question, index) => (
                  <div key={index} className="faq-item">
                    <button 
                      className="faq-question"
                      onClick={() => toggleExpanded('orders', index)}
                    >
                      <span className="faq-text">{question}</span>
                      <span className="faq-icon">
                        {expandedItems[`orders-${index}`] ? '−' : '+'}
                      </span>
                    </button>
                    {expandedItems[`orders-${index}`] && (
                      <div className="faq-answer">
                        <p>Answer for: {question}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="faq-category">
              <h3 className="category-title">Designing My product</h3>
              <div className="faq-list">
                {designingQuestions.map((question, index) => (
                  <div key={index} className="faq-item">
                    <button 
                      className="faq-question"
                      onClick={() => toggleExpanded('designing', index)}
                    >
                      <span className="faq-text">{question}</span>
                      <span className="faq-icon">
                        {expandedItems[`designing-${index}`] ? '−' : '+'}
                      </span>
                    </button>
                    {expandedItems[`designing-${index}`] && (
                      <div className="faq-answer">
                        <p>Answer for: {question}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterModal;
