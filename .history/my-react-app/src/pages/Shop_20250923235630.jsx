/**
 * SHOP PAGE
 * 
 * Product catalog với:
 * - Category filters
 * - Product grid
 * - Pagination
 */

import { MainLayout } from '../layouts';

const Shop = () => {
  console.log('🛒 Shop.jsx: Chuẩn bị truyền children cho MainLayout');

  return (
    <MainLayout>
      {/* 
        🎯 SHOP có children KHÁC với Home:
        - Không có Banner
        - Không có Features  
        - Có ProductFilters + ProductGrid
      */}
      
      {/* Component 1: Product Filters */}
      <div style={{ 
        background: '#007bff', 
        padding: '40px 20px', 
        color: 'white', 
        textAlign: 'center',
        marginBottom: '30px'
      }}>
        <h1>🔍 PRODUCT FILTERS</h1>
        <p>Category filters, price range, brands sẽ ở đây</p>
      </div>

      {/* Component 2: Product Grid */}
      <div style={{ 
        background: 'white', 
        padding: '60px 20px', 
        textAlign: 'center',
        marginBottom: '30px',
        border: '1px solid #ddd'
      }}>
        <h2>📋 PRODUCT GRID</h2>
        <p>Danh sách sản phẩm dạng grid sẽ ở đây</p>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          marginTop: '20px'
        }}>
          {[1,2,3,4,5,6].map(i => (
            <div key={i} style={{ 
              padding: '20px', 
              border: '1px solid #ddd', 
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              Product {i}
            </div>
          ))}
        </div>
      </div>

      {/* Component 3: Pagination */}
      <div style={{ 
        background: '#6c757d', 
        padding: '20px', 
        color: 'white', 
        textAlign: 'center'
      }}>
        <h3>📄 PAGINATION</h3>
        <p>« Previous | 1 | 2 | 3 | Next »</p>
      </div>
    </MainLayout>
  );
};

export default Shop;
