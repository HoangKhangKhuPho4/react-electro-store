import "./Promo.css";

const Promo = () => {
  const promoItems = [
    {
      id: 1,
      title: "Find The Best Camera for You!",
      productName: "Smart Camera",
      discount: "40%",
      discountText: "Off",
      image: (
        <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
          {/* Camera Body */}
          <rect x="20" y="30" width="160" height="80" rx="8" fill="#2c3e50" stroke="#34495e" strokeWidth="2"/>
          
          {/* Camera Lens */}
          <circle cx="100" cy="70" r="25" fill="#34495e" stroke="#2c3e50" strokeWidth="2"/>
          <circle cx="100" cy="70" r="20" fill="#1a252f"/>
          <circle cx="100" cy="70" r="15" fill="#0f1419"/>
          <circle cx="100" cy="70" r="8" fill="#000"/>
          
          {/* Camera Details */}
          <rect x="140" y="40" width="15" height="8" rx="2" fill="#e74c3c"/>
          <rect x="30" y="40" width="20" height="6" rx="1" fill="#95a5a6"/>
          <rect x="30" y="50" width="15" height="4" rx="1" fill="#95a5a6"/>
          
          {/* Flash */}
          <circle cx="140" cy="50" r="4" fill="#f39c12"/>
          
          {/* Base/Stand */}
          <rect x="60" y="100" width="80" height="12" rx="6" fill="#7f8c8d"/>
          <rect x="85" y="112" width="30" height="6" rx="3" fill="#95a5a6"/>
        </svg>
      ),
      backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      textColor: "#ffffff"
    },
    {
      id: 2,
      title: "Find The Best Whatches for You!",
      productName: "Smart Watch",
      discount: "20%",
      discountText: "Off",
      image: (
        <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
          {/* Watch Band */}
          <path d="M80 20 Q100 10 120 20 L120 30 Q100 25 80 30 Z" fill="#2c3e50"/>
          <path d="M80 90 Q100 100 120 90 L120 100 Q100 105 80 100 Z" fill="#2c3e50"/>
          
          {/* Watch Body */}
          <rect x="75" y="35" width="50" height="50" rx="12" fill="#34495e" stroke="#2c3e50" strokeWidth="2"/>
          
          {/* Watch Screen */}
          <rect x="80" y="40" width="40" height="40" rx="8" fill="#000"/>
          
          {/* Digital Display */}
          <rect x="85" y="45" width="30" height="12" rx="2" fill="#00ff41"/>
          <text x="100" y="54" textAnchor="middle" fill="#000" fontSize="8" fontWeight="bold">12:34</text>
          
          {/* Icons on screen */}
          <circle cx="90" cy="65" r="3" fill="#3498db"/>
          <rect x="100" y="62" width="6" height="6" rx="1" fill="#e74c3c"/>
          <polygon points="108,62 114,65 108,68" fill="#f39c12"/>
          
          {/* Side buttons */}
          <rect x="125" y="45" width="3" height="8" rx="1" fill="#7f8c8d"/>
          <rect x="125" y="60" width="3" height="12" rx="1" fill="#7f8c8d"/>
          
          {/* Watch crown */}          
          <rect x="125" y="55" width="5" height="4" rx="2" fill="#95a5a6"/>
        </svg>
      ),
      backgroundColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      textColor: "#ffffff"
    }
  ];

  return (
    <section className="promo">
      <div className="promo-container">
        <div className="promo-grid">
          {promoItems.map((item) => (
            <div 
              key={item.id} 
              className="promo-item"
              style={{ background: item.backgroundColor, color: item.textColor }}
            >
              <div className="promo-content">
                <div className="promo-text">
                  <p className="promo-title">{item.title}</p>
                  <h3 className="promo-product-name">{item.productName}</h3>
                  <div className="promo-discount">
                    <span className="discount-number">{item.discount}</span>
                    <span className="discount-text">{item.discountText}</span>
                  </div>
                </div>
                <div className="promo-image">
                  {item.image}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promo;