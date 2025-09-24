import { useState } from 'react';
import useProductsFilter from '../../hooks/useProductsFilter';
import './OurProducts.css';

const OurProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Apple iPad Mini G2356',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/200/200',
      badge: 'New',
      badgeType: 'new',
      featured: true,
      topSelling: false
    },
    {
      id: 2,
      name: 'Canon EOS 90D Camera',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/200/200',
      badge: 'Sale',
      badgeType: 'sale',
      featured: false,
      topSelling: true
    },
    {
      id: 3,
      name: 'Canon Camera Lens 24-70mm',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/200/200',
      badge: null,
      badgeType: null,
      featured: true,
      topSelling: true
    },
    {
      id: 4,
      name: 'Apple AirPods Pro',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/200/200',
      badge: 'New',
      badgeType: 'new',
      featured: false,
      topSelling: false
    },
    {
      id: 5,
      name: 'Polaroid Instant Camera',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/200/200',
      badge: 'Sale',
      badgeType: 'sale',
      featured: true,
      topSelling: false
    },
    {
      id: 6,
      name: 'Sony WH-1000XM4 Headphones',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/200/200',
      badge: null,
      badgeType: null,
      featured: false,
      topSelling: true
    },
    {
      id: 7,
      name: 'MacBook Pro 14-inch',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/200/200',
      badge: 'New',
      badgeType: 'new',
      featured: true,
      topSelling: true
    },
    {
      id: 8,
      name: 'iPhone 15 Pro Max',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/200/200',
      badge: 'Sale',
      badgeType: 'sale',
      featured: false,
      topSelling: true
    }
  ];

  const { activeFilter, setActiveFilter, filteredProducts, filters } = useProductsFilter(products);

  const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        {product.badge && (
          <div className={`product-badge ${product.badgeType}`}>
            {product.badge}
          </div>
        )}
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <div className="product-brand">{product.brand}</div>
          <h3 className="product-name">{product.name}</h3>
          <div className="product-price">
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            <span className="sale-price">${product.salePrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="our-products">
      <div className="container">
        <div className="products-header">
          <h2 className="section-title">Our Products</h2>
          <div className="filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;