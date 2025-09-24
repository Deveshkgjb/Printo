import React, { useState } from 'react';
import './BestSellers.css';
import ProductDetailModal from './ProductDetailModal';

const BestSellers = () => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const bestSellers = [
    {
      id: 1,
      name: "Shop Business cards",
      imageUrl: "/images/Startups_1753853634.webp"
    },
    {
      id: 2,
      name: "Shop Posters",
      imageUrl: "/images/Event_1753853634.webp"
    },
    {
      id: 3,
      name: "Shop Booklets",
      imageUrl: "/images/Cafe_1753853634.webp"
    },
    {
      id: 4,
      name: "Shop Flyers",
      imageUrl: "/images/1_1754130220.webp"
    },
    {
      id: 5,
      name: "Shop Acrylic Prints",
      imageUrl: "/images/2222_1757444411.webp"
    },
    {
      id: 6,
      name: "Shop Cards",
      imageUrl: "/images/yellow-1_1757444411.webp"
    },
    {
      id: 7,
      name: "Shop Stickers",
      imageUrl: "/images/1440_1754641764.webp"
    },
    {
      id: 8,
      name: "Shop Hoodies",
      imageUrl: "/images/Diwali_1758103957.webp"
    }
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="best-sellers">
      <div className="best-sellers-container">
        <h2 className="best-sellers-title">Best Sellers</h2>
        <div className="best-sellers-grid">
          {bestSellers.map((item) => (
            <div key={item.id} className="best-seller-card" onClick={() => handleProductClick(item)}>
              <div className="best-seller-image">
                <img 
                  src={item.imageUrl} 
                  alt={item.name}
                  className="best-seller-real-image"
                />
              </div>
              <h3 className="best-seller-name">{item.name} &gt;</h3>
            </div>
          ))}
        </div>
      </div>
      
      <ProductDetailModal 
        isOpen={isProductModalOpen} 
        onClose={handleCloseProductModal}
        productData={selectedProduct}
      />
    </div>
  );
};

export default BestSellers;
