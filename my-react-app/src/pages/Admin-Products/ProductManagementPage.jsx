import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  FilterList as FilterIcon,
  Search as SearchIcon,
  Visibility as ViewIcon,
} from "@mui/icons-material";
import {
  Avatar,
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

// Mock data sản phẩm
const mockProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    category: "Smartphone",
    price: 29990000,
    stock: 25,
    status: "active",
    image: "https://via.placeholder.com/60x60?text=iPhone",
    sku: "IP15PM-256",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "MacBook Pro 14inch M3",
    category: "Laptop",
    price: 52990000,
    stock: 12,
    status: "active",
    image: "https://via.placeholder.com/60x60?text=MacBook",
    sku: "MBP14-M3",
    createdAt: "2024-01-10",
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    category: "Smartphone",
    price: 31990000,
    stock: 0,
    status: "out-of-stock",
    image: "https://via.placeholder.com/60x60?text=Galaxy",
    sku: "SGS24U-512",
    createdAt: "2024-01-08",
  },
  {
    id: 4,
    name: "iPad Pro 12.9 inch",
    category: "Tablet",
    price: 25990000,
    stock: 18,
    status: "active",
    image: "https://via.placeholder.com/60x60?text=iPad",
    sku: "IPP129-256",
    createdAt: "2024-01-05",
  },
  {
    id: 5,
    name: "Apple Watch Ultra 2",
    category: "Smartwatch",
    price: 19990000,
    stock: 8,
    status: "low-stock",
    image: "https://via.placeholder.com/60x60?text=Watch",
    sku: "AWU2-49MM",
    createdAt: "2024-01-03",
  },
];

const ProductManagementPage = () => {
  const [products] = useState(mockProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;
    const matchesStatus =
      statusFilter === "all" || product.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Get unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  // Get status config
  const getStatusConfig = (status) => {
    switch (status) {
      case "active":
        return { label: "Đang bán", color: "success" };
      case "out-of-stock":
        return { label: "Hết hàng", color: "error" };
      case "low-stock":
        return { label: "Sắp hết", color: "warning" };
      default:
        return { label: "Không hoạt động", color: "default" };
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <AdminLayout currentPage="Sản phẩm">
      <Box sx={{ p: 3 }}>
        {/* Header Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Quản Lý Sản Phẩm
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quản lý danh sách sản phẩm, thêm mới, chỉnh sửa và cập nhật kho hàng
          </Typography>
        </Box>

        {/* Toolbar */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Toolbar sx={{ px: 0 }}>
              {/* Search */}
              <TextField
                placeholder="Tìm kiếm sản phẩm..."
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
                  startAdornment={<FilterIcon sx={{ mr: 1 }} />}
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
                  <MenuItem value="active">Đang bán</MenuItem>
                  <MenuItem value="out-of-stock">Hết hàng</MenuItem>
                  <MenuItem value="low-stock">Sắp hết</MenuItem>
                </Select>
              </FormControl>

              <Box sx={{ flexGrow: 1 }} />

              {/* Add Product Button */}
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                  bgcolor: "#ff9f1a",
                  "&:hover": { bgcolor: "#e68a00" },
                }}
              >
                Thêm Sản Phẩm
              </Button>
            </Toolbar>
          </CardContent>
        </Card>

        {/* Products Table */}
        <Card>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sản phẩm</TableCell>
                  <TableCell>Danh mục</TableCell>
                  <TableCell>SKU</TableCell>
                  <TableCell align="right">Giá bán</TableCell>
                  <TableCell align="center">Tồn kho</TableCell>
                  <TableCell align="center">Trạng thái</TableCell>
                  <TableCell align="center">Ngày tạo</TableCell>
                  <TableCell align="center">Thao tác</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((product) => {
                    const statusConfig = getStatusConfig(product.status);
                    return (
                      <TableRow key={product.id} hover>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                            }}
                          >
                            <Avatar
                              src={product.image}
                              alt={product.name}
                              sx={{ width: 50, height: 50 }}
                              variant="rounded"
                            />
                            <Box>
                              <Typography
                                variant="subtitle2"
                                fontWeight="medium"
                              >
                                {product.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                ID: {product.id}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={product.category}
                            size="small"
                            variant="outlined"
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" fontFamily="monospace">
                            {product.sku}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="subtitle2" fontWeight="medium">
                            {formatPrice(product.price)}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography
                            variant="body2"
                            color={
                              product.stock <= 5 ? "error.main" : "text.primary"
                            }
                            fontWeight={product.stock <= 5 ? "bold" : "normal"}
                          >
                            {product.stock}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Chip
                            label={statusConfig.label}
                            size="small"
                            color={statusConfig.color}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="body2">
                            {new Date(product.createdAt).toLocaleDateString(
                              "vi-VN"
                            )}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              gap: 0.5,
                            }}
                          >
                            <IconButton
                              size="small"
                              color="primary"
                              title="Xem chi tiết"
                            >
                              <ViewIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                              size="small"
                              color="warning"
                              title="Chỉnh sửa"
                            >
                              <EditIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small" color="error" title="Xóa">
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Box>
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
            count={filteredProducts.length}
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

export default ProductManagementPage;
