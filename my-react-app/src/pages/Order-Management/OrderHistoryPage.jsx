import {
  Avatar,
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import ProfileMenu from "../../components/Profile-Menu/ProfileMenu.jsx";

// --- 1. Dữ liệu mẫu cho các đơn hàng ---
const dummyOrders = [
  {
    id: "DH001",
    date: "2025-10-04",
    status: "Đã giao",
    total: 540,
    items: [
      {
        name: "Men's Shoes Fashion",
        image: "https://placekitten.com/800/504",
        quantity: 1,
        price: 180,
      },
      {
        name: "Classic Leather Watch",
        image: "https://placekitten.com/801/504",
        quantity: 2,
        price: 180,
      },
    ],
  },
  {
    id: "DH002",
    date: "2025-10-01",
    status: "Đang xử lý",
    total: 360,
    items: [
      {
        name: "Wireless Bluetooth Headphones",
        image: "https://placekitten.com/802/504",
        quantity: 2,
        price: 180,
      },
    ],
  },
  {
    id: "DH003",
    date: "2025-09-25",
    status: "Đã hủy",
    total: 180,
    items: [
      {
        name: "Men's Shoes Fashion",
        image: "https://placekitten.com/800/504",
        quantity: 1,
        price: 180,
      },
    ],
  },
  {
    id: "DH004",
    date: "2025-09-20",
    status: "Đang giao",
    total: 720,
    items: [
      {
        name: "Classic Leather Watch",
        image: "https://placekitten.com/801/504",
        quantity: 4,
        price: 180,
      },
    ],
  },
];

// --- 2. Component hiển thị danh sách đơn hàng ---
const OrderList = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const statusTabs = ["Tất cả", "Đang xử lý", "Đang giao", "Đã giao", "Đã hủy"];

  // Lọc đơn hàng dựa trên tab đang hoạt động
  const filteredOrders = useMemo(() => {
    if (activeTab === 0) return dummyOrders; // Tab "Tất cả"
    const currentStatus = statusTabs[activeTab];
    return dummyOrders.filter((order) => order.status === currentStatus);
  }, [activeTab]);

  const getStatusChipColor = (status) => {
    switch (status) {
      case "Đã giao":
        return "success";
      case "Đang giao":
        return "info";
      case "Đang xử lý":
        return "warning";
      case "Đã hủy":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Paper sx={{ p: { xs: 2, md: 6 } }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Đơn Hàng Của Tôi
      </Typography>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}
      >
        {statusTabs.map((label) => (
          <Tab label={label} key={label} />
        ))}
      </Tabs>

      {/* Danh sách các đơn hàng */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <Paper key={order.id} variant="outlined" sx={{ p: 3 }}>
              {/* Header của đơn hàng */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Mã đơn: <strong>{order.id}</strong> | Ngày: {order.date}
                </Typography>
                <Chip
                  label={order.status}
                  color={getStatusChipColor(order.status)}
                  size="small"
                />
              </Box>
              <Divider />

              {/* Danh sách sản phẩm trong đơn */}
              {order.items.map((item, index) => (
                <Box
                  key={index}
                  // 1. Thêm justifyContent: 'space-between'
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    my: 2,
                    alignItems: "center",
                  }}
                >
                  {/* 2. Nhóm Ảnh và Chữ vào trong một Box */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      src={item.image}
                      variant="rounded"
                      sx={{ width: 60, height: 60 }}
                    />
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="body1">{item.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        x{item.quantity}
                      </Typography>
                    </Box>
                  </Box>

                  {/* 3. Phần giá tiền nằm riêng lẻ */}
                  <Typography variant="body2" color="text.secondary">
                    ${item.price.toFixed(2)}
                  </Typography>
                </Box>
              ))}
              <Divider />

              {/* Tổng tiền */}
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Typography variant="h6">
                  Thành tiền:{" "}
                  <Box component="span" sx={{ color: "primary.main" }}>
                    ${order.total.toFixed(2)}
                  </Box>
                </Typography>
              </Box>
            </Paper>
          ))
        ) : (
          <Typography textAlign="center" color="text.secondary" sx={{ mt: 5 }}>
            Không có đơn hàng nào trong mục này.
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

// --- 3. Component Trang chính ---
const OrderHistoryPage = () => {
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
        {/* Cột 1: Menu - Tái sử dụng ProfileMenu */}
        <Grid item xs={12} md={3}>
          <ProfileMenu activePage="Đơn Hàng" />
        </Grid>

        <Grid item xs={12} md={2}>
          {" "}
        </Grid>

        <Grid item xs={12} md={7}>
          {" "}
          {/* <-- Giảm chiều rộng để nhường chỗ */}
          <OrderList />
        </Grid>

        {/* Cột 2: Nội dung chính */}
      </Grid>
    </Box>
  );
};

export default OrderHistoryPage;
