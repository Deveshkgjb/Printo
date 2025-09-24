# Printo - Easy One-Stop Printing

A modern, responsive web application for a printing service company built with React and Vite.

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Interactive Navigation**: Header, navbar, and category navigation
- **Product Showcase**: Banner slider, popular categories, and best sellers
- **Modal System**: Login, help center, cart, business solutions, and product detail modals
- **Store Locator**: Interactive store finder with map integration
- **Customer Testimonials**: Social proof and service features
- **Blog Section**: Content marketing integration
- **App Promotion**: Mobile app download promotion
- **Company Information**: About section and comprehensive footer

## Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.13
- **Icons**: SVG icons
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Printo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx & Header.css
│   ├── Navbar.jsx & Navbar.css
│   ├── CategoryNav.jsx & CategoryNav.css
│   ├── BannerSlider.jsx & BannerSlider.css
│   ├── PopularCategories.jsx & PopularCategories.css
│   ├── BestSellers.jsx & BestSellers.css
│   ├── ShopByBusinessNeeds.jsx & ShopByBusinessNeeds.css
│   ├── PhotobookSection.jsx & PhotobookSection.css
│   ├── CustomerTestimonials.jsx & CustomerTestimonials.css
│   ├── BlogSection.jsx & BlogSection.css
│   ├── StoresSection.jsx & StoresSection.css
│   ├── AppPromotion.jsx & AppPromotion.css
│   ├── CompanyIntro.jsx & CompanyIntro.css
│   └── Footer.jsx & Footer.css
├── modals/
│   ├── LoginModal.jsx & LoginModal.css
│   ├── HelpCenterModal.jsx & HelpCenterModal.css
│   ├── CartModal.jsx & CartModal.css
│   ├── BusinessSolutionsModal.jsx & BusinessSolutionsModal.css
│   ├── ProductPageModal.jsx & ProductPageModal.css
│   ├── ProductCategoryModal.jsx & ProductCategoryModal.css
│   ├── ProductDetailModal.jsx & ProductDetailModal.css
│   ├── StoreLocatorModal.jsx & StoreLocatorModal.css
│   └── TrackOrderModal.jsx & TrackOrderModal.css
├── assets/
│   └── Images/ (various product and category images)
├── App.jsx & App.css
├── main.jsx
└── index.css
```

## Deployment

### Deploy to Vercel

1. **Option 1: Vercel CLI**
```bash
npm install -g vercel
vercel
```

2. **Option 2: GitHub Integration**
   - Push your code to GitHub
   - Connect your GitHub repository to Vercel
   - Vercel will automatically deploy on every push

3. **Option 3: Manual Upload**
   - Run `npm run build`
   - Upload the `dist` folder to Vercel

### Environment Variables

No environment variables are required for this project.

## Features Overview

### Navigation System
- **Header**: Top strip with track order, store locator, sample kit, and business solutions
- **Navbar**: Logo, search bar, help center, login/signup, and cart
- **Category Navigation**: Horizontal scrollable product categories

### Interactive Components
- **Banner Slider**: Auto-changing image carousel with navigation dots
- **Product Modals**: Detailed product pages with customization options
- **Store Locator**: Interactive map with store listings and filters
- **Login System**: Multiple login options (Google, OTP, password)

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly interactions
- Optimized images and layouts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software. All rights reserved.

## Support

For support and questions, please contact the development team.