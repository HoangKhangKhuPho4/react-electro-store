// MainLayout.jsx - Layout chính cho toàn bộ website
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      {/* Phần CHUNG xuất hiện ở mọi trang */}
      <Header />
      <Navigation />
      
      {/* Phần ĐỘNG thay đổi theo từng trang */}
      <main className="main-content">
        {children}
      </main>
      
      {/* Phần CHUNG xuất hiện ở mọi trang */}
      <Footer />
    </div>
  );
};

export default MainLayout;