// ===== DEVELOPER D: Làm About page =====
// (Anh ta copy từ tutorial cũ, dùng thứ tự khác)

import Footer from "../components/Footer";      // ← Import đúng nhưng thứ tự khác
import Header from "../components/Header";      // ← Import đúng nhưng thứ tự khác  
import Navigation from "../components/Navigation"; // ← Import đúng nhưng thứ tự khác

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <div className="about-content">
        <h1>About Us</h1>
        <p>We are the best electronics store...</p>
      </div>
      <Navigation />    {/* ← SAI VỊ TRÍ: Navigation ở giữa thay vì đầu trang */}
      <Footer />
    </div>
  );
};

export default About;
