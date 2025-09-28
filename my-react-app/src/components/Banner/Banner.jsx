import { useEffect, useState } from "react";
import "./Banner.css";

const slides = [
  {
    id: 1,
    kicker: "SAVE UP TO A $200",
    title: "On Selected\nLaptops &\nDesktop Or\nSmartphone",
    desc: "Terms and Condition Apply",
    cta: "Shop Now",
    image:
      "https://cdn.tgdd.vn/Files/2016/10/27/905695/imac-macbook_800x450.jpg",
  },
  {
    id: 2,
    kicker: "LIMITED DEAL",
    title: "Upgrade Your\nWorkspace Today",
    desc: "Free shipping on select items",
    cta: "Discover",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9J9GX59RgyzPYklat_GL_mdT8YRxlS2lNg&s",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const go = (dir) => {
    setIndex((prev) => {
      if (dir === "prev") return (prev - 1 + slides.length) % slides.length;
      return (prev + 1) % slides.length;
    });
  };

  return (
    <section className="banner">
      <div className="banner-container">
        {/* LEFT: Carousel */}
        <div className="banner-carousel">
          {slides.map((s, i) => (
            <div
              key={s.id}
              className={`banner-slide ${i === index ? "active" : ""}`}
            >
              <div className="slide-text">
                <div className="slide-kicker">{s.kicker}</div>
                <h2 className="slide-title">
                  {s.title.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h2>
                <div className="slide-desc">{s.desc}</div>
                <button className="cta-btn">{s.cta}</button>
              </div>
              <div className="slide-image-wrap">
                <img className="slide-image" src={s.image} alt="slide" />
              </div>
            </div>
          ))}
          <div className="carousel-nav">
            <button className="nav-btn" onClick={() => go("prev")}>
              ‹
            </button>
            <button className="nav-btn" onClick={() => go("next")}>
              ›
            </button>
          </div>
        </div>

        {/* RIGHT: Ad */}
        <aside className="banner-ad">
          <img
            className="ad-image"
            alt="ad"
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
          />
          <div className="ad-overlay" />
          <div className="ad-tag">Special Offer</div>
          <div className="ad-content">
            <div style={{ opacity: 0.85, fontSize: 14 }}>SmartPhone</div>
            <h3 className="ad-title">Apple iPad Mini G2356</h3>
            <div className="ad-price">
              <s style={{ opacity: 0.6, marginRight: 8 }}>$1,250.00</s>
              <strong>$1,050.00</strong>
            </div>
            <button className="ad-btn">
              <span>🛒</span> Add To Cart
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Banner;
