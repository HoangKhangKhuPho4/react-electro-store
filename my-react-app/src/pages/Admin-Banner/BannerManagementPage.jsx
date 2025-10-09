import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Image as ImageIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AdminLayout from "../../components/Admin-Layout/AdminLayout";

// Mock data banners
const mockBanners = [
  {
    id: 1,
    title: "Sale Cuối Năm - Giảm 50%",
    subtitle: "Khuyến mãi lớn nhất trong năm",
    image: "https://via.placeholder.com/800x300?text=Sale+50%25",
    position: "hero",
    status: "active",
    startDate: "2024-12-01",
    endDate: "2024-12-31",
    clickCount: 1250,
    link: "/shop?sale=50",
    priority: 1,
  },
  {
    id: 2,
    title: "iPhone 15 Pro Max Mới Nhất",
    subtitle: "Công nghệ đỉnh cao, thiết kế hoàn hảo",
    image: "https://via.placeholder.com/800x300?text=iPhone+15+Pro",
    position: "hero",
    status: "active",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    clickCount: 890,
    link: "/product/iphone-15-pro-max",
    priority: 2,
  },
  {
    id: 3,
    title: "MacBook Air M3 - Năng Suất Vượt Trội",
    subtitle: "Hiệu năng mạnh mẽ, pin 18 giờ",
    image: "https://via.placeholder.com/800x300?text=MacBook+Air+M3",
    position: "sidebar",
    status: "inactive",
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    clickCount: 456,
    link: "/product/macbook-air-m3",
    priority: 3,
  },
  {
    id: 4,
    title: "Phụ Kiện Apple Chính Hãng",
    subtitle: "AirPods, Apple Watch, Bàn phím Magic",
    image: "https://via.placeholder.com/400x200?text=Apple+Accessories",
    position: "footer",
    status: "active",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    clickCount: 321,
    link: "/shop?category=accessories",
    priority: 4,
  },
];

const BannerManagementPage = () => {
  const [banners, setBanners] = useState(mockBanners);
  const [filterPosition, setFilterPosition] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [openDialog, setOpenDialog] = useState(false);
  const [editingBanner, setEditingBanner] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    image: "",
    position: "hero",
    status: "active",
    startDate: "",
    endDate: "",
    link: "",
    priority: 1,
  });

  // Filter banners
  const filteredBanners = banners.filter((banner) => {
    const matchesPosition =
      filterPosition === "all" || banner.position === filterPosition;
    const matchesStatus =
      filterStatus === "all" || banner.status === filterStatus;
    return matchesPosition && matchesStatus;
  });

  // Get position label
  const getPositionLabel = (position) => {
    switch (position) {
      case "hero":
        return "Hero Banner";
      case "sidebar":
        return "Sidebar";
      case "footer":
        return "Footer";
      default:
        return position;
    }
  };

  // Get status color
  const getStatusColor = (status) => {
    return status === "active" ? "success" : "default";
  };

  // Handle toggle status
  const handleToggleStatus = (bannerId) => {
    setBanners(
      banners.map((banner) =>
        banner.id === bannerId
          ? {
              ...banner,
              status: banner.status === "active" ? "inactive" : "active",
            }
          : banner
      )
    );
  };

  // Handle delete banner
  const handleDeleteBanner = (bannerId) => {
    setBanners(banners.filter((banner) => banner.id !== bannerId));
  };

  // Handle open dialog
  const handleOpenDialog = (banner = null) => {
    if (banner) {
      setEditingBanner(banner);
      setFormData(banner);
    } else {
      setEditingBanner(null);
      setFormData({
        title: "",
        subtitle: "",
        image: "",
        position: "hero",
        status: "active",
        startDate: "",
        endDate: "",
        link: "",
        priority: 1,
      });
    }
    setOpenDialog(true);
  };

  // Handle close dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingBanner(null);
  };

  // Handle form change
  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Handle save banner
  const handleSaveBanner = () => {
    if (editingBanner) {
      // Update existing banner
      setBanners(
        banners.map((banner) =>
          banner.id === editingBanner.id
            ? { ...formData, id: editingBanner.id }
            : banner
        )
      );
    } else {
      // Add new banner
      const newBanner = {
        ...formData,
        id: Math.max(...banners.map((b) => b.id)) + 1,
        clickCount: 0,
      };
      setBanners([...banners, newBanner]);
    }
    handleCloseDialog();
  };

  return (
    <AdminLayout currentPage="Banner">
      <Box sx={{ p: 3 }}>
        {/* Header Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Quản Lý Banner
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quản lý banner hiển thị trên website, slider và các vị trí khuyến
            mãi
          </Typography>
        </Box>

        {/* Toolbar */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              {/* Position Filter */}
              <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel>Vị trí</InputLabel>
                <Select
                  value={filterPosition}
                  label="Vị trí"
                  onChange={(e) => setFilterPosition(e.target.value)}
                >
                  <MenuItem value="all">Tất cả</MenuItem>
                  <MenuItem value="hero">Hero Banner</MenuItem>
                  <MenuItem value="sidebar">Sidebar</MenuItem>
                  <MenuItem value="footer">Footer</MenuItem>
                </Select>
              </FormControl>

              {/* Status Filter */}
              <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel>Trạng thái</InputLabel>
                <Select
                  value={filterStatus}
                  label="Trạng thái"
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <MenuItem value="all">Tất cả</MenuItem>
                  <MenuItem value="active">Đang hiển thị</MenuItem>
                  <MenuItem value="inactive">Đã ẩn</MenuItem>
                </Select>
              </FormControl>

              <Box sx={{ flexGrow: 1 }} />

              {/* Add Banner Button */}
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => handleOpenDialog()}
                sx={{
                  bgcolor: "#ff9f1a",
                  "&:hover": { bgcolor: "#e68a00" },
                }}
              >
                Thêm Banner
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Banners Grid */}
        <Grid container spacing={3}>
          {filteredBanners.map((banner) => (
            <Grid item xs={12} md={6} lg={4} key={banner.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={banner.image}
                  alt={banner.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1, p: 2 }}>
                  {/* Title & Subtitle */}
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {banner.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {banner.subtitle}
                  </Typography>

                  {/* Chips */}
                  <Box
                    sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}
                  >
                    <Chip
                      label={getPositionLabel(banner.position)}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                    <Chip
                      label={
                        banner.status === "active" ? "Đang hiển thị" : "Đã ẩn"
                      }
                      size="small"
                      color={getStatusColor(banner.status)}
                    />
                  </Box>

                  {/* Stats */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary">
                      Lượt click: {banner.clickCount} | Ưu tiên:{" "}
                      {banner.priority}
                    </Typography>
                  </Box>

                  {/* Date Range */}
                  <Typography variant="caption" color="text.secondary">
                    {new Date(banner.startDate).toLocaleDateString("vi-VN")} -{" "}
                    {new Date(banner.endDate).toLocaleDateString("vi-VN")}
                  </Typography>

                  {/* Action Buttons */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Box>
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() => handleOpenDialog(banner)}
                        title="Chỉnh sửa"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => handleDeleteBanner(banner.id)}
                        title="Xóa"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>

                    {/* Toggle Status */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {banner.status === "active" ? (
                        <VisibilityIcon color="success" fontSize="small" />
                      ) : (
                        <VisibilityOffIcon color="disabled" fontSize="small" />
                      )}
                      <Switch
                        checked={banner.status === "active"}
                        onChange={() => handleToggleStatus(banner.id)}
                        color="primary"
                        size="small"
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Add/Edit Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            {editingBanner ? "Chỉnh Sửa Banner" : "Thêm Banner Mới"}
          </DialogTitle>
          <DialogContent>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
            >
              <TextField
                label="Tiêu đề"
                value={formData.title}
                onChange={(e) => handleFormChange("title", e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Phụ đề"
                value={formData.subtitle}
                onChange={(e) => handleFormChange("subtitle", e.target.value)}
                fullWidth
              />
              <TextField
                label="Đường dẫn hình ảnh"
                value={formData.image}
                onChange={(e) => handleFormChange("image", e.target.value)}
                fullWidth
                required
                InputProps={{
                  startAdornment: (
                    <ImageIcon sx={{ mr: 1, color: "text.secondary" }} />
                  ),
                }}
              />
              <TextField
                label="Liên kết"
                value={formData.link}
                onChange={(e) => handleFormChange("link", e.target.value)}
                fullWidth
                placeholder="/shop?category=..."
              />

              <Box sx={{ display: "flex", gap: 2 }}>
                <FormControl fullWidth>
                  <InputLabel>Vị trí hiển thị</InputLabel>
                  <Select
                    value={formData.position}
                    label="Vị trí hiển thị"
                    onChange={(e) =>
                      handleFormChange("position", e.target.value)
                    }
                  >
                    <MenuItem value="hero">Hero Banner</MenuItem>
                    <MenuItem value="sidebar">Sidebar</MenuItem>
                    <MenuItem value="footer">Footer</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Trạng thái</InputLabel>
                  <Select
                    value={formData.status}
                    label="Trạng thái"
                    onChange={(e) => handleFormChange("status", e.target.value)}
                  >
                    <MenuItem value="active">Đang hiển thị</MenuItem>
                    <MenuItem value="inactive">Đã ẩn</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  label="Ngày bắt đầu"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) =>
                    handleFormChange("startDate", e.target.value)
                  }
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  label="Ngày kết thúc"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleFormChange("endDate", e.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Box>

              <TextField
                label="Độ ưu tiên (1-10)"
                type="number"
                value={formData.priority}
                onChange={(e) =>
                  handleFormChange("priority", parseInt(e.target.value))
                }
                fullWidth
                inputProps={{ min: 1, max: 10 }}
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Hủy</Button>
            <Button
              onClick={handleSaveBanner}
              variant="contained"
              sx={{ bgcolor: "#ff9f1a", "&:hover": { bgcolor: "#e68a00" } }}
            >
              {editingBanner ? "Cập Nhật" : "Thêm Banner"}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </AdminLayout>
  );
};

export default BannerManagementPage;
