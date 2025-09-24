// ===== CÁCH LÀM CỦA BẠN: Import component vào từng trang =====

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Features from "../components/Features";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Navigation />
      <Banner />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
