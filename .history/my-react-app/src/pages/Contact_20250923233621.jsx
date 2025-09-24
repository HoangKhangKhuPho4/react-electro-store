// ===== DEVELOPER C: Làm Contact page =====
// (Anh ta nghĩ Navigation quan trọng hơn nên để trước Header)

import Navigation from "../components/Navigation";  // ← Import đúng
import Header from "../components/Header";          // ← Import đúng

const Contact = () => {
  return (
    <div className="contact-page">
      <Navigation />    {/* ← SAI THỨ TỰ: Navigation trước Header */}
      <Header />        {/* ← Component đúng, nhưng vị trí sai */}
      
      <div className="contact-content">
        <h1>Contact Us</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
      
      {/* ← QUÊN Footer! */}
    </div>
  );
};

export default Contact;
