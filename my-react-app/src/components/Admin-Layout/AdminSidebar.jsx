import {
  BarChart as AnalyticsIcon,
  Dashboard as DashboardIcon,
  Inventory as InventoryIcon,
  ShoppingCart as OrdersIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  Store as StoreIcon, // Icon thương hiệu
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminSidebar = ({ currentPage, collapsed = false }) => {
  const navigate = useNavigate();

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/admin" },
    { text: "Sản phẩm", icon: <InventoryIcon />, path: "/admin/products" },
    { text: "Đơn hàng", icon: <OrdersIcon />, path: "/admin/orders" },
    { text: "Khách hàng", icon: <PeopleIcon />, path: "/admin/customers" },
    { text: "Thống kê", icon: <AnalyticsIcon />, path: "/admin/analytics" },
    { text: "Cài đặt", icon: <SettingsIcon />, path: "/admin/settings" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box>
      {/* Brand Header Section - Clean design */}
      <Box
        sx={{
          // --- THAY ĐỔI: Dùng py và px để kiểm soát khoảng cách tốt hơn ---
          py: 2, // Giảm padding dọc
          px: collapsed ? 2 : 3, // Giữ padding ngang
          backgroundColor: "#ffffff",
          textAlign: collapsed ? "center" : "left",
        }}
      >
        {collapsed ? (
          // Collapsed mode - Icon đơn giản
          <Avatar
            sx={{
              bgcolor: "#ff9f1a", // Màu cam
              color: "#ffffff", // Màu trắng cho icon
              width: 48,
              height: 48,
            }}
          >
            <StoreIcon />
          </Avatar>
        ) : (
          // Expanded mode - Clean layout
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Avatar
              sx={{
                bgcolor: "#ff9f1a", // ✅ Đổi thành màu cam giống collapsed
                color: "#ffffff", // ✅ Màu trắng cho icon
                width: 48,
                height: 48,
              }}
            >
              <StoreIcon />
            </Avatar>
            <Box>
              <Typography
                variant="h6"
                fontWeight={600}
                color="#333" // ✅ Sửa từ "##ff9f1a" thành "#333"
                sx={{ lineHeight: 1.2 }}
              >
                KhangAdmin
              </Typography>
              <Typography variant="caption" color="#666">
                {" "}
                {/* ✅ Sửa từ "##ff9f1a" thành "#666" */}
                ElectroShop Management
              </Typography>
            </Box>
          </Box>
        )}
      </Box>

      {/* Navigation Menu - Clean styling */}
      <List sx={{ pt: 2, backgroundColor: "#ffffff" }}>
        {" "}
        {/* ✅ Sửa từ "##ff9f1a" thành "#ffffff" */}
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{ px: collapsed ? 1 : 2, mb: 1 }}
          >
            <ListItemButton
              selected={currentPage === item.text}
              onClick={() => handleNavigation(item.path)}
              sx={{
                borderRadius: 2,
                minHeight: 48,
                justifyContent: collapsed ? "center" : "initial",
                px: collapsed ? 1 : 2,
                "&.Mui-selected": {
                  backgroundColor: "#f0f0f0", // ✅ Sửa từ "##ff9f1a" thành "#f0f0f0"
                  color: "#333",
                  "& .MuiListItemIcon-root": {
                    color: "#333",
                  },
                },
                "&:hover": {
                  backgroundColor: "#f8f8f8", // ✅ Sửa từ "##ff9f1a" thành "#f8f8f8"
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: collapsed ? 0 : 40,
                  mr: collapsed ? 0 : 1,
                  justifyContent: "center",
                  color: "#666", // Icon màu xám
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!collapsed && (
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: currentPage === item.text ? 600 : 400,
                    color: "#333",
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminSidebar;
