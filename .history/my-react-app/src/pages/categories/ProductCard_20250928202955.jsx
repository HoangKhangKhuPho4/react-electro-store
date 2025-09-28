// src/components/ProductCard.jsx
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

// 1. Nhận { product } như một prop
const ProductCard = ({ product }) => {
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
        <IconButton aria-label="add to wishlist">
          <FavoriteBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
