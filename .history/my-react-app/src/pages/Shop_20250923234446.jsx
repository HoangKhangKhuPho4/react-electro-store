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
  return (
    <MainLayout>
      <div className="shop-page">
        <div className="container" style={{ padding: '40px 20px' }}>
          <h1>Shop</h1>
          <p>Browse our complete product catalog.</p>
          
          <div className="shop-content">
            <h2>Product Categories</h2>
            <div className="categories-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '20px',
              marginTop: '20px'
            }}>
              <div className="category-card" style={{ 
                padding: '20px', 
                border: '1px solid #ddd', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                Electronics
              </div>
              <div className="category-card" style={{ 
                padding: '20px', 
                border: '1px solid #ddd', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                Computers
              </div>
              <div className="category-card" style={{ 
                padding: '20px', 
                border: '1px solid #ddd', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                Smartphones
              </div>
              <div className="category-card" style={{ 
                padding: '20px', 
                border: '1px solid #ddd', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                Cameras
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Shop;
