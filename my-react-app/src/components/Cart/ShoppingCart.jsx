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

  // Xử lý trường hợp giỏ hàng trống
  if (cartItems.length === 0) {
    return (
      <Box
        sx={{
          p: { xs: 2, md: 4 },
          maxWidth: 1000,
          mx: "auto",
          textAlign: "center",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography variant="h1" sx={{ fontSize: "4rem", mb: 2 }}>
            🛒
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ color: "#666", mb: 2 }}>
            Giỏ hàng trống
          </Typography>
          <Typography variant="body1" sx={{ color: "#888", mb: 3 }}>
            Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/shop"
            sx={{
              bgcolor: "#f28900",
              "&:hover": { bgcolor: "#e67c00" },
              px: 4,
              py: 1.5,
              borderRadius: 2,
            }}
          >
            Tiếp tục mua sắm
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        maxWidth: 1200,
        mx: "auto",
        bgcolor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          bgcolor: "#fff",
          p: 3,
          borderRadius: 3,
          mb: 3,
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#333",
            mb: 1,
          }}
        >
          🛒 Giỏ hàng của bạn
        </Typography>
        <Typography variant="body1" sx={{ color: "#666" }}>
          {cartItems.length} sản phẩm trong giỏ hàng
        </Typography>
      </Box>

      {/* Main Content Layout */}
      <Grid container spacing={3}>
        {/* Cột trái: Danh sách sản phẩm */}
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}
          >
            {/* Header cho desktop */}
            <Box
              sx={{
                bgcolor: "#f8f9fa",
                p: 2,
                display: { xs: "none", md: "block" },
                borderBottom: "1px solid #eee",
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item md={5}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, color: "#333" }}
                  >
                    Sản phẩm
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography
                    variant="subtitle2"
                    align="center"
                    sx={{ fontWeight: 600, color: "#333" }}
                  >
                    Đơn giá
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography
                    variant="subtitle2"
                    align="center"
                    sx={{ fontWeight: 600, color: "#333" }}
                  >
                    Số lượng
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography
                    variant="subtitle2"
                    align="right"
                    sx={{ fontWeight: 600, color: "#333" }}
                  >
                    Thành tiền
                  </Typography>
                </Grid>
                <Grid item md={1}></Grid>
              </Grid>
            </Box>

            {/* Danh sách sản phẩm */}
            {cartItems.map((item, index) => (
              <Box
                key={item.id}
                sx={{
                  p: { xs: 2, md: 3 },
                  borderBottom:
                    index < cartItems.length - 1 ? "1px solid #f0f0f0" : "none",
                }}
              >
                <Grid container spacing={3} alignItems="center">
                  {/* Cột 1: Hình ảnh & Chi tiết sản phẩm */}
                  <Grid item xs={12} md={5}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          position: "relative",
                          borderRadius: 2,
                          overflow: "hidden",
                          border: "1px solid #f0f0f0",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: 100,
                            height: 100,
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: "#333",
                            mb: 0.5,
                            fontSize: { xs: "1rem", md: "1.1rem" },
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#666",
                            mb: 1,
                            display: { xs: "none", md: "block" },
                          }}
                        >
                          {item.description}
                        </Typography>
                        {/* Hiển thị giá trên mobile */}
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: "#f28900",
                            fontWeight: 600,
                            display: { xs: "block", md: "none" },
                          }}
                        >
                          ${item.price.toFixed(2)}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  {/* Cột 2: Đơn giá (Desktop only) */}
                  <Grid
                    item
                    md={2}
                    sx={{ display: { xs: "none", md: "block" } }}
                  >
                    <Typography
                      align="center"
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: "#f28900",
                      }}
                    >
                      ${item.price.toFixed(2)}
                    </Typography>
                  </Grid>

                  {/* Cột 3: Quantity Controls */}
                  <Grid item xs={6} md={2}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { xs: "flex-start", md: "center" },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          border: "1px solid #e0e0e0",
                          borderRadius: 2,
                          overflow: "hidden",
                        }}
                      >
                        <IconButton
                          size="small"
                          onClick={() =>
                            handleQuantityChange(
                              item.id,
                              (item.quantity - 1).toString()
                            )
                          }
                          disabled={item.quantity <= 1}
                          sx={{
                            borderRadius: 0,
                            width: 40,
                            height: 40,
                            "&:hover": { bgcolor: "#f5f5f5" },
                          }}
                        >
                          -
                        </IconButton>
                        <TextField
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(item.id, e.target.value)
                          }
                          inputProps={{
                            min: 1,
                            style: { textAlign: "center", padding: "8px 4px" },
                          }}
                          sx={{
                            width: "60px",
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": { border: "none" },
                            },
                          }}
                          size="small"
                        />
                        <IconButton
                          size="small"
                          onClick={() =>
                            handleQuantityChange(
                              item.id,
                              (item.quantity + 1).toString()
                            )
                          }
                          sx={{
                            borderRadius: 0,
                            width: 40,
                            height: 40,
                            "&:hover": { bgcolor: "#f5f5f5" },
                          }}
                        >
                          +
                        </IconButton>
                      </Box>
                    </Box>
                  </Grid>

                  {/* Cột 4: Thành tiền */}
                  <Grid item xs={4} md={2}>
                    <Typography
                      align="right"
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.2rem",
                        color: "#333",
                      }}
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </Grid>

                  {/* Cột 5: Nút xóa */}
                  <Grid item xs={2} md={1}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <IconButton
                        onClick={() => handleRemoveItem(item.id)}
                        sx={{
                          color: "#ff4757",
                          bgcolor: "#fff5f5",
                          border: "1px solid #ffe0e0",
                          "&:hover": {
                            bgcolor: "#ff4757",
                            color: "#fff",
                          },
                          transition: "all 0.2s ease",
                        }}
                        size="small"
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Cột phải: Tóm tắt đơn hàng */}
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: 2,
              p: 4,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              border: "1px solid #e0e0e0",
              position: { lg: "sticky" },
              top: { lg: "20px" },
              height: "fit-content",
              minWidth: "400px",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: "#333",
                pb: 2,
                borderBottom: "1px solid #e0e0e0",
                textAlign: "center",
              }}
            >
              Tóm tắt đơn hàng
            </Typography>

            {/* Chi tiết đơn hàng */}
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                  py: 1,
                  px: 1,
                }}
              >
                <Typography sx={{ color: "#666", fontSize: "0.9rem" }}>
                  Tạm tính:
                </Typography>
                <Typography
                  fontWeight="600"
                  sx={{ color: "#333", fontSize: "0.9rem" }}
                >
                  ${subtotal.toFixed(2)}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                  py: 1,
                  px: 1,
                }}
              >
                <Typography sx={{ color: "#666", fontSize: "0.9rem" }}>
                  Thuế (5%):
                </Typography>
                <Typography
                  fontWeight="600"
                  sx={{ color: "#333", fontSize: "0.9rem" }}
                >
                  ${tax.toFixed(2)}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                  py: 1,
                  px: 1,
                }}
              >
                <Typography sx={{ color: "#666", fontSize: "0.9rem" }}>
                  Phí vận chuyển:
                </Typography>
                <Typography
                  fontWeight="600"
                  sx={{ color: "#333", fontSize: "0.9rem" }}
                >
                  {subtotal > 100 ? "Miễn phí" : `$${shipping.toFixed(2)}`}
                </Typography>
              </Box>
            </Box>

            {/* Tổng cộng */}
            <Box
              sx={{
                borderTop: "1px solid #e0e0e0",
                pt: 2,
                mb: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  px: 1,
                  py: 1,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#333" }}
                >
                  Tổng cộng:
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#f28900",
                  }}
                >
                  ${total.toFixed(2)}
                </Typography>
              </Box>
            </Box>

            {/* Nút thanh toán */}
            <Button
              variant="contained"
              size="large"
              fullWidth
              component={Link}
              to="/checkout"
              sx={{
                bgcolor: "#f28900",
                "&:hover": {
                  bgcolor: "#e67c00",
                },
                py: 2,
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                mb: 2,
              }}
            >
              Thanh toán
            </Button>

            {/* Thông báo miễn phí vận chuyển */}
            {subtotal < 100 && (
              <Box
                sx={{
                  bgcolor: "#f5f5f5",
                  border: "1px solid #ddd",
                  borderRadius: 1,
                  p: 2,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#666",
                    display: "block",
                  }}
                >
                  Mua thêm ${(100 - subtotal).toFixed(2)} để được miễn phí vận
                  chuyển
                </Typography>
              </Box>
            )}

            {subtotal >= 100 && (
              <Box
                sx={{
                  bgcolor: "#f0f8ff",
                  border: "1px solid #c8e6c9",
                  borderRadius: 1,
                  p: 2,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#2e7d32",
                    display: "block",
                  }}
                >
                  Miễn phí vận chuyển!
                </Typography>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ShoppingCart;
