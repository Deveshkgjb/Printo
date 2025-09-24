import Header from './Header'
import Navbar from './Navbar'
import CategoryNav from './CategoryNav'
import BestSellers from './BestSellers'
import BannerSlider from './BannerSlider'
import PopularCategories from './PopularCategories'
import ShopByBusinessNeeds from './ShopByBusinessNeeds'
import PhotobookSection from './PhotobookSection'
import CustomerTestimonials from './CustomerTestimonials'
import BlogSection from './BlogSection'
import StoresSection from './StoresSection'
import AppPromotion from './AppPromotion'
import CompanyIntro from './CompanyIntro'
import Footer from './Footer'
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navbar />
      <CategoryNav />
      <BannerSlider />
      <PopularCategories />
      <BestSellers />
      <ShopByBusinessNeeds />
      <PhotobookSection />
      <CustomerTestimonials />
      <BlogSection />
      <StoresSection />
      <AppPromotion />
      <CompanyIntro />
      <Footer />
    </div>
  )
}

export default App
