import {
  AccountCircleOutlined as AccountCircleOutlinedIcon,
  DescriptionOutlined as DescriptionOutlinedIcon,
  NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
  PaymentOutlined as PaymentOutlinedIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Component giờ đây nhận vào một prop tên là `activePage`
const ProfileMenu = ({ activePage }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Paper sx={{ borderRadius: 2, height: "100%" }}>
      <List sx={{ p: 1 }}>
        {/* Avatar và thông tin cá nhân */}
        <ListItem
          sx={{ flexDirection: "column", alignItems: "flex-start", py: 2 }}
        >
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Avatar sx={{ width: 48, height: 48, bgcolor: "#673ab7", mr: 2 }}>
              K
            </Avatar>
            <div>
              <Typography variant="subtitle1" fontWeight="bold">
                Khang
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chỉnh sửa hồ sơ
              </Typography>
            </div>
          </div>
        </ListItem>

        <Divider sx={{ my: 1 }} />

        <ListItem disablePadding>
          <ListItemButton selected={activePage === "Thông Báo"}>
            <ListItemIcon sx={{ minWidth: 40, color: "#ff6f61" }}>
              <NotificationsNoneOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Thông Báo" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton selected={activePage === "Tài Khoản Của Tôi"}>
            <ListItemIcon sx={{ minWidth: 40, color: "#42a5f5" }}>
              <AccountCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Tài Khoản Của Tôi" />
          </ListItemButton>
        </ListItem>

        {/* Sub-items cho Tài Khoản */}
        <ListItem disablePadding sx={{ pl: 2 }}>
          <ListItemButton selected={activePage === "Hồ Sơ"}>
            <ListItemText
              primary="Hồ Sơ"
              sx={{ color: activePage === "Hồ Sơ" ? "#ee4d2d" : "inherit" }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ pl: 2 }}>
          <ListItemButton selected={activePage === "Ngân Hàng"}>
            <ListItemText primary="Ngân Hàng" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ pl: 2 }}>
          <ListItemButton selected={activePage === "Địa Chỉ"}>
            <ListItemText primary="Địa Chỉ" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ pl: 2 }}>
          <ListItemButton selected={activePage === "Đổi Mật Khẩu"}>
            <ListItemText primary="Đổi Mật Khẩu" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            selected={activePage === "Đơn Mua"}
            onClick={() => handleNavigation("/user/orders")}
          >
            <ListItemIcon sx={{ minWidth: 40, color: "#42a5f5" }}>
              <DescriptionOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Đơn Mua" />
          </ListItemButton>
        </ListItem>

        {/* Sub-items cho Đơn Mua */}
        <ListItem disablePadding sx={{ pl: 4 }}>
          <ListItemButton
            selected={activePage === "Tất Cả Đơn"}
            onClick={() => handleNavigation("/user/orders?status=all")}
          >
            <ListItemText primary="Tất Cả Đơn" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ pl: 4 }}>
          <ListItemButton
            selected={activePage === "Chờ Xác Nhận"}
            onClick={() => handleNavigation("/user/orders?status=pending")}
          >
            <ListItemText primary="Chờ Xác Nhận" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{ pl: 4 }}>
          <ListItemButton
            selected={activePage === "Đang Giao"}
            onClick={() => handleNavigation("/user/orders?status=shipping")}
          >
            <ListItemText primary="Đang Giao" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton selected={activePage === "Kho Voucher"}>
            <ListItemIcon sx={{ minWidth: 40, color: "#ff9800" }}>
              <PaymentOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Kho Voucher" />
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  );
};

export default ProfileMenu;
