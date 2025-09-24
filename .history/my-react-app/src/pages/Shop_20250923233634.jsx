// ===== DEVELOPER B: Làm Shop page =====  
// (Anh ta vội quá, quên import Navigation và Footer)

import Header from "../components/Header";    // ← Import đúng

const Shop = () => {
  return (
    <div className="shop-page">
      <Header />        {/* ← Component đúng */}
      {/* ← THIẾU Navigation! Developer quên */}
      
      <div className="shop-content">
        <h1>Shop Page</h1>
        <div className="products-grid">
          <div className="product-card">Product 1</div>
          <div className="product-card">Product 2</div>
          <div className="product-card">Product 3</div>
        </div>
      </div>
      
      {/* ← THIẾU Footer! Developer quên */}
    </div>
  );
};

export default Shop;
