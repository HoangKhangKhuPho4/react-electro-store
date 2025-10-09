import {
  CheckCircle as CheckIcon,
  Error as ErrorIcon,
  FileDownload as ExportIcon,
  FilterList as FilterIcon,
  HourglassEmpty as PendingIcon,
  Search as SearchIcon,
  Visibility as ViewIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AdminLayout from "../../components/Admin-Layout/AdminLayout";

// Mock data đơn hàng
const mockOrders = [
  {
    id: "ORDER011",
    orderDate: "10/03/2021 11:53:36",
    customer: {
      name: "Minh Hoàng",
      phone: "0909090909",
      address: "341 Cao Đạt, Quận 5, TP. Hồ Chí Minh",
    },
    products: [
      {
        name: "Chuối chả",
        quantity: 1,
        price: 15000,
      },
    ],
    totalAmount: 15000,
    paymentStatus: "paid", // paid, pending, failed
    orderStatus: "delivered", // processing, shipped, delivered, cancelled
    paymentMethod: "Thu tiền tận nơi - COD",
  },
  {
    id: "ORDER010",
    orderDate: "23/10/2020 11:57:15",
    customer: {
      name: "Nguyễn Văn A",
      phone: "0397711983",
      address: "test, Quận 2, TP. Hồ Chí Minh",
    },
    products: [
      {
        name: "Giày nữ cao gót vương",
        quantity: 1,
        price: 280000,
      },
    ],
    totalAmount: 280000,
    paymentStatus: "paid",
    orderStatus: "delivered",
    paymentMethod: "Thu tiền tận nơi - COD",
  },
  {
    id: "ORDER009",
    orderDate: "15/09/2024 14:30:22",
    customer: {
      name: "Trần Thị B",
      phone: "0912345678",
      address: "123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
    },
    products: [
      {
        name: "iPhone 15 Pro Max",
        quantity: 1,
        price: 29990000,
      },
    ],
    totalAmount: 29990000,
    paymentStatus: "pending",
    orderStatus: "processing",
    paymentMethod: "Chuyển khoản ngân hàng",
  },
  {
    id: "ORDER008",
    orderDate: "12/09/2024 09:15:45",
    customer: {
      name: "Lê Văn C",
      phone: "0987654321",
      address: "456 Lê Lợi, Quận 3, TP. Hồ Chí Minh",
    },
    products: [
      {
        name: "MacBook Pro 14inch M3",
        quantity: 1,
        price: 52990000,
      },
    ],
    totalAmount: 52990000,
    paymentStatus: "failed",
    orderStatus: "cancelled",
    paymentMethod: "Thẻ tín dụng",
  },
  {
    id: "ORDER007",
    orderDate: "08/09/2024 16:45:12",
    customer: {
      name: "Phạm Thị D",
      phone: "0901234567",
      address: "789 Điện Biên Phủ, Quận Bình Thạnh, TP. Hồ Chí Minh",
    },
    products: [
      {
        name: "Samsung Galaxy S24 Ultra",
        quantity: 1,
        price: 31990000,
      },
    ],
    totalAmount: 31990000,
    paymentStatus: "paid",
    orderStatus: "shipped",
    paymentMethod: "Ví điện tử MoMo",
  },
];

const OrderManagementPage = () => {
  const [orders] = useState(mockOrders);
  const [searchQuery, setSearchQuery] = useState("");
  const [paymentStatusFilter, setPaymentStatusFilter] = useState("all");
  const [orderStatusFilter, setOrderStatusFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Filter orders
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.phone.includes(searchQuery);

    const matchesPaymentStatus =
      paymentStatusFilter === "all" ||
      order.paymentStatus === paymentStatusFilter;

    const matchesOrderStatus =
      orderStatusFilter === "all" || order.orderStatus === orderStatusFilter;

    return matchesSearch && matchesPaymentStatus && matchesOrderStatus;
  });

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  // Get payment status config
  const getPaymentStatusConfig = (status) => {
    switch (status) {
      case "paid":
        return {
          label: "Đã thanh toán",
          color: "success",
          icon: <CheckIcon fontSize="small" />,
        };
      case "pending":
        return {
          label: "Chờ thanh toán",
          color: "warning",
          icon: <PendingIcon fontSize="small" />,
        };
      case "failed":
        return {
          label: "Thanh toán thất bại",
          color: "error",
          icon: <ErrorIcon fontSize="small" />,
        };
      default:
        return {
          label: "Không xác định",
          color: "default",
          icon: null,
        };
    }
  };

  // Get order status config
  const getOrderStatusConfig = (status) => {
    switch (status) {
      case "processing":
        return { label: "Đang xử lý", color: "info" };
      case "shipped":
        return { label: "Đang giao", color: "warning" };
      case "delivered":
        return { label: "Đã giao", color: "success" };
      case "cancelled":
        return { label: "Đã hủy", color: "error" };
      default:
        return { label: "Không xác định", color: "default" };
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleExportOrders = () => {
    // TODO: Implement export functionality
    console.log("Xuất file đơn hàng...");
  };

  return (
    <AdminLayout currentPage="Đơn hàng">
      <Box sx={{ p: 3 }}>
        {/* Header Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Quản Lý Đơn Hàng
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Theo dõi và quản lý tất cả đơn hàng từ khách hàng
          </Typography>
        </Box>

        {/* Toolbar */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Toolbar sx={{ px: 0 }}>
              {/* Search */}
              <TextField
                placeholder="Tìm theo mã đơn, tên khách hàng, SĐT..."
                variant="outlined"
                size="small"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ minWidth: 350, mr: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Payment Status Filter */}
              <FormControl size="small" sx={{ minWidth: 180, mr: 2 }}>
                <InputLabel>Trạng thái thanh toán</InputLabel>
                <Select
                  value={paymentStatusFilter}
                  label="Trạng thái thanh toán"
                  onChange={(e) => setPaymentStatusFilter(e.target.value)}
                  startAdornment={<FilterIcon sx={{ mr: 1 }} />}
                >
                  <MenuItem value="all">Tất cả</MenuItem>
                  <MenuItem value="paid">Đã thanh toán</MenuItem>
                  <MenuItem value="pending">Chờ thanh toán</MenuItem>
                  <MenuItem value="failed">Thanh toán thất bại</MenuItem>
                </Select>
              </FormControl>

              {/* Order Status Filter */}
              <FormControl size="small" sx={{ minWidth: 150, mr: 2 }}>
                <InputLabel>Trạng thái đơn</InputLabel>
                <Select
                  value={orderStatusFilter}
                  label="Trạng thái đơn"
                  onChange={(e) => setOrderStatusFilter(e.target.value)}
                >
                  <MenuItem value="all">Tất cả</MenuItem>
                  <MenuItem value="processing">Đang xử lý</MenuItem>
                  <MenuItem value="shipped">Đang giao</MenuItem>
                  <MenuItem value="delivered">Đã giao</MenuItem>
                  <MenuItem value="cancelled">Đã hủy</MenuItem>
                </Select>
              </FormControl>

              <Box sx={{ flexGrow: 1 }} />

              {/* Export Button */}
              <Button
                variant="outlined"
                startIcon={<ExportIcon />}
                onClick={handleExportOrders}
                sx={{
                  borderColor: "#ff9f1a",
                  color: "#ff9f1a",
                  "&:hover": {
                    borderColor: "#e68a00",
                    bgcolor: "rgba(255, 159, 26, 0.04)",
                  },
                }}
              >
                Xuất file
              </Button>
            </Toolbar>
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <input type="checkbox" style={{ marginRight: 8 }} />
                      Đơn hàng
                    </Box>
                  </TableCell>
                  <TableCell>Ngày đặt</TableCell>
                  <TableCell>Khách hàng</TableCell>
                  <TableCell>Sản phẩm</TableCell>
                  <TableCell align="right">Tổng tiền</TableCell>
                  <TableCell align="center">Hình thức thanh toán</TableCell>
                  <TableCell align="center">Thanh toán</TableCell>
                  <TableCell align="center">Trạng thái</TableCell>
                  <TableCell align="center">Thao tác</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredOrders
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((order) => {
                    const paymentStatusConfig = getPaymentStatusConfig(
                      order.paymentStatus
                    );
                    const orderStatusConfig = getOrderStatusConfig(
                      order.orderStatus
                    );

                    return (
                      <TableRow key={order.id} hover>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <input type="checkbox" />
                            <Typography
                              variant="subtitle2"
                              fontWeight="medium"
                              color="primary"
                              sx={{ cursor: "pointer" }}
                            >
                              #{order.id}
                            </Typography>
                          </Box>
                        </TableCell>

                        <TableCell>
                          <Typography variant="body2">
                            {order.orderDate}
                          </Typography>
                        </TableCell>

                        <TableCell>
                          <Box>
                            <Typography variant="subtitle2" fontWeight="medium">
                              {order.customer.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              Điện thoại: {order.customer.phone}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                              display="block"
                            >
                              Địa chỉ: {order.customer.address}
                            </Typography>
                          </Box>
                        </TableCell>

                        <TableCell>
                          <Box>
                            {order.products.map((product, index) => (
                              <Typography key={index} variant="body2">
                                {product.name} - {product.quantity}
                              </Typography>
                            ))}
                          </Box>
                        </TableCell>

                        <TableCell align="right">
                          <Typography variant="subtitle2" fontWeight="bold">
                            {formatPrice(order.totalAmount)}
                          </Typography>
                        </TableCell>

                        <TableCell align="center">
                          <Typography variant="body2">
                            {order.paymentMethod}
                          </Typography>
                        </TableCell>

                        <TableCell align="center">
                          <Chip
                            icon={paymentStatusConfig.icon}
                            label={paymentStatusConfig.label}
                            size="small"
                            color={paymentStatusConfig.color}
                          />
                        </TableCell>

                        <TableCell align="center">
                          <Chip
                            label={orderStatusConfig.label}
                            size="small"
                            color={orderStatusConfig.color}
                          />
                        </TableCell>

                        <TableCell align="center">
                          <IconButton
                            size="small"
                            color="primary"
                            title="Xem chi tiết"
                          >
                            <ViewIcon fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <TablePagination
            component="div"
            count={filteredOrders.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
            labelRowsPerPage="Số dòng mỗi trang:"
            labelDisplayedRows={({ from, to, count }) =>
              `${from}–${to} của ${count !== -1 ? count : `hơn ${to}`}`
            }
          />
        </Card>
      </Box>
    </AdminLayout>
  );
};

export default OrderManagementPage;
