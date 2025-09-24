// pages/Shop.jsx - Page with backend integration
import { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Shop = () => {
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    sortBy: 'name',
    page: 1,
    limit: 12
  });
  
  const { products, loading, error, refetch } = useProducts(filters);
  
  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters,
      page: 1 // Reset to first page when filters change
    }));
  };
  
  const handleLoadMore = () => {
    setFilters(prev => ({
      ...prev,
      page: prev.page + 1
    }));
  };
  
  if (loading && filters.page === 1) {
    return <LoadingSpinner />;
  }
  
  if (error) {
    return (
      <ErrorMessage 
        message={error} 
        onRetry={refetch}
      />
    );
  }
  
  return (
    <div className="shop-page">
      <div className="shop-container">
        <FilterSidebar 
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        
        <div className="shop-content">
          <div className="products-grid">
            {products.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
              />
            ))}
          </div>
          
          {loading && filters.page > 1 && (
            <LoadingSpinner />
          )}
          
          <button 
            onClick={handleLoadMore}
            disabled={loading}
            className="load-more-btn"
          >
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;