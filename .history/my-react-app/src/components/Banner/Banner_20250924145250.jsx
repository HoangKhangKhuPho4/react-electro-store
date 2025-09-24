import { useEffect, useState } from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import "./Banner.css";

const slides = [
  {
    id: 1,
    kicker: "SAVE UP TO A $200",
    title: "On Selected\nLaptops &\nDesktop Or\nSmartphone",
    desc: "Terms and Condition Apply",
    cta: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    kicker: "LIMITED DEAL",
    title: "Upgrade Your\nWorkspace Today",
    desc: "Free shipping on select items",
    cta: "Discover",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
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
    <Box component="section" className="banner">
      <Grid
        container
        className="banner-container"
        columns={5}
        columnSpacing={2}
        rowSpacing={2}
      >
        {/* LEFT: Carousel (≈80%) */}
        <Grid item xs={5} md={4}>
          <Box className="banner-carousel">
            {slides.map((s, i) => (
              <Box key={s.id} className={`banner-slide ${i === index ? "active" : ""}`}>
                <Box className="slide-text">
                  <Typography className="slide-kicker" variant="overline">
                    {s.kicker}
                  </Typography>
                  <Typography component="h2" className="slide-title">
                    {s.title.split("\n").map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </Typography>
                  <Typography className="slide-desc" variant="body1">
                    {s.desc}
                  </Typography>
                  <Button className="cta-btn" variant="contained" sx={{ backgroundColor: "#f28900", borderRadius: "30px", px: 3, py: 1.25 }}>
                    {s.cta}
                  </Button>
                </Box>
                <Box className="slide-image-wrap">
                  <img className="slide-image" src={s.image} alt="slide" />
                </Box>
              </Box>
            ))}
            <Box className="carousel-nav">
              <IconButton color="primary" className="nav-btn" onClick={() => go("prev")}>
                <KeyboardArrowLeft htmlColor="#fff" />
              </IconButton>
              <IconButton color="primary" className="nav-btn" onClick={() => go("next")}>
                <KeyboardArrowRight htmlColor="#fff" />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* RIGHT: Ad (≈20%) */}
        <Grid item xs={5} md={1}>
          <Box component="aside" className="banner-ad">
            <img
              className="ad-image"
              alt="ad"
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
            />
            <Box className="ad-overlay" />
            <Box className="ad-tag">Special Offer</Box>
            <Box className="ad-content">
              <Typography sx={{ opacity: 0.85, fontSize: 14 }}>SmartPhone</Typography>
              <Typography component="h3" className="ad-title">
                Apple iPad Mini G2356
              </Typography>
              <Box className="ad-price">
                <s style={{ opacity: 0.6, marginRight: 8 }}>$1,250.00</s>
                <strong>$1,050.00</strong>
              </Box>
              <Button className="ad-btn" variant="contained" sx={{ backgroundColor: "#ef2f06", borderRadius: "24px", px: 2 }}>
                🛒 Add To Cart
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
