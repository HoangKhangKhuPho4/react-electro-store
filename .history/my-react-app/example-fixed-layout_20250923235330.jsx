// ❌ CÁCH SAI: Fixed Layout (Layout cố định)
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Features from '../components/Features';
import Footer from '../components/Footer';

const FixedLayout = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        {/* ❌ Cố định - TẤT CẢ pages đều có Banner + Features */}
        <Banner />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

// Vấn đề: Shop page cũng sẽ có Banner + Features
// Contact page cũng sẽ có Banner + Features
// ❌ KHÔNG phù hợp!

export default FixedLayout;