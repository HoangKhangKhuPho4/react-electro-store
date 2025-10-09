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

// Mock data danh mục sản phẩm
const mockCategories = [
  {
    id: 1,
    name: "Smartphone",
    slug: "smartphone",
    description: "Điện thoại thông minh các loại",
    productCount: 45,
    status: "active",
    image: "https://via.placeholder.com/60x60?text=📱",
    parentId: null,
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Laptop",
    slug: "laptop",
    description: "Máy tính xách tay gaming và văn phòng",
    productCount: 28,
    status: "active",
    image: "https://via.placeholder.com/60x60?text=💻",
    parentId: null,
    createdAt: "2024-01-10",
  },
  {
    id: 3,
    name: "Tablet",
    slug: "tablet",
    description: "Máy tính bảng iPad và Android",
    productCount: 15,
    status: "active",
    image: "https://via.placeholder.com/60x60?text=📟",
    parentId: null,
    createdAt: "2024-01-08",
  },
  {
    id: 4,
    name: "Smartwatch",
    slug: "smartwatch",
    description: "Đồng hồ thông minh Apple Watch, Samsung",
    productCount: 12,
    status: "active",
    image: "https://via.placeholder.com/60x60?text=⌚",
    parentId: null,
    createdAt: "2024-01-05",
  },
  {
    id: 5,
    name: "Gaming Laptop",
    slug: "gaming-laptop",
    description: "Laptop chơi game hiệu năng cao",
    productCount: 8,
    status: "active",
    image: "https://via.placeholder.com/60x60?text=🎮",
    parentId: 2, // Child of Laptop
    createdAt: "2024-01-03",
  },
  {
    id: 6,
    name: "Phụ Kiện",
    slug: "phu-kien",
    description: "Phụ kiện điện thoại, laptop",
    productCount: 67,
    status: "inactive",
    image: "https://via.placeholder.com/60x60?text=🔌",
    parentId: null,
    createdAt: "2024-01-01",
  },
];

const CategoryManagementPage = () => {
  const [categories] = useState(mockCategories);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Filter categories
  const filteredCategories = categories.filter((category) => {
    const matchesSearch = category.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || category.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Get status config
  const getStatusConfig = (status) => {
    switch (status) {
      case "active":
        return { label: "Đang hoạt động", color: "success" };
      case "inactive":
        return { label: "Không hoạt động", color: "default" };
      default:
        return { label: "Không xác định", color: "error" };
    }
  };

  // Get parent category name
  const getParentName = (parentId) => {
    if (!parentId) return "Danh mục gốc";
    const parent = categories.find((cat) => cat.id === parentId);
    return parent ? parent.name : "Không xác định";
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <AdminLayout currentPage="Danh mục">
      <Box sx={{ p: 3 }}>
        {/* Header Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Quản Lý Danh Mục Sản Phẩm
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quản lý danh mục sản phẩm, phân loại và tổ chức sản phẩm theo nhóm
          </Typography>
        </Box>

        {/* Toolbar */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Toolbar sx={{ px: 0 }}>
              {/* Search */}
              <TextField
                placeholder="Tìm kiếm danh mục..."
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

              {/* Status Filter */}
              <FormControl size="small" sx={{ minWidth: 150, mr: 2 }}>
                <InputLabel>Trạng thái</InputLabel>
                <Select
                  value={statusFilter}
                  label="Trạng thái"
                  onChange={(e) => setStatusFilter(e.target.value)}
                  startAdornment={<FilterIcon sx={{ mr: 1 }} />}
                >
                  <MenuItem value="all">Tất cả</MenuItem>
                  <MenuItem value="active">Đang hoạt động</MenuItem>
                  <MenuItem value="inactive">Không hoạt động</MenuItem>
                </Select>
              </FormControl>

              <Box sx={{ flexGrow: 1 }} />

              {/* Add Category Button */}
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                  bgcolor: "#ff9f1a",
                  "&:hover": { bgcolor: "#e68a00" },
                }}
              >
                Thêm Danh Mục
              </Button>
            </Toolbar>
          </CardContent>
        </Card>

        {/* Statistics Cards */}
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" color="primary" gutterBottom>
                Tổng Danh Mục
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                {categories.length}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" color="success.main" gutterBottom>
                Đang Hoạt Động
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="success.main">
                {categories.filter((c) => c.status === "active").length}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" color="info.main" gutterBottom>
                Tổng Sản Phẩm
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="info.main">
                {categories.reduce((sum, cat) => sum + cat.productCount, 0)}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Categories Table */}
        <Card>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Danh mục</TableCell>
                  <TableCell>Slug</TableCell>
                  <TableCell>Danh mục cha</TableCell>
                  <TableCell align="center">Số sản phẩm</TableCell>
                  <TableCell align="center">Trạng thái</TableCell>
                  <TableCell align="center">Ngày tạo</TableCell>
                  <TableCell align="center">Thao tác</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCategories
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((category) => {
                    const statusConfig = getStatusConfig(category.status);
                    return (
                      <TableRow key={category.id} hover>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                            }}
                          >
                            <Avatar
                              src={category.image}
                              alt={category.name}
                              sx={{ width: 50, height: 50 }}
                              variant="rounded"
                            />
                            <Box>
                              <Typography
                                variant="subtitle2"
                                fontWeight="medium"
                                sx={{
                                  pl: category.parentId ? 2 : 0,
                                  borderLeft: category.parentId
                                    ? "3px solid #orange"
                                    : "none",
                                }}
                              >
                                {category.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{ display: "block", maxWidth: 200 }}
                              >
                                {category.description}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography
                            variant="body2"
                            fontFamily="monospace"
                            sx={{
                              bgcolor: "#f5f5f5",
                              px: 1,
                              py: 0.5,
                              borderRadius: 1,
                            }}
                          >
                            {category.slug}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={getParentName(category.parentId)}
                            size="small"
                            variant="outlined"
                            color={category.parentId ? "primary" : "default"}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <Typography
                            variant="subtitle2"
                            fontWeight="bold"
                            color="primary"
                          >
                            {category.productCount}
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
                            {new Date(category.createdAt).toLocaleDateString(
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
                              title="Xem sản phẩm"
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
            count={filteredCategories.length}
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

export default CategoryManagementPage;
