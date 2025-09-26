import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux"; // Bước 1
import { Link, useNavigate } from "react-router-dom"; // <-- THÊM 'Link' vào đâyimport loginSuccess from "../../redux/appSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //Bước 1: validate
    if (email === "" || password === null) {
      alert("Vui Lòng Nhập Đầy đủ Thông Tin");
      return;
    }

    //Bước 2 : giả Lập Kiểm Tra Tài Khoản chỉ chạy nếu validate thành công
    const correctEmail = "hoangkhang@gmail.com";
    const correctPassword = "123456";

    if (email === correctEmail && password === correctPassword) {
      //Thay Thế console.log(" ") bằng dispatch và redirect về home-page
      console.log("Login Success");
      dispatch(
        loginSuccess({
          name: "Test User",
          email: email,
        })
      );
    } else {
      alert("Sai Email Hoặc Mật Khẩu");
    }

    //logic xử lý(connect Backend)
    //giả lập Backend
    console.log("Attempting to login with: ");
    console.log("Email: ", email);
    console.log("Password", password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage:
          "url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card
        sx={{
          p: 4,
          width: 400,
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
        }}
      >
        <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
          Sign In
        </Typography>

        <TextField
          label="Username"
          variant="filled"
          fullWidth
          sx={{
            mb: 2,
            "& .MuiFilledInput-root": {
              backgroundColor: "white", // Trạng thái mặc định
              // Thêm đoạn này
              "&:hover": {
                backgroundColor: "white", // Giữ nền trắng khi hover
              },
              "&.Mui-focused": {
                backgroundColor: "white", // Giữ nền trắng khi focus (click vào)
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "black",
            },
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="filled"
          fullWidth
          sx={{
            mb: 2,
            "& .MuiFilledInput-root": {
              backgroundColor: "white", // Trạng thái mặc định
              // Thêm đoạn này
              "&:hover": {
                backgroundColor: "white", // Giữ nền trắng khi hover
              },
              "&.Mui-focused": {
                backgroundColor: "white", // Giữ nền trắng khi focus (click vào)
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "black",
            },
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FormControlLabel
          control={
            <Checkbox
              value="remember"
              sx={{ color: "white", "&.Mui-checked": { color: "#FFC312" } }}
            />
          }
          label="Remember Me"
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: "#FFC312",
            color: "black",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
          onClick={handleSubmit}
        >
          Login
        </Button>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body2">
            Don't have an account?{" "}
            <Link
              to="/register" // Đổi href thành to
              style={{ color: "#FFC312", textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <a
              href="/forgot-password"
              style={{ color: "white", textDecoration: "none" }}
            >
              Forgot your password?
            </a>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Login;
