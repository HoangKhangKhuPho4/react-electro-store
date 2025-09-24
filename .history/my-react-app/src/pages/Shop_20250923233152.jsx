// ===== CÁCH LÀM CỦA BẠN: Import component vào từng trang =====

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Shop = () => {
  return (
    <div className="shop-page">
      <Header />
      <Navigation />
      
      <div className="shop-content">
        <h1>Shop Page</h1>
        <div className="products-grid">
          {/* Products here */}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;
