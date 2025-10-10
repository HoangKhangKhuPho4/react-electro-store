import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/appSlice";

const IMAGES = [
  "https://cellphones.com.vn/sforum/wp-content/uploads/2021/09/ipad-mini-6-16-scaled.jpg",
  "https://www.macwelt.de/wp-content/uploads/2023/04/4313305_original.jpg?quality=50&strip=all&w=1024",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_EBTFwidHpA2rv7JHPINsGHaWWSnAOk6OlQSLsv0oSQ3kRUaCBwysl5PiUZwOD9Cft8&usqp=CAU",
  "https://cellphones.com.vn/sforum/wp-content/uploads/2021/09/ipad-mini-6-4-scaled.jpg",
  "https://zshop.vn/images/companies/1/san_pham/Apple/iPad%20mini%202021/ipadmini%202.jpg?1631878943755",
  "https://cdn2.fptshop.com.vn/unsafe/564x0/filters:quality(80)/Uploads/images/2015/Tin-Tuc/QuanLNH2/ipad-mini-83-2021-9.jpg",
  "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/ipad-mini-6_2__1.jpg",
  "https://cdn2.fptshop.com.vn/unsafe/564x0/filters:quality(80)/Uploads/images/2015/Tin-Tuc/QuanLNH2/ipad-mini-83-2021-6.jpg",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512499617640-c2f999098c79?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1600&auto=format&fit=crop",
];

const buildProducts = (count, offset = 0) =>
  Array.from({ length: count }).map((_, i) => {
    const id = offset + i + 1;
    return {
      id,
      name: `Apple iPad Mini\nG${2356 + ((id % 9) + 1)}`,
      category: "SmartPhone",
      oldPrice: 1250,
      price: 1050,
      badge: id % 3 === 0 ? "Sale" : id % 4 === 0 ? "New" : undefined,
      image: IMAGES[(offset + i) % IMAGES.length],
    };
  });

const OurProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);

  const datasets = useMemo(
    () => ({
      all: buildProducts(12, 0),
      newArrivals: buildProducts(12, 3),
      featured: buildProducts(12, 6),
      topSelling: buildProducts(12, 9),
    }),
    []
  );

  const current = useMemo(() => {
    if (tab === 1) return datasets.newArrivals;
    if (tab === 2) return datasets.featured;
    if (tab === 3) return datasets.topSelling;
    return datasets.all;
  }, [tab, datasets]);

  const visible = current.slice(0, 8); // 2 rows x 4 columns

  return (
    <Box
      component="section"
      sx={{ width: "100%", px: { xs: 2, md: 3 }, py: 3 }}
    >
      {/* Header row: Title left, Tabs right */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
          gap: 2,
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 1, md: 2 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            color: "#333",
          }}
        >
          Our Products
        </Typography>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            minHeight: 48,

            "& .MuiTabScrollButton-root": {
              color: "#f28900",
              "&:hover": {
                bgcolor: "#fff3e0",
              },
            },

            "& .MuiTab-root": {
              textTransform: "none",
              minHeight: 44,
              fontSize: "0.9rem",
              fontWeight: 500,
              px: { xs: 2, md: 3 },
              py: 1.5,
              color: "#666",
              borderRadius: "8px",
              margin: "0 4px",
              transition: "all 0.2s ease-in-out",
              outline: "none",
              border: "none",

              "&:focus": {
                outline: "none",
                border: "none",
                boxShadow: "none",
              },

              "&:hover": {
                bgcolor: "#f5f5f5",
                color: "#f28900",
              },
            },

            "& .Mui-selected": {
              bgcolor: "#f28900",
              color: "#fff !important",
              fontWeight: 600,

              "&:hover": {
                bgcolor: "#e67c00",
              },
            },

            "& .MuiTabs-indicator": {
              display: "none",
            },

            // Responsive
            "@media (max-width: 768px)": {
              "& .MuiTab-root": {
                minHeight: 40,
                fontSize: "0.85rem",
                px: 2,
              },
            },
          }}
        >
          <Tab label="All Products" />
          <Tab label="New Arrivals" />
          <Tab label="Featured" />
          <Tab label="Top Selling" />
        </Tabs>
      </Box>{" "}
      <Grid
        container
        spacing={2}
        alignItems="stretch"
        sx={{ maxWidth: 1200, mx: "auto" }}
      >
        {visible.map((p) => (
          <Grid key={p.id} item xs={12} sm={6} md={3} sx={{ display: "flex" }}>
            <Card
              sx={{
                p: 1.5,
                border: "1px solid #eee",
                borderRadius: 2,
                height: 380,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.1)",
                  borderColor: "#f28900",
                  "& .product-image": {
                    transform: "scale(1.05)",
                  },
                  "& .product-badge": {
                    transform: "scale(1.1) rotate(-3deg)",
                  },
                  "& .add-to-cart-btn": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 16px rgba(242, 137, 0, 0.3)",
                  },
                },
              }}
              onClick={() =>
                navigate(`/product/${p.id}`, { state: { product: p } })
              }
            >
              <Box
                sx={{
                  position: "relative",
                  height: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#fafafa",
                }}
              >
                {p.badge && (
                  <Box
                    className="product-badge"
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      bgcolor: p.badge === "Sale" ? "#ef2f06" : "#f28900",
                      color: "#fff",
                      px: 1.2,
                      py: 0.4,
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 700,
                      zIndex: 1,
                      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    {p.badge}
                  </Box>
                )}
                <CardMedia
                  component="img"
                  image={p.image}
                  alt={p.name}
                  className="product-image"
                  sx={{
                    height: 160,
                    width: 160,
                    objectFit: "cover",
                    borderRadius: 1,
                    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  textAlign: "center",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: 120,
                  padding: "16px 16px 8px 16px",
                }}
              >
                <Box
                  sx={{
                    height: 60,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ color: "#8a8a8a", lineHeight: 1.2 }}
                  >
                    {p.category}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      whiteSpace: "pre-line",
                      fontSize: "0.9rem",
                      lineHeight: 1.3,
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {p.name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    alignItems: "baseline",
                    height: 30,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ textDecoration: "line-through", color: "#8a8a8a" }}
                  >
                    ${p.oldPrice.toFixed(2)}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#f28900", fontWeight: 800 }}
                  >
                    ${p.price.toFixed(2)}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "center",
                  padding: "8px 16px 16px 16px",
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="warning"
                  size="small"
                  className="add-to-cart-btn"
                  sx={{
                    minWidth: 120,
                    height: 36,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      bgcolor: "#e67c00",
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 16px rgba(242, 137, 0, 0.3)",
                    },
                    "&:active": {
                      transform: "translateY(0px)",
                    },
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(
                      addToCart({
                        id: p.id.toString(),
                        name: p.name,
                        price: p.price,
                        image: p.image,
                        description: "A brief description of the Product",
                      })
                    );
                  }}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurProducts;
