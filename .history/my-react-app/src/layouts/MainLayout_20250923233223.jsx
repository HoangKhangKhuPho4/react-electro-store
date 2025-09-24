// MainLayout.jsx - ĐỊNH NGHĨA 1 LẦN
import Header from '../components/Header';
import Navigation from '../components/Navigation'; 
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />        // ← Chỉ viết 1 lần
      <Navigation />    // ← Chỉ viết 1 lần
      {children}        // ← Nội dung động
      <Footer />        // ← Chỉ viết 1 lần
    </div>
  );
};

export default MainLayout;
