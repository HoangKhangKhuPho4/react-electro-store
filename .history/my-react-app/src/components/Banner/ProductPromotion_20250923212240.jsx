import "./ProductPromotion.css";

const ProductPromotion = () => {
  return (
    <div className="product-promotion">
      {/* Top Offer Badge */}
      <div className="offer-badge">
        <span className="save-amount">Save $48.00</span>
        <span className="offer-type">Special Offer</span>
      </div>

      {/* Product Content */}
      <div className="promotion-content">
        <div className="product-category">SmartPhone</div>
        
        <h3 className="product-name">
          Apple iPad Mini
          <br />
          G2356
        </h3>
        
        <div className="price-section">
          <span className="original-price">$1,250.00</span>
          <span className="sale-price">$1,050.00</span>
        </div>
        
        <button className="add-to-cart-btn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path 
              d="M2 2H3.4L5.4 14H13L15 6H4.4M6 19C6.6 19 7 19.4 7 20S6.6 21 6 21 5 20.6 5 20 5.4 19 6 19ZM13 19C13.6 19 14 19.4 14 20S13.6 21 13 21 12 20.6 12 20 12.4 19 13 19Z" 
              stroke="currentColor" 
              strokeWidth="1.5"
            />
          </svg>
          Add To Cart
        </button>
      </div>

      {/* Model Image */}
      <div className="model-image">
        <div className="model-placeholder">
          <svg width="120" height="180" viewBox="0 0 120 180" fill="none">
            {/* Woman Figure */}
            <circle cx="60" cy="30" r="15" fill="#fdbcb4"/> {/* Head */}
            <rect x="45" y="45" width="30" height="50" rx="15" fill="#dc143c"/> {/* Body/Dress */}
            <rect x="35" y="60" width="15" height="40" rx="7" fill="#fdbcb4"/> {/* Left Arm */}
            <rect x="70" y="60" width="15" height="40" rx="7" fill="#fdbcb4"/> {/* Right Arm */}
            <rect x="50" y="95" width="8" height="40" rx="4" fill="#333"/> {/* Left Leg */}
            <rect x="62" y="95" width="8" height="40" rx="4" fill="#333"/> {/* Right Leg */}
            
            {/* iPad in hand */}
            <rect x="75" y="70" width="20" height="30" rx="3" fill="#000"/>
            <rect x="77" y="72" width="16" height="26" rx="2" fill="#4a90e2"/>
            
            {/* Hair */}
            <path d="M45 25 Q60 15 75 25 L75 35 Q60 20 45 35 Z" fill="#deb887"/>
          </svg>
        </div>
        
        {/* Device Image */}
        <div className="device-image">
          <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
            {/* iPad */}
            <rect x="20" y="10" width="40" height="60" rx="6" fill="#000"/>
            <rect x="22" y="12" width="36" height="56" rx="4" fill="#4a90e2"/>
            <circle cx="40" cy="78" r="4" fill="#000"/>
            
            {/* Screen content */}
            <rect x="25" y="15" width="30" height="20" rx="2" fill="#90EE90"/>
            <text x="40" y="28" textAnchor="middle" fill="#000" fontSize="6">Maps</text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductPromotion;