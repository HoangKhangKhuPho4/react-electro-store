import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ProfileMenu from "../../components/Profile-Menu/ProfileMenu.jsx";

// Import all necessary icons
import { useState } from "react";

// --- Component 3: Phần Avatar và tải ảnh lên (moved before ProfilePage) ---
const AvatarUploadSection = () => {
  return (
    <Paper
      sx={{
        p: 4,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Avatar
        sx={{
          width: 100,
          height: 100,
          bgcolor: "#673ab7",
          fontSize: "3rem",
          mb: 2,
          mt: 7, // Đẩy avatar xuống ngang với trường tên đăng nhập
        }}
      >
        K
      </Avatar>
      <Button variant="outlined">Chọn Ảnh</Button>
      <Typography variant="caption" color="text.secondary" textAlign="center">
        Dung lượng file tối đa 1 MB
      </Typography>
      <Typography variant="caption" color="text.secondary" textAlign="center">
        Định dạng: .JPEG, .PNG
      </Typography>
    </Paper>
  );
};

// --- Component 2: Form ở giữa ---
const ProfileForm = () => {
  // Khai báo state cho form
  const [formData, setFormData] = useState({
    day: 1,
    month: 1,
    year: 2000,
  });

  // Tạo danh sách ngày, tháng, năm
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  // Hàm xử lý thay đổi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Paper sx={{ p: 4, height: "100%" }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Hồ Sơ Của Tôi
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Quản lý thông tin hồ sơ để bảo mật tài khoản
      </Typography>
      <TextField
        label="Tên đăng nhập"
        defaultValue="_a71zjxrrb"
        disabled
        helperText="Tên đăng nhập chỉ có thể thay đổi một lần."
        fullWidth
        margin="normal"
      />
      <TextField label="Tên" defaultValue="Khang" fullWidth margin="normal" />
      <Box sx={{ display: "flex", alignItems: "center", my: "16px" }}>
        <Typography sx={{ flexGrow: 1 }}>
          Email: ho********@gmail.com
        </Typography>
        <Link href="#" underline="always">
          Thay Đổi
        </Link>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", my: "16px" }}>
        <Typography sx={{ flexGrow: 1 }}>
          Số điện thoại: **********06
        </Typography>
        <Link href="#" underline="always">
          Thay Đổi
        </Link>
      </Box>
      <FormControl margin="normal">
        <FormLabel>Giới tính</FormLabel>
        <RadioGroup row>
          <FormControlLabel value="male" control={<Radio />} label="Nam" />
          <FormControlLabel value="female" control={<Radio />} label="Nữ" />
          <FormControlLabel value="other" control={<Radio />} label="Khác" />
        </RadioGroup>
      </FormControl>
      <Box sx={{ display: "flex", gap: 2, mt: 2, mb: 4 }}>
        <FormControl fullWidth>
          <InputLabel>Ngày</InputLabel>
          <Select
            label="Ngày"
            name="day"
            value={formData.day}
            onChange={handleChange}
          >
            {days.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Tháng</InputLabel>
          <Select
            label="Tháng"
            name="month"
            value={formData.month}
            onChange={handleChange}
          >
            {months.map((month) => (
              <MenuItem key={month} value={month}>
                {`Tháng ${month}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Năm</InputLabel>
          <Select
            label="Năm"
            name="year"
            value={formData.year}
            onChange={handleChange}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ee4d2d",
            "&:hover": { backgroundColor: "#d73112" },
            px: 5,
          }}
        >
          Lưu
        </Button>
      </Box>
    </Paper>
  );
};

// --- Component chính: Sắp xếp 3 component vào Grid ---
const ProfilePage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        backgroundColor: "#f9f9f9",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={0} sx={{ maxWidth: 1200 }}>
        {/* Cột 1: Menu */}
        <Grid item xs={12} md={3}>
          {/* Và sử dụng nó ở đây */}
          <ProfileMenu activePage="Hồ Sơ" />
        </Grid>
        {/* Cột 2: Form */}
        <Grid item xs={12} md={6}>
          <ProfileForm />
        </Grid>
        {/* Cột 3: Avatar */}
        <Grid item xs={12} md={3}>
          <AvatarUploadSection />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
