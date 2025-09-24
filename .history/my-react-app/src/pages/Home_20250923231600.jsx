// TRƯỚC KHI DÙNG LAYOUT (cách cũ - lặp code)
// import Header from "../components/Header";
// import Navigation from "../components/Navigation"; 
// import Footer from "../components/Footer";

// SAU KHI DÙNG LAYOUT (cách mới - clean)
import { MainLayout } from "../layouts";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Promo from "../components/Promo";
import OurProducts from "../components/OurProducts";
import AllProducts from "../components/AllProducts";

const Home = () => {
  return (
    <MainLayout>
      {/* CHỈ CÒN CONTENT RIÊNG CỦA TRANG HOME */}
      <Banner />
      <Features />
      <Promo />
      <OurProducts />
      <AllProducts />
      {/* Header, Navigation, Footer TỰ ĐỘNG CÓ RỒI! */}
    </MainLayout>
  );
};

export default Home;