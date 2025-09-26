/**
 * MAIN APP COMPONENT
 *
 * Router setup cho toàn bộ application
 * TẤT CẢ pages sẽ tự động có Header, Navigation, Footer nhờ MainLayout
 */

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

// Layout Components
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

// Pages
import ProductDetail from "./components/Product-Details";
import About from "./pages/About";
import ShoppingCart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { store } from "./redux/store";

// RTK Query Demo
import { Provider } from "react-redux";
import AppSliceDemo from "./components/AppSliceDemo";
import RTKQueryDemo from "./components/RTKQueryDemo";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          {/* Header xuất hiện trên tất cả các trang */}
          <Header />

          {/* Navigation nằm ngay dưới Header */}
          <Navigation />

          {/* Main content area */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />

              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/rtk-demo" element={<RTKQueryDemo />} />
              <Route path="/app-slice-demo" element={<AppSliceDemo />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
