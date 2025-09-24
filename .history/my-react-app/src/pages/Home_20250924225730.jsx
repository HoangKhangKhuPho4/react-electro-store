/**
 * HOME PAGE - DEMO CHILDREN
 *
 * Demo cách React tự động điền children vào MainLayout
 */

import Banner from "../components/Banner";
import OurProducts from "../components/OurProducts";
import Promo from "../components/Promo";

const Home = () => {
  console.log(
    "🏠 Home.jsx: TRƯỚC KHI RENDER - Chuẩn bị truyền children cho MainLayout"
  );
  console.log("🏠 Home.jsx: Children sẽ là Banner + Features + DemoSection");

  return (
    <div className="home-page">
      {/* Component 1: Banner */}
      <Banner />

      {/* Promo section (replaces Features) */}
      <Promo />

      {/* Our Products section */}
      <OurProducts />
      {/* Component 3: Inline demo section */}

      {/* Component 4: Another inline demo */}
      <div
        style={{
          background: "#6f42c1",
          color: "white",
          padding: "20px",
          textAlign: "center",
          margin: "20px 0",
          borderRadius: "10px",
        }}
      >
        <h3>🎯 TẤT CẢ CHÚNG TÔI ĐỀU LÀ CHILDREN!</h3>
        <p>React sẽ lấy Banner + Features + Section này + Section kia</p>
        <p>Và tự động nhét vào chỗ {"{children}"} trong MainLayout</p>
      </div>
    </div>
  );
};

export default Home;
