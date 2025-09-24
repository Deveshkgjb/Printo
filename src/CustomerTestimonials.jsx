import React from 'react';
import './CustomerTestimonials.css';

const CustomerTestimonials = () => {
  const serviceFeatures = [
    {
      id: 1,
      title: "Fast Turn Around",
      subtitle: "Same-day order delivery for small orders.",
      icon: "⏰"
    },
    {
      id: 2,
      title: "Easy Ordering and reordering",
      subtitle: "Design, order, pickup or get delivery. Reorder in a click- ideal for businesses!",
      icon: "🛍️"
    },
    {
      id: 3,
      title: "27 Stores Nationwide",
      subtitle: "Quality Printing, always within reach!",
      icon: "🏪"
    },
    {
      id: 4,
      title: "Wide Product Range",
      subtitle: "From tees to trophies - We print it all.",
      icon: "🎁"
    }
  ];

  const clientLogos = [
    { name: "Flipkart", logo: "🛒" },
    { name: "Wipro", logo: "💼" },
    { name: "Freshworks", logo: "🌱" },
    { name: "PhonePe", logo: "📱" },
    { name: "Google", logo: "🔍" },
    { name: "TCS", logo: "💻" }
  ];

  return (
    <div className="customer-testimonials">
      <div className="testimonials-container">
        {/* Customer Testimonial Section */}
        <div className="testimonial-section">
          <h2 className="testimonial-title">What our Customers Say</h2>
          <div className="rating">
            <span className="star filled">★</span>
            <span className="star filled">★</span>
            <span className="star filled">★</span>
            <span className="star filled">★</span>
            <span className="star">☆</span>
          </div>
          <p className="testimonial-quote">
            "Printo helped us print our booklets and the team was helpful. The content layout and binding was nice. It looked very polished overall. Initially there were lot of conversations happening regarding the design but at last really happy with how the booklets came out."
          </p>
          <p className="testimonial-author">– Deepika Kumar.</p>
          <div className="testimonial-separator">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        {/* Service Features Section */}
        <div className="service-features">
          {serviceFeatures.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-subtitle">{feature.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Trusted Clients Section */}
        <div className="trusted-clients">
          <p className="trust-statement">Trusted by over 350 Large Enterprises for Printing, Signage and Gifting needs.</p>
          <div className="client-logos">
            {clientLogos.map((client, index) => (
              <div key={index} className="client-logo">
                <span className="logo-icon">{client.logo}</span>
                <span className="logo-name">{client.name}</span>
              </div>
            ))}
          </div>
          <p className="cta-text">Need a Corporate Account?</p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
