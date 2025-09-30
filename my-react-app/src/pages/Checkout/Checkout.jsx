import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LockIcon from "@mui/icons-material/Lock";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectCart } from "../../redux/appSlice";

const Checkout = () => {
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    country: "",
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    phoneNumber: "",
    emailAddress: "",
  });

  //State để Lưu Lỗi
  const [errors, setErrors] = useState({});
  const validate = () => {
    let tempErrors = {};
    if (!formData.first_name) {
      tempErrors.first_name = "FirstName is Required";
    }
    if (!formData.country) {
      tempErrors.country = "Country is Required";
    }

    setErrors(tempErrors);

    //Trả Về True Nếu Object Không có Lỗi nào
    return Object.keys(tempErrors).length === 0;
  };

  //set FormData sẽ re-render UI
  // Khi name thay đổi
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validate()) {
      console.log("Form Data Submitted: ", formData);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Container maxWidth={false} sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Checkout
        </Typography>
        <Grid container spacing={4}>
          {/* Left: Shipping Address + Secure Payment */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
            >
              {/* Shipping Address */}
              <Card
                sx={{
                  maxWidth: 700,
                  width: "100%",
                  border: "2px solid #bdbdbd",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  backgroundColor: "#fafafa",
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Shipping Address
                  </Typography>
                  <TextField
                    size="small"
                    label="Country"
                    name="country"
                    //Để kết nối TextField
                    //dùng value
                    value={formData.country}
                    onChange={handleChange}
                    //thêm 2 thông báo lỗi
                    error={!!errors.country}
                    helperText={errors.country}
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <TextField
                      size="small"
                      label="First Name"
                      name="first_name"
                      value={formData.firstName}
                      onChange={handleChange}
                      error={!!errors.first_name}
                      helperText={errors.first_name}
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      size="small"
                      label="Last Name"
                      value={formData.last_name}
                      onChange={handleChange}
                      name="last_name"
                      variant="outlined"
                      fullWidth
                    />
                  </Stack>
                  <TextField
                    size="small"
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    size="small"
                    label="City"
                    value={formData.city}
                    onChange={handleChange}
                    name="city"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    size="small"
                    label="State"
                    name="state"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    size="small"
                    label="Zip / Postal Code"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    size="small"
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    size="small"
                    label="Email Address"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                  />
                </CardContent>
              </Card>
              {/* Secure Payment Card */}
              <Card
                sx={{
                  maxWidth: 700,
                  width: "100%",
                  border: "2px solid #bdbdbd",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  backgroundColor: "#fafafa",
                }}
              >
                <CardContent>
                  {/* Phần tiêu đề */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <LockIcon color="action" />
                    <Typography variant="h6">Secure Payment</Typography>
                  </Box>
                  {/* Menu chọn loại thẻ */}
                  <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                    <InputLabel id="card-type-select-label">
                      Card Type
                    </InputLabel>
                    <Select
                      labelId="card-type-select-label"
                      label="Card Type"
                      defaultValue="visa"
                    >
                      <MenuItem value={"visa"}>Visa</MenuItem>
                      <MenuItem value={"mastercard"}>MasterCard</MenuItem>
                      <MenuItem value={"amex"}>American Express</MenuItem>
                      <MenuItem value={"discover"}>Discover</MenuItem>
                    </Select>
                  </FormControl>
                  {/* Ô nhập số thẻ */}
                  <TextField
                    label="Credit Card Number"
                    variant="outlined"
                    fullWidth
                    size="small"
                    sx={{ mb: 2 }}
                  />
                  {/* Ô nhập CVV */}
                  <TextField
                    label="Card CVV"
                    variant="outlined"
                    fullWidth
                    size="small"
                    sx={{ mb: 2 }}
                  />
                  {/* Menu chọn Tháng và Năm */}
                  <Typography variant="body2" color="text.secondary">
                    Expiration Date
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mb: 2, mt: 1 }}>
                    <FormControl fullWidth size="small">
                      <InputLabel id="month-select-label">Month</InputLabel>
                      <Select
                        labelId="month-select-label"
                        label="Month"
                        defaultValue={1}
                      >
                        <MenuItem value={1}>01</MenuItem>
                        <MenuItem value={2}>02</MenuItem>
                        <MenuItem value={3}>03</MenuItem>
                        <MenuItem value={4}>04</MenuItem>
                        <MenuItem value={5}>05</MenuItem>
                        <MenuItem value={6}>06</MenuItem>
                        <MenuItem value={7}>07</MenuItem>
                        <MenuItem value={8}>08</MenuItem>
                        <MenuItem value={9}>09</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth size="small">
                      <InputLabel id="year-select-label">Year</InputLabel>
                      <Select
                        labelId="year-select-label"
                        label="Year"
                        defaultValue={2025}
                      >
                        <MenuItem value={2023}>2023</MenuItem>
                        <MenuItem value={2024}>2024</MenuItem>
                        <MenuItem value={2025}>2025</MenuItem>
                        <MenuItem value={2026}>2026</MenuItem>
                        <MenuItem value={2027}>2027</MenuItem>
                        <MenuItem value={2028}>2028</MenuItem>
                        <MenuItem value={2029}>2029</MenuItem>
                        <MenuItem value={2030}>2030</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Pay secure using your credit card.
                    </Typography>
                    {/* Logo các loại thẻ nằm phía dưới dòng chữ */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mt: 1,
                      }}
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                        alt="Visa"
                        style={{ height: 28, width: "auto" }}
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                        alt="MasterCard"
                        style={{ height: 28, width: "auto" }}
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
                        style={{ height: 28, width: "auto" }}
                      />
                    </Box>
                  </Box>
                  {/* Nút bấm đặt hàng */}
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onSubmit={handleSubmit}
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Place Order
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          {/* Right: Review Order */}
          <Grid item xs={12} md={7}>
            <Paper
              sx={{
                mb: 4,
                border: "2px solid #bdbdbd",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                backgroundColor: "#fafafa",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ width: "45%" }}>Product Name</TableCell>
                    <TableCell sx={{ width: "15%" }}>Unit Price</TableCell>
                    <TableCell sx={{ width: "15%" }}>Quantity</TableCell>
                    <TableCell sx={{ width: "15%" }}>Total</TableCell>
                    {/* Thêm dòng chữ Remove vào cột xóa */}
                    <TableCell sx={{ width: "10%" }} align="center">
                      Remove
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} align="center">
                        No products in cart.
                      </TableCell>
                    </TableRow>
                  ) : (
                    cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                            }}
                          >
                            <Box
                              sx={{
                                width: 48,
                                height: 48,
                                borderRadius: 2,
                                overflow: "hidden",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                                mr: 2,
                              }}
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </Box>
                            <Typography variant="subtitle1">
                              {item.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1" fontWeight={500}>
                            ${item.price}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1">
                            {item.quantity}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body1" fontWeight={500}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <IconButton
                            color="error"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            <DeleteOutlineIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Checkout;
