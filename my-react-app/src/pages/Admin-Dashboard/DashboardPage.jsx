import {
  FilterList,
  MoreVert,
  People,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AdminLayout from "../../components/Admin-Layout/AdminLayout";

const DashboardPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  // Monthly sales data for chart
  const monthlyData = [
    { month: "Jan", value: 150 },
    { month: "Feb", value: 350 },
    { month: "Mar", value: 180 },
    { month: "Apr", value: 280 },
    { month: "May", value: 160 },
    { month: "Jun", value: 200 },
    { month: "Jul", value: 300 },
    { month: "Aug", value: 100 },
    { month: "Sep", value: 220 },
    { month: "Oct", value: 350 },
    { month: "Nov", value: 280 },
    { month: "Dec", value: 120 },
  ];

  const maxValue = Math.max(...monthlyData.map((item) => item.value));

  // Statistics data for area chart
  const statisticsData = [
    { month: "Jan", value1: 150, value2: 80 },
    { month: "Feb", value1: 200, value2: 120 },
    { month: "Mar", value1: 180, value2: 90 },
    { month: "Apr", value1: 220, value2: 140 },
    { month: "May", value1: 160, value2: 100 },
    { month: "Jun", value1: 180, value2: 110 },
    { month: "Jul", value1: 200, value2: 130 },
    { month: "Aug", value1: 160, value2: 95 },
    { month: "Sep", value1: 240, value2: 150 },
    { month: "Oct", value1: 220, value2: 140 },
    { month: "Nov", value1: 260, value2: 170 },
    { month: "Dec", value1: 180, value2: 120 },
  ];

  // Recent orders data
  const recentOrders = [
    {
      id: 1,
      product: 'MacBook Pro 13"',
      variant: "2 Variants",
      category: "Laptop",
      price: "$2399.00",
      status: "Delivered",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      product: "Apple Watch Ultra",
      variant: "1 Variant",
      category: "Watch",
      price: "$879.00",
      status: "Pending",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: 3,
      product: "iPhone 15 Pro Max",
      variant: "2 Variants",
      category: "SmartPhone",
      price: "$1199.00",
      status: "Delivered",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 4,
      product: "iPad Pro 3rd Gen",
      variant: "2 Variants",
      category: "Electronics",
      price: "$1699.00",
      status: "Cancelled",
      avatar: "https://i.pravatar.cc/40?img=4",
    },
    {
      id: 5,
      product: "AirPods Pro 2nd Gen",
      variant: "1 Variant",
      category: "Accessories",
      price: "$249.00",
      status: "Delivered",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "success";
      case "Pending":
        return "warning";
      case "Cancelled":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <AdminLayout currentPage="Dashboard">
      {/* 🔥 GIẢM PADDING VÀ MARGIN TỐI ĐA */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          p: 3, // 🔥 TĂNG: Tăng padding để có khoảng cách với sidebar
          m: 0,
          height: "100%",
        }}
      >
        <Grid container spacing={3}>
          {" "}
          {/* 🔥 THÊM SPACING: Tạo khoảng cách giữa các hàng và cột */}
          {/* HÀG 1: Customer và Order - ĐỒNG BỘ CHÍNH XÁC với hàng 2 */}
          <Grid item xs={12}>
            <Grid container spacing={0} sx={{ mx: 0 }}>
              <Grid item xs={12} md={6} sx={{ pr: { md: 1.5 } }}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    height: 300, // 🔥 STANDARDIZE: Tất cả cards đều 300px
                  }}
                >
                  <CardContent sx={{ p: 3, height: "100%" }}>
                    {" "}
                    {/* 🔥 TĂNG: Từ p: 2 lên p: 3 */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                      <Box
                        sx={{
                          p: 2.5, // 🔥 TĂNG: Từ 1.5 lên 2.5
                          borderRadius: 3,
                          backgroundColor: "#e3f2fd",
                          color: "#1976d2",
                        }}
                      >
                        <People sx={{ fontSize: 42 }} />{" "}
                        {/* 🔥 TĂNG: Từ 32 lên 42 */}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6" // 🔥 TĂNG: Từ body1 lên h6
                          color="text.secondary"
                          sx={{ mb: 1, fontWeight: 500 }} // 🔥 TĂNG margin bottom
                        >
                          Customers
                        </Typography>
                        <Typography
                          variant="h2" // 🔥 TĂNG: Từ h3 lên h2
                          fontWeight={700}
                          sx={{ mb: 1, fontSize: "2.5rem" }} // 🔥 TĂNG: Từ 2rem lên 2.5rem
                        >
                          3,782
                        </Typography>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <TrendingUp sx={{ color: "#22c55e", fontSize: 24 }} />{" "}
                          {/* 🔥 TĂNG: Từ 18 lên 24 */}
                          <Typography
                            variant="h6" // 🔥 TĂNG: Từ body1 lên h6
                            sx={{ color: "#22c55e", fontWeight: 600 }}
                          >
                            11.01%
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} sx={{ pl: { md: 1.5 } }}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    height: 300, // 🔥 STANDARDIZE: Tất cả cards đều 300px
                  }}
                >
                  <CardContent sx={{ p: 3, height: "100%" }}>
                    {" "}
                    {/* 🔥 TĂNG: Từ p: 2 lên p: 3 */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                      <Box
                        sx={{
                          p: 2.5, // 🔥 TĂNG: Từ 1.5 lên 2.5
                          borderRadius: 3,
                          backgroundColor: "#fff3e0",
                          color: "#f57c00",
                        }}
                      >
                        <ShoppingCart sx={{ fontSize: 42 }} />{" "}
                        {/* 🔥 TĂNG: Từ 32 lên 42 */}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h6" // 🔥 TĂNG: Từ body1 lên h6
                          color="text.secondary"
                          sx={{ mb: 1, fontWeight: 500 }} // 🔥 TĂNG margin bottom
                        >
                          Orders
                        </Typography>
                        <Typography
                          variant="h2" // 🔥 TĂNG: Từ h3 lên h2
                          fontWeight={700}
                          sx={{ mb: 1, fontSize: "2.5rem" }} // 🔥 TĂNG: Từ 2rem lên 2.5rem
                        >
                          5,359
                        </Typography>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <TrendingDown
                            sx={{ color: "#ef4444", fontSize: 24 }}
                          />{" "}
                          {/* 🔥 TĂNG: Từ 18 lên 24 */}
                          <Typography
                            variant="h6" // 🔥 TĂNG: Từ body1 lên h6
                            sx={{ color: "#ef4444", fontWeight: 600 }}
                          >
                            9.05%
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          {/* HÀG 2: Monthly Sales - COMPACT */}
          <Grid item xs={12}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                height: 300, // 🔥 STANDARDIZE: Tất cả cards đều 300px
              }}
            >
              <CardContent sx={{ p: 3, height: "100%" }}>
                {" "}
                {/* 🔥 ĐỒNG BỘ: Padding 3 như các hàng khác */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1.5,
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    Monthly Sales
                  </Typography>
                  <IconButton size="small">
                    <MoreVert />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "end",
                    gap: 0.5, // Giảm gap
                    height: 220, // 🔥 TĂNG: Từ 200px lên 220px để phù hợp với card 300px
                    px: 1.5, // Giảm padding
                  }}
                >
                  {monthlyData.map((item) => (
                    <Box
                      key={item.month}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flex: 1,
                        gap: 0.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          maxWidth: 28, // Giảm width
                          height: (item.value / maxValue) * 160, // Giảm height
                          backgroundColor: "#3b82f6",
                          borderRadius: 1,
                          transition: "all 0.2s ease",
                          "&:hover": {
                            backgroundColor: "#2563eb",
                            transform: "scale(1.05)",
                          },
                        }}
                      />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ fontSize: "0.7rem" }}
                      >
                        {item.month}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1,
                    px: 1.5,
                  }}
                >
                  {[0, 100, 200, 300, 400].map((value) => (
                    <Typography
                      key={value}
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontSize: "0.7rem" }}
                    >
                      {value}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          {/* HÀG 3: Monthly Target - FULL WIDTH */}
          <Grid item xs={12}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                height: 300, // 🔥 STANDARDIZE: Tất cả cards đều 300px
              }}
            >
              <CardContent
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    Monthly Target
                  </Typography>
                  <IconButton size="small">
                    <MoreVert />
                  </IconButton>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4, // Tăng gap cho full width
                    flex: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 120, // Tăng size cho full width
                      height: 120,
                      borderRadius: "50%",
                      background: `conic-gradient(#3b82f6 0deg ${
                        75.55 * 3.6
                      }deg, #e5e7eb ${75.55 * 3.6}deg 360deg)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      sx={{
                        width: 90,
                        height: 90,
                        borderRadius: "50%",
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{ fontSize: "1.2rem" }}
                      >
                        75%
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#22c55e",
                          fontWeight: 600,
                          fontSize: "0.8rem",
                        }}
                      >
                        +10%
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h4"
                      fontWeight={700}
                      sx={{ mb: 1, fontSize: "2rem" }}
                    >
                      $3,287
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: "1rem", mb: 0.5 }}
                    >
                      Today's earnings
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#22c55e",
                        fontWeight: 600,
                        fontSize: "1rem",
                      }}
                    >
                      +10% vs last month
                    </Typography>
                  </Box>

                  {/* Thêm thông tin bổ sung cho full width */}
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h5" fontWeight={700} color="primary">
                      $4,350
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Target Goal
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      color="success.main"
                    >
                      89.2%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Achievement
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          {/* HÀG 4: Statistics - THỰC SỰ FULL WIDTH */}
          <Grid item xs={12}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                height: 300, // 🔥 STANDARDIZE: Tất cả cards đều 300px
              }}
            >
              <CardContent sx={{ p: 3, height: "100%" }}>
                {" "}
                {/* Giảm từ p: 4 xuống p: 3 */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      Statistics
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Target you've set for each month
                    </Typography>
                  </Box>
                  <Tabs
                    value={selectedTab}
                    onChange={(e, newValue) => setSelectedTab(newValue)}
                    sx={{
                      "& .MuiTab-root": {
                        textTransform: "none",
                        minWidth: "auto",
                        px: 2,
                      },
                    }}
                  >
                    <Tab label="Monthly" />
                    <Tab label="Quarterly" />
                    <Tab label="Annually" />
                  </Tabs>
                </Box>
                {/* Area Chart */}
                <Box sx={{ height: 200, position: "relative" }}>
                  {" "}
                  {/* 🔥 GIẢM: Từ 300px xuống 200px để phù hợp với card 300px */}
                  {/* Y-axis */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 40,
                      width: 40,
                    }}
                  >
                    {[250, 200, 150, 100, 50, 0].map((value, index) => (
                      <Box
                        key={value}
                        sx={{
                          position: "absolute",
                          top: `${index * 20}%`,
                          left: 0,
                          display: "flex",
                          alignItems: "center",
                          height: "20px",
                        }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          {value}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  {/* Chart area */}
                  <Box
                    sx={{
                      ml: 5,
                      height: "calc(100% - 40px)",
                      position: "relative",
                    }}
                  >
                    <svg
                      width="100%"
                      height="100%"
                      style={{ overflow: "visible" }}
                    >
                      {/* Grid lines */}
                      {[0, 1, 2, 3, 4, 5].map((index) => (
                        <line
                          key={index}
                          x1="0"
                          y1={`${index * 20}%`}
                          x2="100%"
                          y2={`${index * 20}%`}
                          stroke="#f0f0f0"
                          strokeWidth="1"
                        />
                      ))}

                      {/* Area fill */}
                      <defs>
                        <linearGradient
                          id="areaGradient"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#3b82f6"
                            stopOpacity="0.3"
                          />
                          <stop
                            offset="100%"
                            stopColor="#3b82f6"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>

                      <path
                        d={`M 0 60% L ${100 / 12}% 40% L ${200 / 12}% 50% L ${
                          300 / 12
                        }% 35% L ${400 / 12}% 45% L ${500 / 12}% 50% L ${
                          600 / 12
                        }% 40% L ${700 / 12}% 55% L ${800 / 12}% 30% L ${
                          900 / 12
                        }% 35% L ${1000 / 12}% 25% L ${
                          1100 / 12
                        }% 50% L 100% 80% L 0 80% Z`}
                        fill="url(#areaGradient)"
                      />

                      {/* Main line */}
                      <path
                        d={`M 0 60% L ${100 / 12}% 40% L ${200 / 12}% 50% L ${
                          300 / 12
                        }% 35% L ${400 / 12}% 45% L ${500 / 12}% 50% L ${
                          600 / 12
                        }% 40% L ${700 / 12}% 55% L ${800 / 12}% 30% L ${
                          900 / 12
                        }% 35% L ${1000 / 12}% 25% L ${1100 / 12}% 50%`}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                      />

                      {/* Secondary line */}
                      <path
                        d={`M 0 80% L ${100 / 12}% 70% L ${200 / 12}% 75% L ${
                          300 / 12
                        }% 65% L ${400 / 12}% 70% L ${500 / 12}% 72% L ${
                          600 / 12
                        }% 68% L ${700 / 12}% 75% L ${800 / 12}% 62% L ${
                          900 / 12
                        }% 65% L ${1000 / 12}% 60% L ${1100 / 12}% 70%`}
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                      />
                    </svg>
                  </Box>
                  {/* X-axis labels */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                      ml: 5,
                    }}
                  >
                    {[
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ].map((month) => (
                      <Typography
                        key={month}
                        variant="caption"
                        color="text.secondary"
                      >
                        {month}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          {/* HÀG 5: Customers Demographic + Recent Orders */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                height: 300, // 🔥 STANDARDIZE: Tất cả cards đều 300px
              }}
            >
              <CardContent sx={{ p: 3, height: "100%" }}>
                {" "}
                {/* Giảm từ p: 4 xuống p: 3 */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      Customers Demographic
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Number of customer based on country
                    </Typography>
                  </Box>
                  <IconButton size="small">
                    <MoreVert />
                  </IconButton>
                </Box>
                {/* World Map Placeholder */}
                <Box
                  sx={{
                    height: 120, // 🔥 GIẢM: Từ 200px xuống 120px để phù hợp với card 300px
                    backgroundColor: "#f8f9fa",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                    backgroundImage:
                      'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500"><path d="M200,200 L300,150 L400,180 L500,160 L600,190 L700,170 L800,200 L200,200 Z" fill="%23e5e7eb"/></svg>\')',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Typography color="text.secondary">
                    🌍 World Map Visualization
                  </Typography>
                </Box>
                {/* Country Stats */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 24,
                          height: 16,
                          backgroundColor: "#3b82f6",
                          borderRadius: 1,
                        }}
                      />
                      <Typography variant="body2">USA</Typography>
                    </Box>
                    <Typography variant="body2" fontWeight={600}>
                      70%
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      height: 4,
                      backgroundColor: "#f0f0f0",
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: "70%",
                        height: "100%",
                        backgroundColor: "#3b82f6",
                        borderRadius: 2,
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 24,
                          height: 16,
                          backgroundColor: "#10b981",
                          borderRadius: 1,
                        }}
                      />
                      <Typography variant="body2">France</Typography>
                    </Box>
                    <Typography variant="body2" fontWeight={600}>
                      23%
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      height: 4,
                      backgroundColor: "#f0f0f0",
                      borderRadius: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: "23%",
                        height: "100%",
                        backgroundColor: "#10b981",
                        borderRadius: 2,
                      }}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                height: 300, // 🔥 STANDARDIZE: Tất cả cards đều 300px
              }}
            >
              <CardContent sx={{ p: 3, height: "100%" }}>
                {" "}
                {/* 🔥 Giảm từ p: 4 xuống p: 3 */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    Recent Orders
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                      startIcon={<FilterList />}
                      variant="outlined"
                      size="small"
                      sx={{ textTransform: "none" }}
                    >
                      Filter
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      sx={{ textTransform: "none" }}
                    >
                      See all
                    </Button>
                  </Box>
                </Box>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Products</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {recentOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                              }}
                            >
                              <Avatar
                                src={order.avatar}
                                sx={{ width: 40, height: 40 }}
                              />
                              <Box>
                                <Typography variant="body2" fontWeight={600}>
                                  {order.product}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  {order.variant}
                                </Typography>
                              </Box>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2">
                              {order.category}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography variant="body2" fontWeight={600}>
                              {order.price}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={order.status}
                              color={getStatusColor(order.status)}
                              size="small"
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </AdminLayout>
  );
};

export default DashboardPage;
