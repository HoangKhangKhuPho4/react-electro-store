/**
 * HOME PAGE - DEMO CHILDREN
 *
 * Demo cách React tự động điền children vào MainLayout
 */

import Banner from "../components/Banner";
import Features from "../components/Features";
import { MainLayout } from "../layouts";

const Home = () => {
  console.log(
    "🏠 Home.jsx: TRƯỚC KHI RENDER - Chuẩn bị truyền children cho MainLayout"
  );
  console.log("🏠 Home.jsx: Children sẽ là Banner + Features + DemoSection");

  return (
    <MainLayout>
      {/* 
        🎯 MAGIC DEMO:
        Tất cả những gì bên trong <MainLayout> tags
        sẽ tự động trở thành {children} props
      */}

      {/* Component 1: Banner */}
      <Banner />

      {/* Component 2: Features */}
      <Features />

      {/* Component 3: Inline demo section */}
      <div
        style={{
          background: "#28a745",
          color: "white",
          padding: "30px 20px",
          textAlign: "center",
          margin: "20px 0",
          borderRadius: "10px",
        }}
      >
        <h2>🎉 DEMO SECTION (Inline)</h2>
        <p>Tôi là một div được viết trực tiếp trong Home.jsx</p>
        <p>React cũng tự động đưa tôi vào {"{children}"} luôn!</p>
        <p>
          <strong>Current time:</strong> {new Date().toLocaleTimeString()}
        </p>
      </div>

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
        <h3>� TẤT CẢ CHÚNG TÔI ĐỀU LÀ CHILDREN!</h3>
        <p>React sẽ lấy Banner + Features + Section này + Section kia</p>
        <p>Và tự động nhét vào chỗ {"{children}"} trong MainLayout</p>
      </div>
    </MainLayout>
  );
};

export default Home;
