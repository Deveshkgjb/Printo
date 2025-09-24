import React, { useState } from 'react';
import './PopularCategories.css';
import ProductCategoryModal from './ProductCategoryModal';

const PopularCategories = () => {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Apparel",
      imageUrl: "/images/App_1753334972-1.webp"
    },
    {
      id: 2,
      name: "Awards & Trophies",
      imageUrl: "/images/Awa_1754231245.webp"
    },
    {
      id: 3,
      name: "Business Stationery",
      imageUrl: "/images/Stationeryv_1754033693.webp"
    },
    {
      id: 4,
      name: "Corporate Gifts",
      imageUrl: "/images/Corporate-gifts_1754033787.webp"
    },
    {
      id: 5,
      name: "Drinkware",
      imageUrl: "/images/Marketing_1753334972.webp"
    },
    {
      id: 6,
      name: "Packaging",
      imageUrl: "/images/Photo_1754231245.webp"
    },
    {
      id: 7,
      name: "Signs & Marketing",
      imageUrl: "/images/1v_1754230303.webp"
    },
    {
      id: 8,
      name: "Photo Gifts",
      imageUrl: "/images/App_1753334972.webp"
    }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsCategoryModalOpen(true);
  };

  const handleCloseCategoryModal = () => {
    setIsCategoryModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <div className="popular-categories">
      <div className="categories-container">
        <h2 className="categories-title">Popular Categories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card" onClick={() => handleCategoryClick(category)}>
              <div className="category-image">
                <img 
                  src={category.imageUrl} 
                  alt={category.name}
                  className="category-real-image"
                />
              </div>
              <h3 className="category-name">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
      
      <ProductCategoryModal 
        isOpen={isCategoryModalOpen} 
        onClose={handleCloseCategoryModal}
        categoryData={selectedCategory}
      />
    </div>
  );
};

export default PopularCategories;
