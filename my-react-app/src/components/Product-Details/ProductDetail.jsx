import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  IconButton,
  Link as MLink,
  Paper,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addToCart } from "../../redux/appSlice";

const DUMMY = {
  title: "Men's Shoes Fashion",
  description:
    "Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.",
  price: 180,
  rating: 3.2,
  reviews: 41,
  sizes: ["s", "m", "l", "xl"],
  colors: ["#ff9f1a", "#85ad00", "#0076ad"],
  images: [
    "https://placekitten.com/800/504",
    "https://placekitten.com/801/504",
    "https://placekitten.com/802/504",
    "https://placekitten.com/803/504",
    "https://placekitten.com/804/504",
    "https://placekitten.com/805/504", // <-- Ảnh mới 1
    "https://placekitten.com/806/504", // <-- Ảnh mới 2
    "https://placekitten.com/807/504", // <-- Ảnh mới 3
  ],
};

export default function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const product = useMemo(() => {
    const stateProduct = location.state && location.state.product;
    if (!stateProduct) {
      return { id, ...DUMMY };
    }
    // Map fields from card product to detail schema and fall back to defaults
    const mapped = {
      title: stateProduct.name || DUMMY.title,
      description: stateProduct.description || DUMMY.description,
      price:
        typeof stateProduct.price === "number"
          ? stateProduct.price
          : DUMMY.price,
      rating: DUMMY.rating,
      reviews: DUMMY.reviews,
      sizes: DUMMY.sizes,
      colors: DUMMY.colors,
      images: stateProduct.image
        ? [stateProduct.image, ...DUMMY.images.slice(0, 3)]
        : DUMMY.images,
    };
    return { id, ...mapped };
  }, [id, location.state]);
  const [active, setActive] = useState(0);
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <Box sx={{ px: { xs: 2, md: 3 }, py: 3, maxWidth: 1400, mx: "auto" }}>
      <Breadcrumbs sx={{ mb: 2 }}>
        <MLink color="inherit" href="/">
          Home
        </MLink>
        <MLink color="inherit" href="/shop">
          Shop
        </MLink>
        <Typography color="text.primary">Product Detail</Typography>
      </Breadcrumbs>

      {/* Main flexbox container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          mb: 4,
        }}
      >
        {/* Cột 1: Image Gallery - 35% */}
        <Box sx={{ flex: { xs: "1", md: "0 0 35%" } }}>
          <Box sx={{ background: "#eee", p: 2, borderRadius: 2 }}>
            <Box sx={{ overflow: "hidden", borderRadius: 1, mb: 2 }}>
              <img
                src={product.images[active]}
                alt="preview"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
              {product.images.map((src, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 90,
                    height: 60,
                    borderRadius: 1,
                    overflow: "hidden",
                    cursor: "pointer",
                    outline:
                      i === active
                        ? "2px solid #ff9f1a"
                        : "2px solid transparent",
                  }}
                  onClick={() => setActive(i)}
                >
                  <img
                    src={src}
                    alt={`thumb-${i}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Cột 2: Product Info - 65% */}
        <Box sx={{ flex: { xs: "1", md: "0 0 65%" } }}>
          <Box sx={{ pl: { md: 2 } }}>
            <Typography variant="h5" sx={{ fontWeight: 800 }}>
              {product.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 1 }}>
              <Rating value={product.rating} precision={0.5} readOnly />
              <Typography variant="body2" sx={{ color: "#666" }}>
                {product.reviews} reviews
              </Typography>
            </Box>
            <Typography sx={{ color: "#555", mb: 2 }}>
              {product.description}
            </Typography>
            <Typography
              variant="h6"
              sx={{ textTransform: "uppercase", fontWeight: 700 }}
            >
              current price:{" "}
              <Box component="span" sx={{ color: "#ff9f1a" }}>
                ${product.price}
              </Box>
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, textTransform: "uppercase", mb: 1 }}
              >
                sizes:
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {product.sizes.map((s) => (
                  <Button
                    key={s}
                    variant={size === s ? "contained" : "outlined"}
                    size="small"
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </Button>
                ))}
              </Box>
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 700, textTransform: "uppercase", mb: 1 }}
              >
                colors:
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {product.colors.map((c) => (
                  <Box
                    key={c}
                    onClick={() => setColor(c)}
                    title={c}
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: 1,
                      background: c,
                      cursor: "pointer",
                      outline:
                        color === c
                          ? "2px solid #333"
                          : "2px solid transparent",
                    }}
                  />
                ))}
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 1.5, mt: 2 }}>
              <Button
                variant="contained"
                color="warning"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product.id,
                      name: product.title,
                      price: product.price,
                      description: product.description,
                      image: product.images[0],
                    })
                  )
                }
              >
                add to cart
              </Button>
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Feedback & Review Section - Reorganized Layout */}
      <Box sx={{ my: 6 }}>
        <Paper
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              p: 4,
            }}
          >
            <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
              📝 Góp ý & Đánh giá sản phẩm
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Chia sẻ trải nghiệm của bạn để giúp những khách hàng khác đưa ra
              quyết định tốt hơn
            </Typography>
          </Box>

          {/* Main Content */}
          <Box sx={{ p: 5 }}>
            <Grid container spacing={5}>
              {/* Left Column: Main Form - 60% */}
              <Grid item xs={12} lg={7}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {/* Personal Info Section */}
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      sx={{ mb: 3, color: "#495057" }}
                    >
                      👤 Thông tin cá nhân
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="Họ và Tên"
                          placeholder="Nhập họ và tên của bạn"
                          fullWidth
                          variant="outlined"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: 3,
                              height: 60,
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          label="E-mail"
                          placeholder="Nhập địa chỉ email"
                          fullWidth
                          variant="outlined"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: 3,
                              height: 60,
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>

                  {/* Review Content Section */}
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      sx={{ mb: 3, color: "#495057" }}
                    >
                      💬 Nội dung đánh giá
                    </Typography>
                    <TextField
                      label="Chia sẻ trải nghiệm của bạn"
                      placeholder="Hãy chia sẻ chi tiết về chất lượng sản phẩm, dịch vụ giao hàng, và trải nghiệm tổng thể..."
                      fullWidth
                      multiline
                      rows={6}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                          fontSize: "1.1rem",
                        },
                      }}
                    />
                  </Box>

                  {/* Rating Section */}
                  <Box
                    sx={{
                      p: 4,
                      backgroundColor: "#f8f9fa",
                      borderRadius: 3,
                      border: "2px solid #e9ecef",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      sx={{ mb: 3, color: "#495057" }}
                    >
                      ⭐ Mức độ hài lòng
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                        mb: 2,
                      }}
                    >
                      <Rating
                        name="product-rating"
                        value={ratingValue}
                        precision={0.5}
                        size="large"
                        onChange={(event, newValue) => {
                          setRatingValue(newValue);
                        }}
                        sx={{
                          "& .MuiRating-iconFilled": { color: "#ff9f1a" },
                          "& .MuiRating-icon": { fontSize: "2.5rem" },
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h5"
                          color="primary"
                          fontWeight={700}
                        >
                          {ratingValue || 0}/5
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {ratingValue >= 4.5
                            ? "Xuất sắc"
                            : ratingValue >= 3.5
                            ? "Tốt"
                            : ratingValue >= 2.5
                            ? "Trung bình"
                            : ratingValue >= 1.5
                            ? "Kém"
                            : ratingValue >= 0.5
                            ? "Rất kém"
                            : "Chưa đánh giá"}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontStyle: "italic" }}
                    >
                      💡 Đánh giá chân thực giúp cộng đồng mua sắm thông minh
                      hơn
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Right Column: Security & Guidelines - 40% */}
              <Grid item xs={12} lg={5}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    height: "100%",
                  }}
                >
                  {/* Security Verification */}
                  <Box
                    sx={{
                      p: 4,
                      background:
                        "linear-gradient(135deg, #fff8f0 0%, #ffe4b5 100%)",
                      borderRadius: 3,
                      border: "2px solid #ffcc80",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      sx={{
                        mb: 3,
                        textAlign: "center",
                        color: "#e65100",
                      }}
                    >
                      🔒 Xác thực bảo mật
                    </Typography>
                    <Box
                      component="img"
                      src="http://www.gohacking.com/wp-content/uploads/2010/06/captcha-300x171.jpg"
                      alt="captcha"
                      sx={{
                        width: "100%",
                        height: "auto",
                        border: "3px solid #fff",
                        borderRadius: 3,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                        mb: 3,
                      }}
                    />
                    <Button
                      variant="text"
                      size="large"
                      fullWidth
                      sx={{
                        mb: 3,
                        textTransform: "none",
                        color: "#e65100",
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: "rgba(230, 81, 0, 0.1)",
                        },
                      }}
                    >
                      🔄 Tạo mã mới
                    </Button>
                    <TextField
                      label="Nhập mã xác thực"
                      placeholder="Nhập 6 ký tự trong hình"
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                          backgroundColor: "white",
                          height: 56,
                        },
                      }}
                    />
                  </Box>

                  {/* Rating Guidelines */}
                  <Box
                    sx={{
                      p: 4,
                      background:
                        "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                      borderRadius: 3,
                      border: "2px solid #90caf9",
                    }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      sx={{ mb: 3, color: "#1565c0" }}
                    >
                      📊 Tiêu chí đánh giá
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      {[
                        { stars: 5, label: "Xuất sắc", desc: "Vượt mong đợi" },
                        { stars: 4, label: "Tốt", desc: "Đáng hài lòng" },
                        {
                          stars: 3,
                          label: "Trung bình",
                          desc: "Chấp nhận được",
                        },
                        { stars: 2, label: "Kém", desc: "Dưới mong đợi" },
                        { stars: 1, label: "Rất kém", desc: "Không hài lòng" },
                      ].map((item, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            p: 2,
                            backgroundColor: "rgba(255,255,255,0.7)",
                            borderRadius: 2,
                          }}
                        >
                          <Rating
                            value={item.stars}
                            size="small"
                            readOnly
                            sx={{ minWidth: 100 }}
                          />
                          <Box>
                            <Typography variant="body2" fontWeight={600}>
                              {item.label}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {item.desc}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 4,
                justifyContent: "center",
                mt: 6,
                pt: 4,
                borderTop: "3px solid #f0f0f0",
              }}
            >
              <Button
                variant="outlined"
                size="large"
                sx={{
                  py: 2.5,
                  px: 8,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                🗑️ Xóa tất cả
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{
                  py: 2.5,
                  px: 8,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  background:
                    "linear-gradient(135deg, #ff9f1a 0%, #e65100 100%)",
                  boxShadow: "0 8px 25px rgba(255, 159, 26, 0.4)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #e58900 0%, #d84315 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 35px rgba(255, 159, 26, 0.6)",
                  },
                }}
              >
                📤 Gửi đánh giá
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
