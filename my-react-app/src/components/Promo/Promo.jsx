import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetPostsQuery } from "../../redux/apiSlice";
import { addToCart, selectCartItemCount } from "../../redux/appSlice";

const featureItems = [
  {
    title: "MIỄN PHÍ TRẢ HÀNG",
    desc: "Đổi trả trong vòng 30 ngày",
    icon: "🔄",
    color: "#10b981",
  },
  {
    title: "GIAO HÀNG MIỄN PHÍ",
    desc: "Đơn hàng trên 500.000đ",
    icon: "🚚",
    color: "#3b82f6",
  },
  {
    title: "HỖ TRỢ 24/7",
    desc: "Tư vấn khách hàng mọi lúc",
    icon: "🎧",
    color: "#8b5cf6",
  },
  {
    title: "THẺ QUÀ TẶNG",
    desc: "Nhận quà với đơn hàng 1tr+",
    icon: "🎁",
    color: "#f59e0b",
  },
  {
    title: "THANH TOÁN AN TOÀN",
    desc: "Bảo mật thông tin tuyệt đối",
    icon: "�️",
    color: "#ef4444",
  },
  {
    title: "BẢO HÀNH CHÍNH HÃNG",
    desc: "Bảo hành toàn quốc 12 tháng",
    icon: "✅",
    color: "#06b6d4",
  },
];

const Promo = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartItemCount);

  // Use RTK Query as demo data source for promo titles/subtitles
  const { data: posts = [], isFetching } = useGetPostsQuery();

  const promoCards = useMemo(
    () => [
      {
        id: 101,
        title: "iPhone 15 Pro Max",
        subtitle: "KHUYẾN MÃI ĐẶC BIỆT",
        sale: "GIẢM 5 TRIỆU",
        originalPrice: "34.990.000đ",
        salePrice: "29.990.000đ",
        image:
          "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png",
        badge: "HOT SALE",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        endDate: "31/10/2024",
      },
      {
        id: 102,
        title: "MacBook Pro M3",
        subtitle: "LAPTOP CAO CẤP",
        sale: "TRẢ GÓP 0%",
        originalPrice: "52.990.000đ",
        salePrice: "48.990.000đ",
        image:
          "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook-pro-14-inch-m3-2023.png",
        badge: "TRẢNG GÓP",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        endDate: "15/11/2024",
      },
    ],
    [posts]
  );

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>
      <Box
        component="section"
        sx={{ width: "100%", py: 3, px: { xs: 2, md: 3 } }}
      >
        {/* Row 1: six feature boxes */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {featureItems.map((f, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={idx}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2.5,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  border: "1px solid #f0f0f0",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                    borderColor: f.color,
                  },
                }}
              >
                <Box
                  sx={{
                    fontSize: 24,
                    bgcolor: `${f.color}15`,
                    color: f.color,
                    p: 1.5,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 48,
                    minHeight: 48,
                  }}
                >
                  {f.icon}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 700,
                      letterSpacing: 0.2,
                      color: "#333",
                      fontSize: "0.85rem",
                      mb: 0.5,
                    }}
                  >
                    {f.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      fontSize: "0.8rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {f.desc}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Row 2: two promo cards (same row, equal width) */}
        <Grid
          container
          spacing={2}
          alignItems="stretch"
          sx={{ flexWrap: "nowrap" }}
        >
          {promoCards.map((p) => (
            <Grid
              key={p.id}
              item
              xs={6}
              sm={6}
              md={6}
              lg={6}
              sx={{ flex: "1 1 50%" }}
            >
              <Card
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 4,
                  border: "none",
                  height: "100%",
                  minHeight: 200,
                  background: p.gradient,
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0,0,0,0.1)",
                    zIndex: 1,
                  },
                }}
              >
                <Grid
                  container
                  sx={{ position: "relative", zIndex: 2, height: "100%" }}
                >
                  <Grid
                    item
                    xs={7}
                    sx={{
                      p: 2.5,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "rgba(255,255,255,0.9)",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: 1,
                        }}
                      >
                        {p.subtitle}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          color: "#fff",
                          mt: 0.5,
                          fontSize: "1.1rem",
                          lineHeight: 1.2,
                          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        }}
                      >
                        {p.title}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#fff",
                          fontWeight: 900,
                          my: 1,
                          fontSize: "1.3rem",
                          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        }}
                      >
                        {p.sale}
                      </Typography>
                      <Box sx={{ mt: 1 }}>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "rgba(255,255,255,0.8)",
                            textDecoration: "line-through",
                            fontSize: "0.75rem",
                          }}
                        >
                          {p.originalPrice}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: "1rem",
                            ml: 1,
                            textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                          }}
                        >
                          {p.salePrice}
                        </Typography>
                      </Box>
                    </Box>
                    <CardActions sx={{ pl: 0, pt: 1 }}>
                      <Button
                        variant="contained"
                        sx={{
                          fontSize: "0.8rem",
                          py: 1,
                          px: 2,
                          bgcolor: "rgba(255,255,255,0.15)",
                          color: "#fff",
                          border: "1px solid rgba(255,255,255,0.3)",
                          backdropFilter: "blur(10px)",
                          fontWeight: 600,
                          "&:hover": {
                            bgcolor: "rgba(255,255,255,0.25)",
                            transform: "translateY(-2px)",
                          },
                        }}
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id: p.id,
                              name: p.title,
                              price: parseInt(p.salePrice.replace(/\D/g, "")),
                            })
                          )
                        }
                      >
                        MUA NGAY
                      </Button>
                    </CardActions>
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      position: "relative",
                      minHeight: 120,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="160"
                      image={p.image}
                      alt={p.title}
                      sx={{
                        objectFit: "contain",
                        p: 1,
                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
                      }}
                    />
                  </Grid>
                </Grid>

                {/* Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 15,
                    right: 15,
                    bgcolor: "#ff4757",
                    color: "#fff",
                    px: 2,
                    py: 0.8,
                    borderRadius: 20,
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    zIndex: 3,
                    textTransform: "uppercase",
                    boxShadow: "0 4px 12px rgba(255,71,87,0.4)",
                    animation: "pulse 2s infinite",
                  }}
                >
                  {p.badge}
                </Box>

                {/* Countdown */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 15,
                    right: 15,
                    bgcolor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: "0.7rem",
                    zIndex: 3,
                    backdropFilter: "blur(5px)",
                  }}
                >
                  Đến {p.endDate}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Promo;
