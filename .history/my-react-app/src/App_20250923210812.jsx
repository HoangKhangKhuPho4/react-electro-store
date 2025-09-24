import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/single" element={<div className="page-container"><h1>Single Page</h1><p>Product details page coming soon...</p></div>} />
          <Route path="/pages/*" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
