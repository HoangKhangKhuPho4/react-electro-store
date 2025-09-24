import Banner from "../components/Banner";
import Features from "../components/Features";
import Promo from "../components/Promo";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />
      <Features />
      <Promo />
    </div>
  );
};

export default Home;