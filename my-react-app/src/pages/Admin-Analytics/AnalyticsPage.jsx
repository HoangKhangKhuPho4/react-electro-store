import {
  Assessment as AssessmentIcon,
  ShoppingCart as CartIcon,
  AttachMoney as MoneyIcon,
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AdminLayout from "../../components/Admin-Layout/AdminLayout";

const AnalyticsPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  // Mock data for analytics
  const analyticsData = {
    overview: {
      totalRevenue: 2850000000,
      totalOrders: 15847,
      totalCustomers: 3782,
      avgOrderValue: 179800,
      revenueGrowth: 15.3,
      ordersGrowth: 8.7,
      customersGrowth: 12.1,
      avgOrderGrowth: 5.9,
    },
    monthlySales: [
      { month: "Jan", revenue: 180000000, orders: 1200 },
      { month: "Feb", revenue: 220000000, orders: 1450 },
      { month: "Mar", revenue: 195000000, orders: 1300 },
      { month: "Apr", revenue: 240000000, orders: 1600 },
      { month: "May", revenue: 210000000, orders: 1350 },
      { month: "Jun", revenue: 265000000, orders: 1750 },
      { month: "Jul", revenue: 285000000, orders: 1890 },
      { month: "Aug", revenue: 250000000, orders: 1650 },
      { month: "Sep", revenue: 290000000, orders: 1920 },
      { month: "Oct", revenue: 310000000, orders: 2050 },
      { month: "Nov", revenue: 295000000, orders: 1980 },
      { month: "Dec", revenue: 270000000, orders: 1800 },
    ],
    topProducts: [
      { name: "iPhone 15 Pro Max", sales: 450, revenue: 13495500000 },
      { name: "MacBook Pro M3", sales: 280, revenue: 14837200000 },
      { name: "Samsung Galaxy S24", sales: 380, revenue: 12156200000 },
      { name: "iPad Pro 12.9", sales: 320, revenue: 8316800000 },
      { name: "Apple Watch Ultra", sales: 250, revenue: 4997500000 },
    ],
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const StatCard = ({ title, value, growth, icon, color }) => (
    <Card sx={{ height: "100%", borderRadius: 3 }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box
            sx={{
              p: 1.5,
              borderRadius: 2,
              backgroundColor: `${color}.light`,
              color: `${color}.main`,
              mr: 2,
            }}
          >
            {icon}
          </Box>
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>
        </Box>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
          {value}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <TrendingUpIcon sx={{ color: "success.main", fontSize: 18 }} />
          <Typography
            variant="body2"
            sx={{ color: "success.main", fontWeight: 600 }}
          >
            +{growth}% từ tháng trước
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  const SalesChart = () => {
    const maxRevenue = Math.max(
      ...analyticsData.monthlySales.map((item) => item.revenue)
    );

    return (
      <Card sx={{ borderRadius: 3, height: 400 }}>
        <CardContent sx={{ p: 3, height: "100%" }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Doanh Thu Theo Tháng
          </Typography>
          <Box sx={{ position: "relative", height: 280, mt: 3 }}>
            <svg width="100%" height="100%" viewBox="0 0 800 200">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1="50"
                  y1={20 + i * 40}
                  x2="750"
                  y2={20 + i * 40}
                  stroke="#f0f0f0"
                  strokeWidth="1"
                />
              ))}

              {/* Revenue line */}
              <path
                d={`M 50 ${
                  200 -
                  (analyticsData.monthlySales[0].revenue / maxRevenue) * 160
                } ${analyticsData.monthlySales
                  .map(
                    (item, index) =>
                      `L ${50 + (index + 1) * 58} ${
                        200 - (item.revenue / maxRevenue) * 160
                      }`
                  )
                  .join(" ")}`}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
              />

              {/* Data points */}
              {analyticsData.monthlySales.map((item, index) => (
                <circle
                  key={index}
                  cx={50 + index * 58}
                  cy={200 - (item.revenue / maxRevenue) * 160}
                  r="4"
                  fill="#3b82f6"
                />
              ))}
            </svg>

            {/* X-axis labels */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
                ml: 6,
                mr: 6,
              }}
            >
              {analyticsData.monthlySales.map((item) => (
                <Typography
                  key={item.month}
                  variant="caption"
                  color="text.secondary"
                >
                  {item.month}
                </Typography>
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  };

  const TopProductsCard = () => (
    <Card sx={{ borderRadius: 3, height: 400 }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Sản Phẩm Bán Chạy
        </Typography>
        <Box sx={{ mt: 3 }}>
          {analyticsData.topProducts.map((product, index) => (
            <Box
              key={product.name}
              sx={{
                display: "flex",
                alignItems: "center",
                py: 2,
                borderBottom:
                  index < analyticsData.topProducts.length - 1
                    ? "1px solid #f0f0f0"
                    : "none",
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: 1,
                  bgcolor: "primary.light",
                  color: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                  fontWeight: "bold",
                }}
              >
                {index + 1}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" fontWeight={500}>
                  {product.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {product.sales} đơn bán
                </Typography>
              </Box>
              <Typography
                variant="subtitle2"
                fontWeight={600}
                color="primary.main"
              >
                {formatCurrency(product.revenue)}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <AdminLayout currentPage="Thống kê">
      <Box sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Thống Kê & Báo Cáo
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Tổng quan hiệu suất kinh doanh và xu hướng phát triển
          </Typography>
        </Box>

        {/* Tabs */}
        <Box sx={{ mb: 3 }}>
          <Tabs value={selectedTab} onChange={(e, val) => setSelectedTab(val)}>
            <Tab label="Tổng Quan" />
            <Tab label="Doanh Thu" />
            <Tab label="Sản Phẩm" />
            <Tab label="Khách Hàng" />
          </Tabs>
        </Box>

        {/* Overview Tab */}
        {selectedTab === 0 && (
          <Grid container spacing={3}>
            {/* Stats Cards */}
            <Grid item xs={12} md={3}>
              <StatCard
                title="Tổng Doanh Thu"
                value={formatCurrency(analyticsData.overview.totalRevenue)}
                growth={analyticsData.overview.revenueGrowth}
                icon={<MoneyIcon />}
                color="success"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <StatCard
                title="Tổng Đơn Hàng"
                value={analyticsData.overview.totalOrders.toLocaleString()}
                growth={analyticsData.overview.ordersGrowth}
                icon={<CartIcon />}
                color="primary"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <StatCard
                title="Tổng Khách Hàng"
                value={analyticsData.overview.totalCustomers.toLocaleString()}
                growth={analyticsData.overview.customersGrowth}
                icon={<PeopleIcon />}
                color="info"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <StatCard
                title="Giá Trị TB/Đơn"
                value={formatCurrency(analyticsData.overview.avgOrderValue)}
                growth={analyticsData.overview.avgOrderGrowth}
                icon={<AssessmentIcon />}
                color="warning"
              />
            </Grid>

            {/* Charts */}
            <Grid item xs={12} md={8}>
              <SalesChart />
            </Grid>
            <Grid item xs={12} md={4}>
              <TopProductsCard />
            </Grid>
          </Grid>
        )}

        {/* Revenue Tab */}
        {selectedTab === 1 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Báo Cáo Doanh Thu Chi Tiết
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Chức năng đang phát triển...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {/* Products Tab */}
        {selectedTab === 2 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Phân Tích Sản Phẩm
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Chức năng đang phát triển...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {/* Customers Tab */}
        {selectedTab === 3 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card sx={{ borderRadius: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Phân Tích Khách Hàng
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Chức năng đang phát triển...
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
    </AdminLayout>
  );
};

export default AnalyticsPage;
