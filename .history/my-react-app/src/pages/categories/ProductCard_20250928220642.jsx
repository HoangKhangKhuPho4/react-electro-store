// src/components/ProductCard.jsx
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToWishlist, addToCart } from "../../redux/appSlice";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  // State cho hiệu ứng snackbar
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
    setSnackbar({
      open: true,
      message: "Đã thêm vào Yêu thích!",
      severity: "info",
    });
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setSnackbar({
      open: true,
      message: "Đã thêm vào Giỏ hàng!",
      severity: "success",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  // Kiểm tra nếu không có product thì không render gì cả
  if (!product) {
    return null;
  }

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* 2. Hiển thị dữ liệu từ prop */}
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
          sx={{
            objectFit: "cover", // 2. Đảm bảo ảnh vừa vặn mà không bị méo
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          {" "}
          {/* 3. Cho phép phần này co giãn */}
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              // Giới hạn tên sản phẩm chỉ hiển thị 1 dòng
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {product.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: "bold" }}
          >
            ${product.price.toFixed(2)}
          </Typography>
        </CardContent>
        {/* 3. Thêm nút bấm */}
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Button size="small" variant="outlined" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Button
            size="small"
            aria-label="add to wishlist"
            onClick={handleAddToWishlist}
            startIcon={<FavoriteBorderIcon />}
          >
            Yêu thích
          </Button>
        </CardActions>
      </Card>
      {/* Hiệu ứng Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={1800}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductCard;
