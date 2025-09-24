import React, { useState, useEffect } from 'react';
import './BannerSlider.css';
import ProductPageModal from './ProductPageModal';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [showUploadSection, setShowUploadSection] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const defaultSlides = [
    {
      id: 1,
      title: "Custom Dry Fit T-Shirts",
      subtitle: "Comfort built to last, Branding built to stay.",
      buttonText: "Shop Now",
      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      imageUrl: "./src/img1.png",
      showTextOverlay: false,
      isDefault: true
    },
    {
      id: 2,
      title: "Diwali Special",
      subtitle: "Celebrate the festival of lights with us.",
      buttonText: "Shop Now",
      background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
      imageUrl: "/images/Diwali-Desk_1756794212.webp",
      showTextOverlay: false,
      isDefault: true
    },
    {
      id: 3,
      title: "Business Cards",
      subtitle: "Make every Introduction Memorable.",
      buttonText: "Shop Now",
      background: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)",
      imageUrl: "/images/Business-cards-Desk_1756794368.webp",
      showTextOverlay: false,
      isDefault: true
    }
  ];

  const slides = uploadedImages.length > 0 ? uploadedImages : defaultSlides;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleImageClick = (slide) => {
    setSelectedProduct(slide);
    setIsProductModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newSlides = files.map((file, index) => ({
      id: Date.now() + index,
      title: file.name.split('.')[0] || `Slide ${index + 1}`,
      subtitle: "Upload your custom banner image.",
      buttonText: "Learn More",
      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      imageUrl: URL.createObjectURL(file),
      isDefault: false
    }));
    
    setUploadedImages(newSlides);
    setCurrentSlide(0);
  };

  const resetToDefault = () => {
    setUploadedImages([]);
    setCurrentSlide(0);
  };

  const addImageByPath = (imagePath, title, subtitle) => {
    const newSlide = {
      id: Date.now(),
      title: title || "Custom Image",
      subtitle: subtitle || "Your custom banner image.",
      buttonText: "Learn More",
      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      imageUrl: imagePath,
      isDefault: false
    };
    
    setUploadedImages(prev => [...prev, newSlide]);
    setCurrentSlide(0);
  };

  return (
    <div className="banner-slider">
      <div className="slider-container">
        <div className="slider-wrapper">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ background: slide.background }}
            >
                {slide.imageUrl ? (
                  <div className="full-width-slide" onClick={() => handleImageClick(slide)}>
                    <img 
                      src={slide.imageUrl} 
                      alt={slide.title}
                      className="full-width-image"
                    />
                    {slide.showTextOverlay !== false && (
                      <div className="slide-overlay">
                        <div className="slide-text-overlay">
                          <h2 className="slide-title">{slide.title}</h2>
                          <p className="slide-subtitle">{slide.subtitle}</p>
                          <button className="slide-button">
                            {slide.buttonText}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="slide-content">
                    <div className="slide-text">
                      <h2 className="slide-title">{slide.title}</h2>
                      <p className="slide-subtitle">{slide.subtitle}</p>
                      <button className="slide-button">
                        {slide.buttonText}
                      </button>
                    </div>
                    <div className="slide-image">
                      <div className={`product-showcase ${slide.image}`}>
                        {/* Placeholder for product images */}
                        <div className="product-placeholder">
                          <div className="product-item"></div>
                          <div className="product-item"></div>
                          <div className="product-item"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>
        
        {/* Navigation Dots */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
      
      <ProductPageModal 
        isOpen={isProductModalOpen} 
        onClose={handleCloseProductModal}
        productData={selectedProduct}
      />
    </div>
  );
};

export default BannerSlider;
