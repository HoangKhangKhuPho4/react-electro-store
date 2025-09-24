import "./Features.css";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path 
            d="M20 2L22 8L20 14L18 8L20 2Z" 
            fill="#ff6b35"
          />
          <circle cx="20" cy="20" r="8" stroke="#ff6b35" strokeWidth="2" fill="none"/>
          <path 
            d="M20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28Z" 
            stroke="#ff6b35" 
            strokeWidth="2"
          />
        </svg>
      ),
      title: "FREE RETURN",
      description: "30 days money back guarantee!"
    },
    {
      id: 2,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path 
            d="M35 20L30 15V18H10V22H30V25L35 20Z" 
            fill="#ff6b35"
          />
          <path 
            d="M5 8L10 13V10H30V6H10V3L5 8Z" 
            fill="#ff6b35"
          />
          <path 
            d="M5 32L10 27V30H30V34H10V37L5 32Z" 
            fill="#ff6b35"
          />
        </svg>
      ),
      title: "FREE SHIPPING",
      description: "Free shipping on all order"
    },
    {
      id: 3,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#ff6b35" strokeWidth="2"/>
          <circle cx="20" cy="20" r="6" fill="#ff6b35"/>
          <path d="M20 8V2" stroke="#ff6b35" strokeWidth="2"/>
          <path d="M20 38V32" stroke="#ff6b35" strokeWidth="2"/>
          <path d="M32 20H38" stroke="#ff6b35" strokeWidth="2"/>
          <path d="M2 20H8" stroke="#ff6b35" strokeWidth="2"/>
        </svg>
      ),
      title: "SUPPORT 24/7",
      description: "We support online 24 hrs a day"
    },
    {
      id: 4,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="5" y="12" width="30" height="20" rx="2" stroke="#ff6b35" strokeWidth="2"/>
          <path d="M25 12V8C25 5.79086 23.2091 4 21 4H19C16.7909 4 15 5.79086 15 8V12" stroke="#ff6b35" strokeWidth="2"/>
          <circle cx="20" cy="22" r="3" fill="#ff6b35"/>
          <path d="M20 25V27" stroke="#ff6b35" strokeWidth="2"/>
        </svg>
      ),
      title: "RECEIVE GIFT CARD",
      description: "Recieve gift all over oder $50"
    },
    {
      id: 5,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path 
            d="M12 22L18 28L28 12" 
            stroke="#ff6b35" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <circle cx="20" cy="20" r="18" stroke="#ff6b35" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: "SECURE PAYMENT",
      description: "We Value Your Security"
    },
    {
      id: 6,
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path 
            d="M20 2L25 15H38L28 23L33 36L20 28L7 36L12 23L2 15H15L20 2Z" 
            stroke="#ff6b35" 
            strokeWidth="2" 
            fill="none"
          />
          <circle cx="20" cy="18" r="4" fill="#ff6b35"/>
        </svg>
      ),
      title: "ONLINE SERVICE",
      description: "Free return products within 30 days"
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-item">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;