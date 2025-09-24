import React from 'react';
import './CategoryNav.css';

const CategoryNav = () => {
  const categories = [
    'All Products',
    'Same Day Delivery',
    'Stationery',
    'Corporate Gifts',
    'Drinkware',
    'Labels & Packaging',
    'Apparel',
    'Signs, Marketing & Promo',
    'Photo Gifts'
  ];

  return (
    <nav className="category-nav">
      <div className="category-nav-container">
        <div className="category-nav-content">
          {categories.map((category, index) => (
            <a 
              key={index} 
              href="#" 
              className="category-link"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
