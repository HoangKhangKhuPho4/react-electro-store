import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import loginSuccess from "../../redux/appSlice";
const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  //Thay Thế 2 useState bằng useForm
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //Bước 1: validate
    if (values.email === "" || values.password === "") {
      alert("Vui Lòng Nhập Đầy đủ Thông Tin");
      return;
    }

    //Bước 2 : giả Lập Kiểm Tra Tài Khoản chỉ chạy nếu validate thành công
    const correctEmail = "hoangkhang@gmail.com";
    const correctPassword = "123456";

    if (values.email === correctEmail && values.password === correctPassword) {
      //Thay Thế console.log(" ") bằng dispatch và redirect về home-page
      console.log("Login Success");
      dispatch(
        loginSuccess({
          name: "Test User",
          email: values.email,
        })
      );
      // Thêm chuyển hướng về trang chủ nếu muốn
      // navigate("/");
    } else {
      alert("Sai Email Hoặc Mật Khẩu");
    }

    //logic xử lý(connect Backend)
    //giả lập Backend
    console.log("Attempting to login with: ");
    console.log("Email: ", values.email);
    console.log("Password", values.password);
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
          name="email"
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
          value={values.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
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
          value={values.password}
          onChange={handleChange}
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
