import React from 'react';
import './CompanyIntro.css';

const CompanyIntro = () => {
  return (
    <div className="company-intro">
      <div className="company-container">
        <div className="company-content">
          <h2 className="company-title">
            Printo - For You, Making Your Print Experience Hassle-Free
          </h2>
          <div className="company-text">
            <p className="company-paragraph">
              At Printo, we turn your ideas into real-world print magic. From custom business cards to employee joining kits, branded signage, corporate gifting and everything in between -- we've been India's go-to print-on-demand platform since 2006.
            </p>
            <p className="company-paragraph">
              Headquartered in Bangalore, we operate a state-of-the-art 50,000+ sq. ft production facility and 28+ retail stores across 6 major cities. Whether you're a startup founder looking to print just 5 T-shirts or an enterprise rolling out 5,000 onboarding kits -- we've got you....read more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyIntro;
