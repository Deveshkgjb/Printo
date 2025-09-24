import React, { useState } from 'react';
import './ProductCategoryModal.css';

const ProductCategoryModal = ({ isOpen, onClose, categoryData }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (!isOpen || !categoryData) return null;

  // Sample product data based on category
  const getProductData = (categoryName) => {
    switch (categoryName) {
      case "Apparel":
        return {
          title: "PRINT. WEAR. PERFORM.",
          description: "Custom apparel for every occasion - from startup launches to corporate events.",
          categories: [
            { name: "Round Neck T-Shirts", image: "/src/App_1753334972.webp" },
            { name: "Polo T-Shirts", image: "/src/App_1753334972.webp" },
            { name: "Hoodies", image: "/src/App_1753334972.webp" },
            { name: "Caps", image: "/src/App_1753334972.webp" }
          ],
          products: [
            {
              id: 1,
              name: "Dry Fit Round Neck",
              price: "₹576 for 1 T-shirt",
              image: "/src/App_1753334972.webp",
              features: ["160 gsm Dot-Knit Polyester", "Breathable, Quick-Dry Fabric", "Built for Sports & Active Wear"],
              isNew: true
            },
            {
              id: 2,
              name: "Eco Classic Round Neck",
              price: "₹369 for 1 T-shirt",
              image: "/src/App_1753334972.webp",
              features: ["180 GSM Recycled Yarn Knit", "GRS Certified & Pre-Shrunk", "Stretch Rib & Shaped Fit"]
            },
            {
              id: 3,
              name: "Cotton Premium Round Neck",
              price: "₹489 for 1 T-shirt",
              image: "/src/App_1753334972.webp",
              features: ["180 GSM Combed Cotton", "Pre-Shrunk & Bio-Washed", "Shaped Body Fit"]
            },
            {
              id: 4,
              name: "Rare Rabbit Round Neck",
              price: "₹996 for 1 Tshirt",
              image: "/src/App_1753334972.webp",
              features: ["Made from Liquid Cotton", "Soft and Breathable", "Fade Resistant and Long Lasting"]
            },
            {
              id: 5,
              name: "M&S Round Neck",
              price: "₹1023 for 1 Tshirt",
              image: "/src/App_1753334972.webp",
              features: ["170 GSM Compacted Cotton", "Made from 100% cotton", "Available in 6 colors"]
            }
          ]
        };
      default:
        return {
          title: `${categoryData.name} Collection`,
          description: `Explore our premium ${categoryData.name.toLowerCase()} collection.`,
          categories: [],
          products: []
        };
    }
  };

  const productData = getProductData(categoryData.name);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="category-modal-overlay">
      <div className="category-modal-content">
        <button className="category-modal-close" onClick={onClose}>
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

        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <span>Home</span>
          <span>/</span>
          <span>{categoryData?.name || 'Apparel'}</span>
        </div>

        {/* Main Title */}
        <h1 className="main-title">PRINT. WEAR. PERFORM.</h1>

        {/* Category Overview */}
        {productData.categories.length > 0 && (
          <div className="category-overview">
            <div className="category-grid">
              {productData.categories.map((category, index) => (
                <div key={index} className="category-item">
                  <div className="category-image">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="category-img"
                    />
                  </div>
                  <h3 className="category-label">{category.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Product Sections */}
        {productData.products.length > 0 && (
          <div className="product-sections">
            <div className="product-section">
              <div className="section-header">
                <h2 className="section-title">Custom Round Neck T-shirts</h2>
                <p className="section-description">
                  Whether it's for a startup launch, team event, college fest, or corporate activity, 
                  custom round neck t-shirts are a versatile choice. Printo offers a wide range of 
                  options, from budget-friendly to soft and professional t-shirts, perfect for bulk 
                  printing and promotional items.
                </p>
              </div>

              <div className="featured-models">
                <div className="model-image">
                  <img src="/src/App_1753334972.webp" alt="Model 1" />
                </div>
                <div className="model-image">
                  <img src="/src/App_1753334972.webp" alt="Model 2" />
                </div>
              </div>

              <div className="products-grid">
                {productData.products.map((product) => (
                  <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                    <div className="product-image-container">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="product-image"
                      />
                      {product.isNew && (
                        <div className="new-badge">NEW</div>
                      )}
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-price">{product.price}</p>
                      <ul className="product-features">
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Polo T-shirts Section */}
            <div className="product-section">
              <div className="section-header">
                <h2 className="section-title">Custom Polo T-shirts</h2>
                <p className="section-description">
                  Enhance your brand visibility with style and substance. Perfect for team wear, 
                  giveaways, and corporate identity. Wide range of custom branded polo shirts available.
                </p>
              </div>

              <div className="featured-models">
                <div className="model-image">
                  <img src="/src/App_1753334972.webp" alt="Polo Model" />
                </div>
              </div>

              <div className="products-grid">
                <div className="product-card">
                  <div className="product-image-container">
                    <img 
                      src="/src/App_1753334972.webp" 
                      alt="Dry Fit Polo"
                      className="product-image"
                    />
                    <div className="new-badge">NEW</div>
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">Dry Fit Polo</h3>
                    <p className="product-price">₹999.00 / Unit</p>
                    <ul className="product-features">
                      <li>100 gsm Dry-Fit Fabric</li>
                      <li>Breathable Quick Dry Fabric</li>
                      <li>Best for Sports & Active Wear</li>
                    </ul>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-image-container">
                    <img 
                      src="/src/App_1753334972.webp" 
                      alt="Black Polo"
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">Black Polo Shirt</h3>
                    <p className="product-price">₹799.00 / Unit</p>
                    <ul className="product-features">
                      <li>Premium Quality Fabric</li>
                      <li>Professional Look</li>
                      <li>Durable & Comfortable</li>
                    </ul>
                  </div>
                </div>
                <div className="product-card">
                  <div className="product-image-container">
                    <img 
                      src="/src/App_1753334972.webp" 
                      alt="Grey Polo"
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">Grey Polo Shirt</h3>
                    <p className="product-price">₹799.00 / Unit</p>
                    <ul className="product-features">
                      <li>Classic Design</li>
                      <li>Versatile Color</li>
                      <li>Easy to Maintain</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategoryModal;
