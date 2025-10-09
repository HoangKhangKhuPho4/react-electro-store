import {
  Add as AddIcon,
  Article as ArticleIcon,
  Delete as DeleteIcon,
  VisibilityOff as DraftIcon,
  Edit as EditIcon,
  FilterList as FilterIcon,
  Publish as PublishIcon,
  Schedule as ScheduleIcon,
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

// Mock data bài viết
const mockPosts = [
  {
    id: 1,
    title: "iPhone 15 Pro Max - Đánh giá chi tiết từ chuyên gia",
    excerpt:
      "Khám phá những tính năng mới nhất của iPhone 15 Pro Max với camera 48MP, chip A17 Pro và thiết kế titanium...",
    author: "Minh Khang",
    category: "Review",
    status: "published",
    publishDate: "2024-01-15",
    views: 15420,
    thumbnail: "https://via.placeholder.com/80x60?text=iPhone15",
    tags: ["iPhone", "Apple", "Review", "Smartphone"],
  },
  {
    id: 2,
    title: "Top 10 laptop gaming tốt nhất 2024",
    excerpt:
      "Danh sách những chiếc laptop gaming được đánh giá cao nhất năm 2024 với hiệu năng mạnh mẽ và giá cả hợp lý...",
    author: "Hoàng Nam",
    category: "Top List",
    status: "published",
    publishDate: "2024-01-12",
    views: 8930,
    thumbnail: "https://via.placeholder.com/80x60?text=Gaming",
    tags: ["Laptop", "Gaming", "Top List"],
  },
  {
    id: 3,
    title: "Hướng dẫn chọn mua tai nghe true wireless",
    excerpt:
      "Những tiêu chí quan trọng khi lựa chọn tai nghe true wireless phù hợp với nhu cầu sử dụng của bạn...",
    author: "Thu Hương",
    category: "Guide",
    status: "draft",
    publishDate: null,
    views: 0,
    thumbnail: "https://via.placeholder.com/80x60?text=Earbuds",
    tags: ["Tai nghe", "True Wireless", "Guide"],
  },
  {
    id: 4,
    title: "MacBook Air M3 vs MacBook Pro M3 - So sánh chi tiết",
    excerpt:
      "Phân tích sự khác biệt giữa MacBook Air M3 và MacBook Pro M3 để giúp bạn đưa ra lựa chọn phù hợp...",
    author: "Minh Khang",
    category: "Comparison",
    status: "scheduled",
    publishDate: "2024-01-20",
    views: 0,
    thumbnail: "https://via.placeholder.com/80x60?text=MacBook",
    tags: ["MacBook", "Apple", "Comparison"],
  },
  {
    id: 5,
    title: "Xu hướng công nghệ 2024: AI và IoT",
    excerpt:
      "Khám phá những xu hướng công nghệ nổi bật trong năm 2024, đặc biệt là AI và Internet of Things...",
    author: "Văn Đức",
    category: "Technology",
    status: "published",
    publishDate: "2024-01-08",
    views: 12560,
    thumbnail: "https://via.placeholder.com/80x60?text=Tech2024",
    tags: ["AI", "IoT", "Technology", "2024"],
  },
];

const PostManagementPage = () => {
  const [posts] = useState(mockPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || post.category === categoryFilter;
    const matchesStatus =
      statusFilter === "all" || post.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Get unique categories
  const categories = [...new Set(posts.map((p) => p.category))];

  // Get status config
  const getStatusConfig = (status) => {
    switch (status) {
      case "published":
        return {
          label: "Đã xuất bản",
          color: "success",
          icon: <PublishIcon fontSize="small" />,
        };
      case "draft":
        return {
          label: "Bản nháp",
          color: "default",
          icon: <DraftIcon fontSize="small" />,
        };
      case "scheduled":
        return {
          label: "Đã lên lịch",
          color: "info",
          icon: <ScheduleIcon fontSize="small" />,
        };
      default:
        return {
          label: "Không xác định",
          color: "error",
          icon: <ArticleIcon fontSize="small" />,
        };
    }
  };

  // Format date
  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    return new Date(dateStr).toLocaleDateString("vi-VN");
  };

  // Format views
  const formatViews = (views) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <AdminLayout currentPage="Bài viết">
      <Box sx={{ p: 3 }}>
        {/* Header Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Quản Lý Bài Viết
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quản lý các bài viết, tin tức và blog trên website
          </Typography>
        </Box>

        {/* Toolbar */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Toolbar sx={{ px: 0 }}>
              {/* Search */}
              <TextField
                placeholder="Tìm kiếm bài viết, tác giả..."
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
                  <MenuItem value="published">Đã xuất bản</MenuItem>
                  <MenuItem value="draft">Bản nháp</MenuItem>
                  <MenuItem value="scheduled">Đã lên lịch</MenuItem>
                </Select>
              </FormControl>

              <Box sx={{ flexGrow: 1 }} />

              {/* Add Post Button */}
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                  bgcolor: "#ff9f1a",
                  "&:hover": { bgcolor: "#e68a00" },
                }}
              >
                Tạo Bài Viết
              </Button>
            </Toolbar>
          </CardContent>
        </Card>

        {/* Posts Table */}
        <Card>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Bài viết</TableCell>
                  <TableCell>Tác giả</TableCell>
                  <TableCell>Danh mục</TableCell>
                  <TableCell align="center">Trạng thái</TableCell>
                  <TableCell align="center">Ngày xuất bản</TableCell>
                  <TableCell align="center">Lượt xem</TableCell>
                  <TableCell align="center">Thao tác</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredPosts
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((post) => {
                    const statusConfig = getStatusConfig(post.status);
                    return (
                      <TableRow key={post.id} hover>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 2,
                            }}
                          >
                            <Avatar
                              src={post.thumbnail}
                              alt={post.title}
                              sx={{ width: 80, height: 60, borderRadius: 1 }}
                              variant="rounded"
                            />
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                              <Typography
                                variant="subtitle2"
                                fontWeight="medium"
                                sx={{
                                  mb: 0.5,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                }}
                              >
                                {post.title}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                }}
                              >
                                {post.excerpt}
                              </Typography>
                              <Box
                                sx={{
                                  mt: 1,
                                  display: "flex",
                                  gap: 0.5,
                                  flexWrap: "wrap",
                                }}
                              >
                                {post.tags.slice(0, 3).map((tag) => (
                                  <Chip
                                    key={tag}
                                    label={tag}
                                    size="small"
                                    variant="outlined"
                                    sx={{ fontSize: "0.7rem", height: 20 }}
                                  />
                                ))}
                                {post.tags.length > 3 && (
                                  <Typography
                                    variant="caption"
                                    color="text.secondary"
                                  >
                                    +{post.tags.length - 3} thẻ khác
                                  </Typography>
                                )}
                              </Box>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" fontWeight="medium">
                            {post.author}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            ID: {post.id}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={post.category}
                            size="small"
                            variant="outlined"
                            color="primary"
                          />
                        </TableCell>
                        <TableCell align="center">
                          <Chip
                            icon={statusConfig.icon}
                            label={statusConfig.label}
                            size="small"
                            color={statusConfig.color}
                          />
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="body2">
                            {formatDate(post.publishDate)}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="body2" fontWeight="medium">
                            {formatViews(post.views)}
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
            count={filteredPosts.length}
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

export default PostManagementPage;
