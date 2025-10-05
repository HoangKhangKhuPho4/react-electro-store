import {
  ExitToApp as LogoutIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon, // <-- Thêm import icon tìm kiếm
  Settings as SettingsIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box, // <-- Thêm Box
  IconButton,
  InputAdornment, // <-- Thêm InputAdornment
  ListItemIcon,
  Menu,
  MenuItem,
  TextField, // <-- Thêm TextField
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DRAWER_WIDTH = 280;
const COLLAPSED_WIDTH = 80;

const AdminHeader = ({
  currentPage,
  onDrawerToggle,
  onSidebarToggle,
  sidebarCollapsed,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleProfileMenuClose();
    navigate("/login");
  };

  const handleSettings = () => {
    handleProfileMenuClose();
    navigate("/admin/settings");
  };

  const drawerWidth = sidebarCollapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH;

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, md: `${drawerWidth}px` },
        background: "#FFFFFF", // <-- Đổi nền thành trắng cho giống mẫu
        color: "#555", // <-- Đổi màu chữ/icon
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        transition: "margin-left 0.3s ease, width 0.3s ease",
      }}
    >
      <Toolbar sx={{ minHeight: "64px !important", px: 3 }}>
        {/* Nút Menu giờ sẽ luôn hiển thị */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerToggle}
          sx={{ mr: 2, display: { xs: "block", md: "none" } }} // <-- Hiển thị trên thiết bị di động
        >
          <MenuIcon />
        </IconButton>

        {/* Nút chuyển đổi thanh bên (sidebar) chỉ hiển thị trên màn hình lớn */}
        <IconButton
          color="inherit"
          aria-label="toggle sidebar"
          edge="start"
          onClick={onSidebarToggle}
          sx={{ mr: 2, display: { xs: "none", md: "block" } }} // <-- Ẩn trên thiết bị di động
        >
          <MenuIcon />
        </IconButton>

        {/* Thanh tìm kiếm mới */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search or type command..."
          sx={{
            width: 350,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              backgroundColor: "#f5f5f5",
              "& fieldset": { border: "none" },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Box này sẽ đẩy các icon còn lại sang phải */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Các icon bên phải (giữ nguyên) */}
        <IconButton color="inherit" sx={{ mr: 2 }}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton onClick={handleProfileMenuOpen} sx={{ p: 0 }}>
          <Avatar sx={{ bgcolor: "#ff9f1a", width: 40, height: 40 }}>A</Avatar>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleProfileMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleSettings}>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            Cài đặt tài khoản
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Đăng xuất
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
