// Example of organized Home.jsx
import Banner from "../components/Banner";
import Features from "../components/Features";
import Promo from "../components/Promo";

// Page-specific sections
import HeroSection from "../sections/Home/HeroSection";
import ProductGrid from "../sections/Home/ProductGrid";
import CategoryShowcase from "../sections/Home/CategoryShowcase";
import Newsletter from "../sections/Home/Newsletter";

const Home = () => {
  return (
    <div className="home-page">
      {/* Shared Components */}
      <Banner />
      <Features />
      <Promo />
      
      {/* Home-specific Content */}
      <HeroSection />
      <ProductGrid />
      <CategoryShowcase />
      <Newsletter />
    </div>
  );
};

export default Home;