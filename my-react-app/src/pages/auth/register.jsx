import {
  Box,
  Button, // Đã thêm Button
  Card,
  Checkbox, // Đã thêm Checkbox
  FormControlLabel, // Đã thêm FormControlLabel
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom"; // Giả định bạn sẽ cần Link để quay về Login

const Register = () => {
  // Bạn có thể thêm useState cho các trường ở đây
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    // THAY THẾ <section> VÀ CÁC <div> CONTAINER BẰNG BOX CỦA MUI
    <Box
      sx={{
        backgroundColor: "#eee",
        minHeight: "100vh", // Giống vh-100
        display: "flex",
        justifyContent: "center", // Căn giữa theo chiều ngang
        alignItems: "center", // Căn giữa theo chiều dọc
        p: 2,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1100 }}>
        <Card sx={{ borderRadius: 6, p: { xs: 2, md: 5 } }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* Vùng Form (col-md-10 col-lg-6) */}
            <Box
              sx={{
                width: { md: "45%", xs: "100%" },
                order: { xs: 2, lg: 1 },
                pr: { md: 3 },
              }}
            >
              <Typography
                variant="h4"
                align="center"
                sx={{ mb: 5, mt: 4, fontWeight: "bold" }}
              >
                Sign up
              </Typography>

              <form>
                {/* 4 TRƯỜNG TEXTFIELD ĐÃ CHUYỂN ĐỔI */}
                <TextField
                  label="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 4 }}
                />
                <TextField
                  label="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 4 }}
                />
                <TextField
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 4 }}
                />
                <TextField
                  label="Repeat your password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  type="password"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 4 }}
                />

                {/* THAY THẾ CHECKBOX HTML BẰNG MUI */}
                <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        color="primary"
                      />
                    }
                    label={
                      <Typography variant="body2">
                        I agree all statements in{" "}
                        <a
                          href="#!"
                          style={{ color: "primary", textDecoration: "none" }}
                        >
                          Terms of service
                        </a>
                      </Typography>
                    }
                  />
                </Box>

                {/* THAY THẾ BUTTON HTML BẰNG MUI */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mx: 4,
                    mb: 3,
                    mb: "lg:4",
                  }}
                >
                  <Button
                    type="submit" // Đổi thành submit nếu bạn dùng form submission
                    variant="contained" // Giống btn-primary
                    color="primary"
                    size="large" // Giống btn-lg
                    fullWidth
                  >
                    Register
                  </Button>
                </Box>

                {/* Quay lại Login */}
                <Box sx={{ textAlign: "center", mt: 3 }}>
                  <Typography variant="body2">
                    Already have an account?{" "}
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      Sign In
                    </Link>
                  </Typography>
                </Box>
              </form>
            </Box>

            {/* Vùng Hình ảnh (col-md-10 col-lg-6) */}
            <Box
              sx={{
                width: { md: "45%", xs: "100%" },
                order: { xs: 1, lg: 2 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: { xs: 3, md: 0 },
              }}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                alt="Sample image"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Register;
