import { useState } from 'react';
import useProductsFilter from '../../hooks/useProductsFilter';
import './OurProducts.css';

const OurProducts = () => {
  const [activeFilter, setActiveFilter] = useState('All Products');

  const filters = [
    'All Products',
    'New Arrivals', 
    'Featured',
    'Top Selling'
  ];

  const products = [
    {
      id: 1,
      name: 'Apple iPad Mini G2356',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/200/200',
      badge: 'New',
      badgeType: 'new'
    },
    {
      id: 2,
      name: 'Apple iPad Mini G2356',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/200/200',
      badge: 'Sale',
      badgeType: 'sale'
    },
    {
      id: 3,
      name: 'Apple iPad Mini G2356',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/200/200',
      badge: null,
      badgeType: null
    },
    {
      id: 4,
      name: 'Apple iPad Mini G2356',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/200/200',
      badge: 'New',
      badgeType: 'new'
    },
    {
      id: 5,
      name: 'Apple iPad Mini G2356',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/200/200',
      badge: 'Sale',
      badgeType: 'sale'
    },
    {
      id: 6,
      name: 'Apple iPad Mini G2356',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/200/200',
      badge: null,
      badgeType: null
    },
    {
      id: 7,
      name: 'Apple iPad Mini G2356',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/200/200',
      badge: 'New',
      badgeType: 'new'
    },
    {
      id: 8,
      name: 'Apple iPad Mini G2356',
      brand: 'SmartPhone',
      originalPrice: 1250.00,
      salePrice: 1050.00,
      image: '/api/placeholder/200/200',
      badge: 'Sale',
      badgeType: 'sale'
    }
  ];

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