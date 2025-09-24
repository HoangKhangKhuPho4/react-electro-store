import { useState } from 'react';
import './AllProducts.css';

const AllProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Apple iPad Mini G2356',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/150/150'
    },
    {
      id: 2,
      name: 'Apple iPad Mini G2356',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/150/150'
    },
    {
      id: 3,
      name: 'Apple iPad Mini G2356',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/150/150'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(products.length / 3)) % Math.ceil(products.length / 3));
  };

  const ProductCard = ({ product }) => {
    return (
      <div className="all-product-card">
        <div className="all-product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="all-product-info">
          <div className="all-product-brand">{product.brand}</div>
          <h3 className="all-product-name">{product.name}</h3>
          <div className="all-product-price">
            <span className="all-original-price">${product.originalPrice.toFixed(2)}</span>
            <span className="all-sale-price">${product.salePrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="all-products">
      <div className="container">
        <div className="all-products-header">
          <div className="header-text">
            <span className="products-label">Products</span>
            <h2 className="all-products-title">All Product Items</h2>
          </div>
          <div className="navigation-controls">
            <button className="nav-btn prev-btn" onClick={prevSlide}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="nav-btn next-btn" onClick={nextSlide}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="all-products-slider">
          <div 
            className="all-products-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;