import './Footer.css';

const Footer = () => {
  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Address",
      content: "123 Street New York USA"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Mail Us",
      content: "info@example.com"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Telephone",
      content: "(+012) 3456 7890"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: "Yoursite@ex.com",
      content: "(+012) 3456 7890"
    }
  ];

  const footerLinks = {
    newsletter: {
      title: "Newsletter",
      description: "Dolor amet sit justo amet elit clita ipsum elit est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.",
      hasNewsletter: true
    },
    customerService: {
      title: "Customer Service",
      links: [
        "Contact Us",
        "Returns",
        "Order History",
        "Site Map",
        "Testimonials",
        "My Account",
        "Unsubscribe Notification"
      ]
    },
    information: {
      title: "Information",
      links: [
        "About Us",
        "Delivery information",
        "Privacy Policy",
        "Terms & Conditions",
        "Warranty",
        "FAQ",
        "Seller Login"
      ]
    },
    extras: {
      title: "Extras",
      links: [
        "Brands",
        "Gift Vouchers",
        "Affiliates",
        "Wishlist",
        "Order History",
        "Track Your Order",
        "Track Your Order"
      ]
    }
  };

  return (
    <footer className="footer">
      {/* Contact Info Section */}
      <div className="footer-top">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  {item.icon}
                </div>
                <div className="contact-details">
                  <h3 className="contact-title">{item.title}</h3>
                  <p className="contact-content">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Newsletter */}
            <div className="footer-column">
              <h3 className="footer-heading">{footerLinks.newsletter.title}</h3>
              <p className="footer-description">{footerLinks.newsletter.description}</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">SignUp</button>
              </div>
            </div>

            {/* Customer Service */}
            <div className="footer-column">
              <h3 className="footer-heading">{footerLinks.customerService.title}</h3>
              <ul className="footer-links">
                {footerLinks.customerService.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">
                      <span className="link-arrow">›</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information */}
            <div className="footer-column">
              <h3 className="footer-heading">{footerLinks.information.title}</h3>
              <ul className="footer-links">
                {footerLinks.information.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">
                      <span className="link-arrow">›</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Extras */}
            <div className="footer-column">
              <h3 className="footer-heading">{footerLinks.extras.title}</h3>
              <ul className="footer-links">
                {footerLinks.extras.links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">
                      <span className="link-arrow">›</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <span className="copyright-icon">©</span>
              Your Site Name, All right reserved.
            </div>
            <div className="credits">
              Designed By HTML Codex. Distributed By ThemeWagon
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;