import Carousel from "./Carousel";
import ProductPromotion from "./ProductPromotion";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        {/* Left Side - Carousel (80%) */}
        <div className="banner-carousel">
          <Carousel />
        </div>

        {/* Right Side - Product Promotion (20%) */}
        <div className="banner-promotion">
          <ProductPromotion />
        </div>
      </div>
    </section>
  );
};

export default Banner;