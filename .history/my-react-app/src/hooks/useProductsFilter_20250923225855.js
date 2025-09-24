import { useState, useEffect } from 'react';

const useProductsFilter = (initialProducts) => {
  const [activeFilter, setActiveFilter] = useState('All Products');
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  const filters = [
    'All Products',
    'New Arrivals', 
    'Featured',
    'Top Selling'
  ];

  useEffect(() => {
    let filtered = initialProducts;

    switch (activeFilter) {
      case 'New Arrivals':
        filtered = initialProducts.filter(product => product.badge === 'New');
        break;
      case 'Featured':
        filtered = initialProducts.filter(product => product.featured === true);
        break;
      case 'Top Selling':
        filtered = initialProducts.filter(product => product.topSelling === true);
        break;
      case 'All Products':
      default:
        filtered = initialProducts;
        break;
    }

    setFilteredProducts(filtered);
  }, [activeFilter, initialProducts]);

  return {
    activeFilter,
    setActiveFilter,
    filteredProducts,
    filters
  };
};

export default useProductsFilter;