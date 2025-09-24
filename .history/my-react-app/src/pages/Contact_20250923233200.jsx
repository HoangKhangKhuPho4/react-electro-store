// ===== CÁCH LÀM CỦA BẠN: Import component vào từng trang =====

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <Navigation />
      
      <div className="contact-content">
        <h1>Contact Us</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
