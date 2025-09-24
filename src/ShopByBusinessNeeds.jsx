import React from 'react';
import './ShopByBusinessNeeds.css';

const ShopByBusinessNeeds = () => {
  const businessNeeds = [
    {
      id: 1,
      name: "For Startups",
      imageUrl: "./src/img2/Startups_1753853634.webp"
    },
    {
      id: 2,
      name: "Events & Promotions",
      imageUrl: "./src/img2/Event_1753853634.webp"
    },
    {
      id: 3,
      name: "Cafe And Restaurant Essentials",
      imageUrl: "./src/img2/Cafe_1753853634.webp"
    },
    {
      id: 4,
      name: "Employee Engagement",
      imageUrl: "./src/img2/1_1754130220.webp"
    },
    {
      id: 5,
      name: "Corporate Branding",
      imageUrl: "./src/img2/2222_1757444411.webp"
    },
    {
      id: 6,
      name: "Marketing Materials",
      imageUrl: "./src/img2/yellow-1_1757444411.webp"
    },
    {
      id: 7,
      name: "Product Packaging",
      imageUrl: "./src/img2/1440_1754641764.webp"
    },
    {
      id: 8,
      name: "Custom Solutions",
      imageUrl: "./src/img2/Diwali_1758103957.webp"
    }
  ];

  return (
    <div className="shop-by-business-needs">
      <div className="business-needs-container">
        <h2 className="business-needs-title">Shop By Business Needs</h2>
        <div className="business-needs-grid">
          {businessNeeds.map((need) => (
            <div key={need.id} className="business-need-card">
              <div className="business-need-image">
                <img 
                  src={need.imageUrl} 
                  alt={need.name}
                  className="business-need-real-image"
                />
              </div>
                <h3 className="business-need-name">{need.name} &gt;</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByBusinessNeeds;
