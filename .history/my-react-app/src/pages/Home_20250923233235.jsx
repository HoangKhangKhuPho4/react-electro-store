// ===== SỬ DỤNG LAYOUT: Clean và an toàn =====

import MainLayout from "../layouts/MainLayout";
import Banner from "../components/Banner";
import Features from "../components/Features";

const Home = () => {
  return (
    <MainLayout>
      {/* CHỈ TẬP TRUNG VÀO NỘI DUNG RIÊNG */}
      <Banner />
      <Features />
      {/* Header, Navigation, Footer TỰ ĐỘNG CÓ! */}
    </MainLayout>
  );
};

export default Home;
