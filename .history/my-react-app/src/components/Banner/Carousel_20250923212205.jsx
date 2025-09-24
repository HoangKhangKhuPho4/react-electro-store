import { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "SAVE UP TO A $200",
      subtitle: "On Selected",
      mainText: "Laptops & Desktop",
      secondaryText: "Or Smartphone",
      description: "Terms and Condition Apply",
      buttonText: "Shop Now",
      background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "MEGA SALE 50% OFF",
      subtitle: "Special Deals",
      mainText: "Gaming Laptops",
      secondaryText: "& Accessories",
      description: "Limited Time Offer",
      buttonText: "Buy Now",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      image: "/api/placeholder/400/300"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-container">
        {/* Slides */}
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ background: slide.background }}
            >
              <div className="slide-content">
                <div className="slide-text">
                  <p className="slide-subtitle">{slide.subtitle}</p>
                  <h1 className="slide-title">{slide.title}</h1>
                  <h2 className="slide-main-text">
                    {slide.mainText}
                    <br />
                    {slide.secondaryText}
                  </h2>
                  <p className="slide-description">{slide.description}</p>
                  <button className="slide-button">
                    {slide.buttonText}
                  </button>
                </div>
                <div className="slide-image">
                  <div className="computer-icon">
                    <svg width="300" height="200" viewBox="0 0 300 200" fill="none">
                      {/* Computer Monitor */}
                      <rect 
                        x="50" 
                        y="30" 
                        width="200" 
                        height="120" 
                        rx="8" 
                        fill="white" 
                        stroke="#ddd" 
                        strokeWidth="2"
                      />
                      <rect 
                        x="60" 
                        y="40" 
                        width="180" 
                        height="100" 
                        rx="4" 
                        fill="#000"
                      />
                      {/* Shopping Cart Icon */}
                      <g transform="translate(120, 70)">
                        <path 
                          d="M2 2H5.4L8.4 14H20L23 6H6.4" 
                          stroke="#00ff00" 
                          strokeWidth="3" 
                          fill="none"
                        />
                        <circle cx="9" cy="19" r="1" fill="#00ff00"/>
                        <circle cx="20" cy="19" r="1" fill="#00ff00"/>
                      </g>
                      {/* BUY Button */}
                      <rect 
                        x="200" 
                        y="80" 
                        width="60" 
                        height="25" 
                        rx="12" 
                        fill="#00ff00"
                      />
                      <text 
                        x="230" 
                        y="97" 
                        textAnchor="middle" 
                        fill="white" 
                        fontSize="12" 
                        fontWeight="bold"
                      >
                        BUY
                      </text>
                      {/* Monitor Stand */}
                      <rect x="140" y="150" width="20" height="30" fill="#ddd"/>
                      <rect x="120" y="175" width="60" height="10" rx="5" fill="#ddd"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M15 18L9 12L15 6" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M9 18L15 12L9 6" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;