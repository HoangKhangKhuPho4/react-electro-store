/**
 * SHOP PAGE
 */
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid, // <-- Thêm
  InputLabel, // <-- Thêm
  MenuItem, // <-- Thêm // <-- Thêm
  Pagination,
  Select,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";
import ProductCard from "./categories/ProductCard.jsx"; // <-- Sửa lại đường dẫn import

const mockProducts = [
  {
    id: 1,
    title: "Wireless Mouse",
    price: 25.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oCdetw_mKDxbj3kLPG0rD3Q2SEjJulmqGw&s",
    category: "Accessories",
  },
  {
    id: 2,
    title: "Gaming PC Tower",
    price: 1200.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Ac1fl2pMuI3nt1tedAvRjhxbVXrRGViSlg&s",
    category: "Electronics & Computer",
  },
  {
    id: 3,
    title: 'Macbook Pro 16"',
    price: 2399.0,
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/318/659/products/image-11-20-19-at-10-03-am-a10b2afc-8080-41da-b53a-45c97e350574-af4f88bc-e2a9-4145-a538-3588290489e0.jpg?v=1603768511207",
    category: "Laptops & Desktops",
  },
  {
    id: 4,
    title: "iPhone 14 Pro",
    price: 999.0,
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14_2_1.jpg",
    category: "Mobiles & Tablets",
  },
  {
    id: 5,
    title: 'Smart TV 55"',
    price: 550.0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxuzv-XEwBJNpYB4SGhug8YHzVlIMpiH90A&s",
    category: "SmartPhone & Smart TV",
  },
  {
    id: 6,
    title: "Bluetooth Keyboard",
    price: 79.99,
    image:
      "https://cdn.hstatic.net/products/200000314529/plk_blue_ff35ad05d8694e3fa2a82edb5692fb67_master.jpeg",
    category: "Accessories",
  },
  {
    id: 7,
    title: "Dell XPS 15 Laptop",
    price: 1800.0,
    image:
      "https://nhatminhlaptop.com/upload/products/2023-03-23-13-45-56/9530-1.jpg",
    category: "Laptops & Desktops",
  },
  {
    id: 8,
    title: "Samsung Galaxy Tab S8",
    price: 699.0,
    image:
      "https://cdn2.cellphones.com.vn/x/media/catalog/product/t/a/tab_s8_1_1_2.jpg",
    category: "Mobiles & Tablets",
  },
];

const categories = [
  "Accessories",
  "Electronics & Computer",
  "Laptops & Desktops",
  "Mobiles & Tablets",
  "SmartPhone & Smart TV",
];

const colors = [{ name: "Gold" }, { name: "Green" }, { name: "White" }];

const priceRanges = [
  { label: "Under $50", value: "under50" },
  { label: "$50 - $100", value: "50to100" },
  { label: "Above $100", value: "above100" },
];

const Shop = () => {
  const [layout, setLayout] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState(""); // <-- Sửa lại dòng này

  const [selectedColor, setSelectedColor] = useState("");

  // "grid" hoặc "list"
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   //Logic gọi API
  //   const fetchProducts = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       const data = await response.json();
  //       setProducts(data);

  //     } catch (error) {
  //       console.log('Fail to fetch Products: ', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  //Logic Render có điều kiện
  // if (loading) {
  //   return (
  //     <Box sx={{ p: 3 }}>
  //       {/* Giao diện skeleton sẽ nằm ở đây */}
  //       <Typography>
  //           Loading Products...
  //         </Typography>
  //      </Box>
  //   );
  // }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", gap: 3 }}>
        {/* === SIDEBAR === */}
        <Box
          sx={{
            width: "30%",
            minWidth: 220,
            maxWidth: 350,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            overflowY: "auto",
          }}
        >
          {/* Products Categories List - ĐÃ CHUYỂN ĐỔI */}
          <FormControl sx={{ mb: 3 }}>
            <FormLabel
              sx={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                mb: 2,
                color: "text.primary", // Dùng màu mặc định của theme
              }}
            >
              Products Categories
            </FormLabel>
            <RadioGroup
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <FormControlLabel
                  key={cat}
                  value={cat} // Giá trị khi được chọn
                  control={<Radio />}
                  label={cat}
                />
              ))}
            </RadioGroup>
          </FormControl>

          {/* Select By Color List */}
          <FormControl sx={{ mb: 3 }}>
            <FormLabel
              sx={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                mb: 2,
                color: "text.primary", // Dùng màu mặc định của theme
              }}
            >
              Select By Color
            </FormLabel>
            <RadioGroup
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              {colors.map((color) => (
                <FormControlLabel
                  key={color.name}
                  value={color.name} // Giá trị khi được chọn
                  control={<Radio />}
                  label={color.name}
                />
              ))}
            </RadioGroup>
          </FormControl>

          {/* Additional Products Radio List */}
          <FormControl sx={{ mb: 3 }}>
            <FormLabel
              sx={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                mb: 2,
                color: "#444",
              }}
            >
              Additional Products
            </FormLabel>
            <RadioGroup>
              {categories.map((cat) => (
                <FormControlLabel
                  key={cat}
                  value={cat}
                  control={<Radio />}
                  label={cat}
                  sx={{ mb: 2 }}
                />
              ))}
            </RadioGroup>
          </FormControl>

          {/* Price Filter Checkboxes */}
          <Box
            sx={{
              mb: 3,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Price
            </Typography>
            {priceRanges.map((range) => (
              <FormControlLabel
                key={range.value}
                control={<Checkbox />}
                label={range.label}
                sx={{ ml: 1 }}
              />
            ))}
          </Box>
        </Box>

        {/* === PRODUCTS === */}
        <Box sx={{ flex: 1 }}>
          {/* 1. Thanh sắp xếp */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mb: 3,
              pr: 2,
              gap: 2,
            }}
          >
            {/* Nút hiển thị ngang/dọc với background */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mr: 0.1, // giảm khoảng cách tối đa với Sort By
                background: "#fff7e6",
                borderRadius: "16px",
                boxShadow: "0 2px 8px rgba(255,165,0,0.08)",
                padding: "6px 16px",
              }}
            >
              <button
                style={{
                  border: "none",
                  background: layout === "grid" ? "orange" : "transparent",
                  cursor: "pointer",
                  padding: 6,
                  borderRadius: 8,
                  transition: "background 0.2s",
                  outline: "none",
                }}
                onClick={() => setLayout("grid")}
              >
                <ViewModuleIcon
                  sx={{
                    color: layout === "grid" ? "white" : "orange",
                    fontSize: 32,
                  }}
                />
              </button>
              <button
                style={{
                  border: "none",
                  background: layout === "list" ? "orange" : "transparent",
                  cursor: "pointer",
                  padding: 6,
                  borderRadius: 8,
                  transition: "background 0.2s",
                  outline: "none",
                }}
                onClick={() => setLayout("list")}
              >
                <ViewListIcon
                  sx={{
                    color: layout === "list" ? "white" : "orange",
                    fontSize: 32,
                  }}
                />
              </button>
            </Box>
            {/* Sort By */}
            <FormControl size="small" sx={{ minWidth: 160 }}>
              <InputLabel>Sort by</InputLabel>
              <Select label="Sort by" value="popularity">
                <MenuItem value="popularity">Popularity</MenuItem>
                <MenuItem value="price">Price</MenuItem>
                <MenuItem value="rating">Rating</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Hiển thị số lượng kết quả */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, ml: 1 }}
          >
            Showing {mockProducts.length} results
          </Typography>

          {/* 2. Lưới sản phẩm -- ĐÚNG: Nằm bên trong cột md={8} */}
          <Grid container spacing={4}>
            {mockProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} lg={3}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>

          {/* PHÂN TRANG ĐẸP VỚI MUI */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 4,
            }}
          >
            <Pagination
              count={6}
              shape="rounded"
              color="primary"
              size="large"
              sx={{
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                "& .Mui-selected": {
                  backgroundColor: "orange !important",
                  color: "white",

                  fontWeight: "bold",
                },
                "& .MuiPaginationItem-root:hover": {
                  backgroundColor: "#ffe0b2",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Shop;
