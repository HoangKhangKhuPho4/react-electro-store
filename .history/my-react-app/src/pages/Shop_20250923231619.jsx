// TRƯỚC: Shop KHÔNG có Header, Navigation, Footer
// SAU: Shop TỰ ĐỘNG có Header, Navigation, Footer nhờ Layout!

import { MainLayout } from "../layouts";

const Shop = () => {
  return (
    <MainLayout>
      {/* CHỈ CÒN CONTENT RIÊNG CỦA TRANG SHOP */}
      <div className="page-container">
        <h1>Shop</h1>
        <p>Browse our complete product catalog.</p>
        <div className="shop-content">
          <h2>Product Categories</h2>
          <div className="categories-grid">
            <div className="category-card">Electronics</div>
            <div className="category-card">Computers</div>
            <div className="category-card">Smartphones</div>
            <div className="category-card">Cameras</div>
          </div>
        </div>
      </div>
      {/* Header, Navigation, Footer TỰ ĐỘNG CÓ RỒI! */}
    </MainLayout>
  );
};

export default Shop;