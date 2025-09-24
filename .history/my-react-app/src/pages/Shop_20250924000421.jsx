/**
 * SHOP PAGE - DEMO CHILDREN KHÁC
 * 
 * Demo cách React điền children KHÁC vào cùng MainLayout
 */

import { MainLayout } from '../layouts';
import ProductList from '../components/ProductList';

const Shop = () => {
  console.log('🛒 Shop.jsx: TRƯỚC KHI RENDER - Chuẩn bị truyền children KHÁC cho MainLayout');
  console.log('🛒 Shop.jsx: Children sẽ là ProductList + FilterSection (KHÁC với Home!)');

  return (
    <MainLayout>
      {/* 
        🎯 DEMO: CÙNG MainLayout nhưng children KHÁC!
        Shop có ProductList thay vì Banner + Features
      */}
      
      {/* Component 1: Product Filters (inline) */}
      <div style={{
        background: '#fd7e14',
        color: 'white',
        padding: '30px 20px',
        textAlign: 'center',
        margin: '20px 0',
        borderRadius: '10px'
      }}>
        <h2>🔍 PRODUCT FILTERS</h2>
        <p>Tôi là Filter section - CHỈ có ở Shop, KHÔNG có ở Home!</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '15px' }}>
          <button style={{ padding: '8px 16px', borderRadius: '5px', border: 'none' }}>Electronics</button>
          <button style={{ padding: '8px 16px', borderRadius: '5px', border: 'none' }}>Computers</button>
          <button style={{ padding: '8px 16px', borderRadius: '5px', border: 'none' }}>Phones</button>
        </div>
      </div>

      {/* Component 2: ProductList component */}
      <ProductList />

      {/* Component 3: Pagination (inline) */}
      <div style={{
        background: '#6c757d',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        margin: '20px 0',
        borderRadius: '10px'
      }}>
        <h3>� PAGINATION COMPONENT</h3>
        <p>Tôi cũng chỉ có ở Shop thôi!</p>
        <div style={{ marginTop: '10px' }}>
          <span style={{ margin: '0 10px', padding: '5px 10px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}>« Previous</span>
          <span style={{ margin: '0 10px', padding: '5px 10px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}>1</span>
          <span style={{ margin: '0 10px', padding: '5px 10px', background: 'white', color: '#6c757d', borderRadius: '3px' }}>2</span>
          <span style={{ margin: '0 10px', padding: '5px 10px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}>3</span>
          <span style={{ margin: '0 10px', padding: '5px 10px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px' }}>Next »</span>
        </div>
      </div>

      {/* Component 4: Shop info */}
      <div style={{
        background: '#dc3545',
        color: 'white',
        padding: '25px 20px',
        textAlign: 'center',
        margin: '20px 0',
        borderRadius: '10px'
      }}>
        <h3>� QUAN TRỌNG!</h3>
        <p>Chúng tôi (Filters + ProductList + Pagination + Shop Info)</p>
        <p>Sẽ thay thế (Banner + Features + Demo Sections) của Home</p>
        <p>Trong CÙNG VỊ TRÍ {'{children}'} của MainLayout!</p>
      </div>
    </MainLayout>
  );
};

export default Shop;
