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
  // 🔍 DEBUG: Xem children từ page nào được truyền vào
  console.log('=== MainLayout Debug ===');
  console.log('Children received:', children);
  console.log('Children type:', typeof children);
  console.log('Children is array?', Array.isArray(children));
  console.log('========================');

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
          - Khi Home.jsx: children = <Banner /> + <Features /> + <OurProducts />
          - Khi Shop.jsx: children = <ProductList /> + <Pagination />
          - Khi Contact.jsx: children = <ContactForm />
        */}
        {children}
      </main>
      
      {/* ===== FOOTER: Contact, Links, Newsletter ===== */}
      <Footer />
    </div>
  );
};

export default MainLayout;
