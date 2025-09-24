import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './MainLayout.css';

/**
 * MainLayout - Layout chính cho toàn bộ website
 * 
 * Structure cố định:
 * 1. Header (Logo, Search, User Actions)
 * 2. Navigation (Menu categories, Main nav)
 * 3. Main Content (Dynamic - từ props children)
 * 4. Footer (Contact info, Links, Newsletter)
 * 
 * Usage:
 * <MainLayout>
 *   <YourPageContent />
 * </MainLayout>
 */
const MainLayout = ({ children }) => {
  // 🔍 ENHANCED DEBUG: Xem children từ page nào được truyền vào
  console.log('');
  console.log('🚀 ===== MAINLAYOUT RECEIVED CHILDREN =====');
  console.log('📦 Children object:', children);
  console.log('📝 Children type:', typeof children);
  console.log('📊 Is array?', Array.isArray(children));
  
  if (Array.isArray(children)) {
    console.log('📋 Children count:', children.length);
    children.forEach((child, index) => {
      console.log(`   ${index + 1}. ${child?.type?.name || 'Anonymous component'}`);
    });
  } else if (children?.type) {
    console.log('📋 Single child:', children.type.name || 'Anonymous component');
  }
  
  console.log('✨ React sẽ TỰ ĐỘNG render những children này vào <main> tag');
  console.log('🔄 ============================================');
  console.log('');

  return (
    <div className="main-layout">
      {/* ===== HEADER: Logo, Search, User Actions ===== */}
      <Header />
      
      {/* ===== NAVIGATION: Categories, Main Menu ===== */}
      <Navigation />
      
      {/* ===== MAIN CONTENT: Dynamic content từ children ===== */}
      <main className="main-content">
        {/* 
          🎯 MAGIC HAPPENS HERE:
          React sẽ TỰ ĐỘNG thay thế {children} bằng:
          
          📍 Khi ở Home page (/):
          - <Banner /> component  
          - <Features /> component
          - <div> Demo Section </div>
          - <div> Another Demo Section </div>
          
          📍 Khi ở Shop page (/shop):
          - <div> Product Filters </div>
          - <ProductList /> component
          - <div> Pagination </div>
          - <div> Shop Info </div>
          
          📍 HOÀN TOÀN TỰ ĐỘNG - Bạn không cần làm gì!
        */}
        {children}
      </main>
      
      {/* ===== FOOTER: Contact, Links, Newsletter ===== */}
      <Footer />
    </div>
  );
};

export default MainLayout;
