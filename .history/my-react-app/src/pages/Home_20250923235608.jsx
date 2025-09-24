/**
 * HOME PAGE
 * 
 * Main landing page với:
 * - Banner carousel + Product promotion  
 * - Features section
 * - Product showcases
 */

import { MainLayout } from '../layouts';

const Home = () => {
  // 🎯 Những components này sẽ trở thành "children" của MainLayout
  const HomeContent = (
    <>
      {/* Component 1: Banner */}
      <div style={{ 
        background: 'linear-gradient(135deg, #ff6b35, #f7931e)', 
        padding: '60px 20px', 
        color: 'white', 
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h1>🎯 BANNER COMPONENT</h1>
        <p>Carousel + Product Promotion sẽ ở đây</p>
      </div>

      {/* Component 2: Features */}
      <div style={{ 
        background: '#f8f9fa', 
        padding: '60px 20px', 
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h2>⭐ FEATURES COMPONENT</h2>
        <p>6 service features sẽ ở đây</p>
      </div>

      {/* Component 3: OurProducts */}
      <div style={{ 
        background: 'white', 
        padding: '60px 20px', 
        textAlign: 'center',
        marginBottom: '40px',
        border: '1px solid #ddd'
      }}>
        <h2>🛍️ OUR PRODUCTS COMPONENT</h2>
        <p>Product grid với filters sẽ ở đây</p>
      </div>

      {/* Component 4: AllProducts */}
      <div style={{ 
        background: '#e9ecef', 
        padding: '60px 20px', 
        textAlign: 'center'
      }}>
        <h2>📦 ALL PRODUCTS COMPONENT</h2>
        <p>Product slider sẽ ở đây</p>
      </div>
    </>
  );

  console.log('🏠 Home.jsx: Chuẩn bị truyền children cho MainLayout');

  return (
    <MainLayout>
      {/* 
        🎯 TẤT CẢ nội dung bên trong MainLayout tags 
        sẽ trở thành "children" props
      */}
      {HomeContent}
    </MainLayout>
  );
};

export default Home;
