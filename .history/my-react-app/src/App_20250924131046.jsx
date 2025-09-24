/**
 * MAIN APP COMPONENT
 *
 * Router setup cho toàn bộ application
 * TẤT CẢ pages sẽ tự động có Header, Navigation, Footer nhờ MainLayout
 */

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

// Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

// RTK Query Demo
import RTKQueryDemo from "./components/RTKQueryDemo";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/rtk-demo" element={<RTKQueryDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
