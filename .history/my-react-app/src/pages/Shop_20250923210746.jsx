const Shop = () => {
  return (
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
  );
};

export default Shop;