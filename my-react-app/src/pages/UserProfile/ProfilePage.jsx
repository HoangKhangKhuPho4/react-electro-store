import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";

// Import all necessary icons
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import EditIcon from "@mui/icons-material/Edit";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useState } from "react";

// --- Component 1: Menu bên trái ---
const ProfileMenu = () => {
  const accountSubItems = [
    "Hồ Sơ",
    "Ngân Hàng",
    "Địa Chỉ",
    "Đổi Mật Khẩu",
    "Cài Đặt Thông Báo",
    "Những Thiết Lập Riêng Tư",
    "Thông Tin Cá Nhân",
  ];

  const [formData, setFormData] = useState({
    name: "khang",
    gender: "male",
    day: 1,
    month: 1,
    year: 2000,
  });

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const month = Array.from({ length: 12 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <Paper sx={{ borderRadius: 2, height: "100%" }}>
      <List sx={{ p: 1 }}>
        <ListItem>
          <Avatar sx={{ bgcolor: "#673ab7", width: 48, height: 48, mr: 2 }}>
            K
          </Avatar>
          <ListItemText
            primary={
              <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                _a71zjxrrb
              </Typography>
            }
            secondary={
              <Typography
                component="span"
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "text.secondary",
                }}
              >
                <EditIcon sx={{ fontSize: 16, mr: 0.5 }} /> Sửa Hồ Sơ
              </Typography>
            }
          />
        </ListItem>
        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 40, color: "#ff6f61" }}>
              <NotificationsNoneOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Thông Báo" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 40, color: "#42a5f5" }}>
              <AccountCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Tài Khoản Của Tôi" />
          </ListItemButton>
        </ListItem>
        {accountSubItems.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ pl: "56px" }}>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ variant: "body2" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 40, color: "#42a5f5" }}>
              <DescriptionOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Đơn Mua" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 40, color: "#ff6f61" }}>
              <LocalOfferOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Kho Voucher" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 40, color: "#fdd835" }}>
              <MonetizationOnOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Shopee Xu" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 40, color: "#ee4d2d" }}>
              {/* Placeholder for 10.10 icon */}
              <Typography sx={{ fontWeight: "bold" }}>10.10</Typography>
            </ListItemIcon>
            <ListItemText primary="10.10 Đại Tiệc Thương Hiệu" />
            <Badge badgeContent="New" color="error" />
          </ListItemButton>
        </ListItem>
      </List>
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
const UserProfilePage = () => {
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
          <ProfileMenu />
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

// --- Component 3: Phần Avatar và tải ảnh lên ---
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

export default UserProfilePage;
