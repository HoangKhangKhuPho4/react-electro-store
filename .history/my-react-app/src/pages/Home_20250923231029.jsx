import Banner from "../components/Banner";
import Features from "../components/Features";
import Promo from "../components/Promo";
import OurProducts from "../components/OurProducts";
import AllProducts from "../components/AllProducts";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <Features />
      <Promo />
      <OurProducts />
      <AllProducts />
    </div>
  );
};

export default Home;