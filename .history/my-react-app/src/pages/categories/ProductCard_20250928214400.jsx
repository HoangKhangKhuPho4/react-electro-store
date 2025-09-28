// src/components/ProductCard.jsx
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Snackbar,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, selectWishlist } from "../../redux/appSlice";
import { useState } from "react";

// 1. Nhận { product } như một prop
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlist);
  const [open, setOpen] = useState(false);

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleAddToWishlist = () => {
    if (!isWishlisted) {
      dispatch(addToWishlist(product));
      setOpen(true);
    }
  };

  // Kiểm tra nếu không có product thì không render gì cả
  if (!product) {
    return null;
  }

  return (
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
        <Button size="small" variant="outlined">
          Add to Cart
        </Button>
        <Badge
          badgeContent={wishlist.length}
          color="error"
          overlap="circular"
          sx={{
            "& .MuiBadge-badge": {
              right: -8,
              top: 8,
              fontSize: "0.8rem",
              minWidth: 20,
              height: 20,
              borderRadius: "50%",
              background: "#ff9800",
              color: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            },
          }}
        >
          <Button
            size="small"
            aria-label="add to wishlist"
            onClick={handleAddToWishlist}
            startIcon={
              isWishlisted ? (
                <FavoriteIcon sx={{ color: "#ff9800" }} />
              ) : (
                <FavoriteBorderIcon />
              )
            }
            sx={{
              color: isWishlisted ? "#ff9800" : "inherit",
              fontWeight: "bold",
              transition: "all 0.2s",
              "&:hover": {
                bgcolor: "#fff7e6",
                color: "#ff9800",
              },
            }}
            disabled={isWishlisted}
          >
            Yêu thích
          </Button>
        </Badge>
      </CardActions>
      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Đã thêm vào sản phẩm yêu thích!
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default ProductCard;
