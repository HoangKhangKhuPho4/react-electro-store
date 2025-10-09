import {
  Add as AddIcon,
  GetApp as ExportIcon,
  History as HistoryIcon,
  TrendingUp as InIcon,
  TrendingDown as OutIcon,
  Search as SearchIcon,
  Warning as WarningIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AdminLayout from "../../components/Admin-Layout/AdminLayout";

// Mock data tồn kho
const mockInventory = [
  {
    id: 1,
    productName: "iPhone 15 Pro Max",
    sku: "IP15PM-256",
    currentStock: 25,
    minStock: 10,
    maxStock: 100,
    category: "Smartphone",
    location: "A1-01",
    lastUpdated: "2024-01-15",
    status: "in-stock",
    image: "https://via.placeholder.com/60x60?text=iPhone",
    costPrice: 25000000,
    retailPrice: 29990000,
  },
  {
    id: 2,
    productName: "MacBook Pro 14inch M3",
    sku: "MBP14-M3",
    currentStock: 5,
    minStock: 8,
    maxStock: 50,
    category: "Laptop",
    location: "B2-03",
    lastUpdated: "2024-01-10",
    status: "low-stock",
    image: "https://via.placeholder.com/60x60?text=MacBook",
    costPrice: 48000000,
    retailPrice: 52990000,
  },
  {
    id: 3,
    productName: "Samsung Galaxy S24 Ultra",
    sku: "SGS24U-512",
    currentStock: 0,
    minStock: 5,
    maxStock: 80,
    category: "Smartphone",
    location: "A1-05",
    lastUpdated: "2024-01-08",
    status: "out-of-stock",
    image: "https://via.placeholder.com/60x60?text=Galaxy",
    costPrice: 28000000,
    retailPrice: 31990000,
  },
  {
    id: 4,
    productName: "iPad Pro 12.9 inch",
    sku: "IPP129-256",
    currentStock: 18,
    minStock: 10,
    maxStock: 60,
    category: "Tablet",
    location: "C3-02",
    lastUpdated: "2024-01-05",
    status: "in-stock",
    image: "https://via.placeholder.com/60x60?text=iPad",
    costPrice: 22000000,
    retailPrice: 25990000,
  },
];

// Mock data lịch sử nhập/xuất
const mockHistory = [
  {
    id: 1,
    type: "in",
    productName: "iPhone 15 Pro Max",
    sku: "IP15PM-256",
    quantity: 50,
    date: "2024-01-15",
    user: "Nguyễn Văn A",
    note: "Nhập hàng từ nhà cung cấp Apple",
    reference: "PO-2024-001",
  },
  {
    id: 2,
    type: "out",
    productName: "MacBook Pro 14inch M3",
    sku: "MBP14-M3",
    quantity: -7,
    date: "2024-01-14",
    user: "Trần Thị B",
    note: "Xuất bán cho khách hàng",
    reference: "ORD-2024-156",
  },
  {
    id: 3,
    type: "out",
    productName: "Samsung Galaxy S24 Ultra",
    sku: "SGS24U-512",
    quantity: -12,
    date: "2024-01-12",
    user: "Lê Văn C",
    note: "Xuất bán số lượng lớn",
    reference: "ORD-2024-140",
  },
];

const InventoryManagementPage = () => {
  const [inventory] = useState(mockInventory);
  const [history] = useState(mockHistory);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentTab, setCurrentTab] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Filter inventory
  const filteredInventory = inventory.filter((item) => {
    const matchesSearch =
      item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;
    const matchesCategory =
      categoryFilter === "all" || item.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Get unique categories
  const categories = [...new Set(inventory.map((item) => item.category))];

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  // Get status config
  const getStatusConfig = (status, currentStock, minStock) => {
    if (currentStock === 0) {
      return { label: "Hết hàng", color: "error", bgColor: "#ffebee" };
    } else if (currentStock <= minStock) {
      return { label: "Sắp hết", color: "warning", bgColor: "#fff3e0" };
    } else {
      return { label: "Còn hàng", color: "success", bgColor: "#e8f5e8" };
    }
  };

  // Calculate statistics
  const totalProducts = inventory.length;
  const inStockProducts = inventory.filter(
    (item) => item.currentStock > item.minStock
  ).length;
  const lowStockProducts = inventory.filter(
    (item) => item.currentStock > 0 && item.currentStock <= item.minStock
  ).length;
  const outOfStockProducts = inventory.filter(
    (item) => item.currentStock === 0
  ).length;
  const totalValue = inventory.reduce(
    (sum, item) => sum + item.currentStock * item.costPrice,
    0
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <AdminLayout currentPage="Tồn kho">
      <Box sx={{ p: 3 }}>
        {/* Header Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Quản Lý Tồn Kho
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Theo dõi số lượng tồn kho, nhập/xuất hàng và cảnh báo hết hàng
          </Typography>
        </Box>

        {/* Statistics Cards */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", gap: 3, mb: 3 }}>
            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: "#e3f2fd",
                      color: "#1976d2",
                    }}
                  >
                    <AddIcon sx={{ fontSize: 32 }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                    >
                      Tổng sản phẩm
                    </Typography>
                    <Typography variant="h4" fontWeight="bold">
                      {totalProducts}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: "#e8f5e8",
                      color: "#2e7d32",
                    }}
                  >
                    <InIcon sx={{ fontSize: 32 }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                    >
                      Còn hàng
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" color="#2e7d32">
                      {inStockProducts}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: "#fff3e0",
                      color: "#f57c00",
                    }}
                  >
                    <WarningIcon sx={{ fontSize: 32 }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                    >
                      Sắp hết
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" color="#f57c00">
                      {lowStockProducts}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ flex: 1 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: "#ffebee",
                      color: "#d32f2f",
                    }}
                  >
                    <OutIcon sx={{ fontSize: 32 }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                    >
                      Hết hàng
                    </Typography>
                    <Typography variant="h4" fontWeight="bold" color="#d32f2f">
                      {outOfStockProducts}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Total Value Card */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Tổng Giá Trị Tồn Kho
              </Typography>
              <Typography variant="h3" fontWeight="bold" color="primary">
                {formatPrice(totalValue)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Tính theo giá gốc sản phẩm
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Tabs */}
        <Card sx={{ mb: 3 }}>
          <Tabs
            value={currentTab}
            onChange={(e, newValue) => setCurrentTab(newValue)}
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <Tab label="Danh Sách Tồn Kho" />
            <Tab label="Lịch Sử Nhập/Xuất" />
          </Tabs>

          {/* Tab 1: Inventory List */}
          {currentTab === 0 && (
            <Box>
              {/* Toolbar */}
              <CardContent>
                <Toolbar sx={{ px: 0 }}>
                  {/* Search */}
                  <TextField
                    placeholder="Tìm kiếm sản phẩm, SKU..."
                    variant="outlined"
                    size="small"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ minWidth: 300, mr: 2 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />

                  {/* Category Filter */}
                  <FormControl size="small" sx={{ minWidth: 150, mr: 2 }}>
                    <InputLabel>Danh mục</InputLabel>
                    <Select
                      value={categoryFilter}
                      label="Danh mục"
                      onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                      <MenuItem value="all">Tất cả</MenuItem>
                      {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                          {category}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {/* Status Filter */}
                  <FormControl size="small" sx={{ minWidth: 150, mr: 2 }}>
                    <InputLabel>Trạng thái</InputLabel>
                    <Select
                      value={statusFilter}
                      label="Trạng thái"
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      <MenuItem value="all">Tất cả</MenuItem>
                      <MenuItem value="in-stock">Còn hàng</MenuItem>
                      <MenuItem value="low-stock">Sắp hết</MenuItem>
                      <MenuItem value="out-of-stock">Hết hàng</MenuItem>
                    </Select>
                  </FormControl>

                  <Box sx={{ flexGrow: 1 }} />

                  {/* Action Buttons */}
                  <Button
                    variant="outlined"
                    startIcon={<ExportIcon />}
                    sx={{ mr: 2 }}
                  >
                    Xuất Excel
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{
                      bgcolor: "#ff9f1a",
                      "&:hover": { bgcolor: "#e68a00" },
                    }}
                  >
                    Nhập Kho
                  </Button>
                </Toolbar>
              </CardContent>

              {/* Inventory Table */}
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Sản phẩm</TableCell>
                      <TableCell>SKU</TableCell>
                      <TableCell>Danh mục</TableCell>
                      <TableCell align="center">Tồn kho</TableCell>
                      <TableCell align="center">Min/Max</TableCell>
                      <TableCell>Vị trí</TableCell>
                      <TableCell align="center">Trạng thái</TableCell>
                      <TableCell align="right">Giá trị</TableCell>
                      <TableCell align="center">Cập nhật</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredInventory
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((item) => {
                        const statusConfig = getStatusConfig(
                          item.status,
                          item.currentStock,
                          item.minStock
                        );
                        return (
                          <TableRow key={item.id} hover>
                            <TableCell>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                }}
                              >
                                <Avatar
                                  src={item.image}
                                  alt={item.productName}
                                  sx={{ width: 50, height: 50 }}
                                  variant="rounded"
                                />
                                <Box>
                                  <Typography
                                    variant="subtitle2"
                                    fontWeight="medium"
                                  >
                                    {item.productName}
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    color="text.secondary"
                                  >
                                    ID: {item.id}
                                  </Typography>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="body2"
                                fontFamily="monospace"
                              >
                                {item.sku}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Chip
                                label={item.category}
                                size="small"
                                variant="outlined"
                              />
                            </TableCell>
                            <TableCell align="center">
                              <Typography
                                variant="h6"
                                fontWeight="bold"
                                color={
                                  item.currentStock === 0
                                    ? "error.main"
                                    : item.currentStock <= item.minStock
                                    ? "warning.main"
                                    : "success.main"
                                }
                              >
                                {item.currentStock}
                              </Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {item.minStock} - {item.maxStock}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Chip label={item.location} size="small" />
                            </TableCell>
                            <TableCell align="center">
                              <Chip
                                label={statusConfig.label}
                                size="small"
                                sx={{
                                  color:
                                    statusConfig.color === "error"
                                      ? "#d32f2f"
                                      : statusConfig.color === "warning"
                                      ? "#f57c00"
                                      : "#2e7d32",
                                  backgroundColor: statusConfig.bgColor,
                                  fontWeight: "medium",
                                }}
                              />
                            </TableCell>
                            <TableCell align="right">
                              <Typography
                                variant="subtitle2"
                                fontWeight="medium"
                              >
                                {formatPrice(
                                  item.currentStock * item.costPrice
                                )}
                              </Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Typography variant="body2">
                                {new Date(item.lastUpdated).toLocaleDateString(
                                  "vi-VN"
                                )}
                              </Typography>
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
                count={filteredInventory.length}
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
            </Box>
          )}

          {/* Tab 2: History */}
          {currentTab === 1 && (
            <Box>
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <HistoryIcon />
                  Lịch Sử Nhập/Xuất Gần Đây
                </Typography>
              </CardContent>

              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Loại</TableCell>
                      <TableCell>Sản phẩm</TableCell>
                      <TableCell>SKU</TableCell>
                      <TableCell align="center">Số lượng</TableCell>
                      <TableCell>Người thực hiện</TableCell>
                      <TableCell>Tham chiếu</TableCell>
                      <TableCell>Ghi chú</TableCell>
                      <TableCell align="center">Thời gian</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {history.map((record) => (
                      <TableRow key={record.id} hover>
                        <TableCell>
                          <Chip
                            icon={
                              record.type === "in" ? <InIcon /> : <OutIcon />
                            }
                            label={
                              record.type === "in" ? "Nhập kho" : "Xuất kho"
                            }
                            size="small"
                            color={record.type === "in" ? "success" : "error"}
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle2">
                            {record.productName}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" fontFamily="monospace">
                            {record.sku}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography
                            variant="subtitle2"
                            fontWeight="bold"
                            color={
                              record.type === "in"
                                ? "success.main"
                                : "error.main"
                            }
                          >
                            {record.type === "in" ? "+" : ""}
                            {record.quantity}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">{record.user}</Typography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={record.reference}
                            size="small"
                            variant="outlined"
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" color="text.secondary">
                            {record.note}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="body2">
                            {new Date(record.date).toLocaleDateString("vi-VN")}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
        </Card>
      </Box>
    </AdminLayout>
  );
};

export default InventoryManagementPage;
