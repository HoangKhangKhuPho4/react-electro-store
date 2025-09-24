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
    </div>
  );
};

export default Home;
