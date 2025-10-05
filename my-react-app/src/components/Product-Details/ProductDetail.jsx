import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; // <--- THÊM DÒNG NÀY
import {
  Box,
  Breadcrumbs,
  Button,
  IconButton,
  Link as MLink,
  Rating,
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

  return (
    <Box sx={{ px: { xs: 2, md: 3 }, py: 3, maxWidth: 1200, mx: "auto" }}>
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
          gap: 3,
          mb: 3,
        }}
      >
        {/* Cột 1: Image Gallery - 1/3 width */}
        <Box sx={{ flex: { xs: "1", md: "0 0 33.333%" } }}>
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

        {/* Cột 2: Product Info - 1/3 width */}
        <Box sx={{ flex: { xs: "1", md: "0 0 33.333%" } }}>
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

      {/* Cột 3: Empty space - Full width, xuống dưới */}
      <Box
        sx={{
          width: "100%",
          minHeight: "200px",
          background: "#f9f9f9",
          borderRadius: 2,
          border: "2px dashed #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" color="text.secondary">
          Cột thứ 3 - Có thể thêm content sau
        </Typography>
      </Box>
    </Box>
  );
}
