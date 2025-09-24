/**
 * CONTACT PAGE
 * 
 * Contact information và form:
 * - Company contact details
 * - Contact form
 * - Office location map
 */

import { MainLayout } from '../layouts';

const Contact = () => {
  return (
    <MainLayout>
      <div className="contact-page">
        <div className="container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h1>Contact Us</h1>
          <p>Get in touch with our customer service team.</p>
          
          <div className="contact-content" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '40px',
            marginTop: '30px'
          }}>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div style={{ marginTop: '20px' }}>
                <p><strong>Phone:</strong> +0123 456 7890</p>
                <p><strong>Email:</strong> info@electrostore.com</p>
                <p><strong>Address:</strong> 123 Electronic Street, Tech City</p>
                <p><strong>Hours:</strong> Mon-Fri 9AM-6PM</p>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Send us a message</h3>
              <form style={{ marginTop: '20px' }}>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    marginBottom: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    marginBottom: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
                <textarea 
                  placeholder="Your Message"
                  rows="5"
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    marginBottom: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    resize: 'vertical'
                  }}
                ></textarea>
                <button 
                  type="submit"
                  style={{
                    background: '#ff6b35',
                    color: 'white',
                    border: 'none',
                    padding: '12px 30px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
