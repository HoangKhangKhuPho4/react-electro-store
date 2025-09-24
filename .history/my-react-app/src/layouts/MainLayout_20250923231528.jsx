// MainLayout.jsx - Layout chính cho toàn bộ website
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      {/* ===== PHẦN CHUNG - XUẤT HIỆN Ở MỌI TRANG ===== */}
      <Header />
      <Navigation />
      
      {/* ===== PHẦN ĐỘNG - THAY ĐỔI THEO TỪNG TRANG ===== */}
      <main className="main-content">
        {children}
      </main>
      
      {/* ===== PHẦN CHUNG - XUẤT HIỆN Ở MỌI TRANG ===== */}
      <Footer />
    </div>
  );
};

export default MainLayout;