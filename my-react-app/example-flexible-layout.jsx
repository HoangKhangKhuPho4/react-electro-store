// ✅ CÁCH ĐÚNG: Flexible Layout (Layout linh hoạt)
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const FlexibleLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        {/* ✅ Dynamic - Mỗi page có content khác nhau */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Usage examples:

// Home.jsx
// <FlexibleLayout>
//   <Banner />      {/* children = Banner + Features */}
//   <Features />
// </FlexibleLayout>

// Shop.jsx
// <FlexibleLayout>
//   <ProductList /> {/* children = ProductList */}
// </FlexibleLayout>

// Contact.jsx
// <FlexibleLayout>
//   <ContactForm /> {/* children = ContactForm */}
// </FlexibleLayout>

// ✅ MỖI page có content phù hợp!

export default FlexibleLayout;
