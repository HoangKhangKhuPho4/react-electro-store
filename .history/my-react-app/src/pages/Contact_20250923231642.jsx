import { MainLayout } from "../layouts";

const Contact = () => {
  return (
    <MainLayout>
      <div className="page-container">
        <h1>Contact Us</h1>
        <p>Get in touch with our customer service team.</p>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Phone:</strong> +0123 456 7890</p>
            <p><strong>Email:</strong> info@electrostore.com</p>
            <p><strong>Address:</strong> 123 Electronic Street, Tech City</p>
          </div>
          <div className="contact-form">
            <h3>Send us a message</h3>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;