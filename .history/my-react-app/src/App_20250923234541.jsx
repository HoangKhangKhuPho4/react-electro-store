/**
 * MAIN APP COMPONENT
 * 
 * Router setup cho toàn bộ application
 * TẤT CẢ pages sẽ tự động có Header, Navigation, Footer nhờ MainLayout
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
