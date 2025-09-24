import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="blog-container">
        <div className="blog-content">
          <div className="blog-text">
            <h2 className="blog-title">From the blog.</h2>
            <p className="blog-description">
              Explore ideas, tips, and everything print. From choosing the right finish to creating standout branding, our blog is your go-to guide for all things print. Whether you're building your brand or growing your business, we've got insights to inspire every step. Readmore
            </p>
          </div>
          <div className="blog-cards">
            <div className="blog-card">
              <img 
                src="/images/Blog_1754559566.webp" 
                alt="Blog post 1"
                className="blog-card-image"
              />
            </div>
            <div className="blog-card">
              <img 
                src="/images/2_1754024184.webp" 
                alt="Blog post 2"
                className="blog-card-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
