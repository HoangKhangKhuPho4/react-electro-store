import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  selectCart,
  updateCartQuantity,
} from "../../redux/appSlice";

//Bước 2 : Dùng useSelector để lấy dữ liệu từ Store
// const cartItem = useSelector((state) => state.app.cart);

function ShoppingCart() {
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  //Bước 2 : Tạo hàm xử Lý thay đổi số lượng
  const handleQuantityChange = (itemId, newQuantityStr) => {
    const newQuantity = parseInt(newQuantityStr, 10);

    //chỉ dispatch khi giá trị của nó là một số hợp lệ
    // Reducer Xử Lý logic xóa nếu số lượng <= 0
    if (!isNaN(newQuantity)) {
      dispatch(updateCartQuantity({ id: itemId, quantity: newQuantity }));
    }
  };

  // Tính toán tổng tiền
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const shipping = 15.0;
  const total = subtotal + tax + shipping;

  return (
    <Box sx={{ p: { xs: 1, md: 3 }, maxWidth: 900, mx: "auto" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Shopping Cart
      </Typography>

      {/* Hàng Tiêu đề Cột - chỉ hiển thị trên màn hình lớn */}
      <Grid
        container
        spacing={2}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          pb: 1,
          mb: 2,
          display: { xs: "none", md: "flex" },
        }}
      >
        <Grid item md={5}>
          <Typography variant="subtitle2" color="text.secondary">
            Product
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant="subtitle2" color="text.secondary" align="center">
            Price
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant="subtitle2" color="text.secondary" align="center">
            Quantity
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant="subtitle2" color="text.secondary" align="right">
            Total
          </Typography>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>

      {/* --- DANH SÁCH SẢN PHẨM --- */}
      {cartItems.map((item) => (
        <Grid
          container
          key={item.id}
          spacing={2}
          alignItems="center"
          sx={{ mb: 2, borderBottom: 1, borderColor: "divider", pb: 2 }}
        >
          {/* Cột 1: Hình ảnh & Chi tiết */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: 80,
                  height: 80,
                  marginRight: 16,
                  borderRadius: 8,
                }}
              />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Cột 2: Giá */}
          <Grid item xs={4} md={2}>
            <Typography align="center">${item.price.toFixed(2)}</Typography>
          </Grid>

          {/* Cột 3: Số lượng */}
          <Grid item xs={4} md={2}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <TextField
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                inputProps={{ min: 1, style: { textAlign: "center" } }}
                sx={{ width: "70px" }}
                size="small"
              />
            </Box>
          </Grid>

          {/* Cột 4: Tổng tiền của sản phẩm */}
          <Grid item xs={3} md={2}>
            <Typography align="right" fontWeight="bold">
              ${(item.price * item.quantity).toFixed(2)}
            </Typography>
          </Grid>

          {/* Cột 5: Nút Xóa */}
          <Grid item xs={1} md={1}>
            <IconButton
              aria-label="delete"
              color="error"
              onClick={() => handleRemoveItem(item.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}

      {/* --- PHẦN TỔNG CỘNG --- */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Box sx={{ width: { xs: "100%", md: 350 } }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography color="text.secondary">Subtotal</Typography>
            <Typography fontWeight="medium">${subtotal.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography color="text.secondary">Tax (5%)</Typography>
            <Typography fontWeight="medium">${tax.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography color="text.secondary">Shipping</Typography>
            <Typography fontWeight="medium">${shipping.toFixed(2)}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: 1,
              borderColor: "divider",
              pt: 2,
            }}
          >
            <Typography variant="h6">Grand Total</Typography>
            <Typography variant="h6" fontWeight="bold">
              ${total.toFixed(2)}
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{ mt: 2 }}
            component={Link}
            to="/checkout"
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ShoppingCart;
