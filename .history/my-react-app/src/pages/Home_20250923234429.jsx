/**
 * HOME PAGE
 * 
 * Main landing page với:
 * - Banner carousel + Product promotion  
 * - Features section
 * - Product showcases
 */

import { MainLayout } from '../layouts';
// Import page-specific components
// TODO: Tạo các components này
// import Banner from '../components/Banner';
// import Features from '../components/Features';
// import Promo from '../components/Promo';
// import OurProducts from '../components/OurProducts';
// import AllProducts from '../components/AllProducts';

const Home = () => {
  return (
    <MainLayout>
      <div className="home-page">
        {/* TODO: Uncomment khi components đã có */}
        {/* <Banner /> */}
        {/* <Features /> */}
        {/* <Promo /> */}
        {/* <OurProducts /> */}
        {/* <AllProducts /> */}
        
        {/* Temporary content */}
        <div style={{ padding: '40px 20px', textAlign: 'center' }}>
          <h1>Welcome to Electro Store</h1>
          <p>Home page content will be here...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
