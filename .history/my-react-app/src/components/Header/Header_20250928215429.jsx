import {
  ShoppingCart as CartIcon,
  FavoriteBorder as FavoriteIcon,
  Search as SearchIcon,
  Shuffle as ShuffleIcon,
} from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  AppBar,
  Badge,
  Box /*...,*/,
  Button,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItemCount, selectCartTotal, selectWishlistCount } from "../../redux/appSlice";
import Logo from "../UI/Logo";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  // const cartItemCount =     0;

  //dùng useSelector() để lấy dữ liệu từ store
  const cartItemCount = useSelector(selectCartItemCount);
  //lấy luôn tổng tiền
  const cartTotal = useSelector(selectCartTotal);
  // Lấy số lượng sản phẩm yêu thích
  const wishlistCount = useSelector(selectWishlistCount);

  const categories = [
    "All Category",
    "Electronics",
    "Computers",
    "Smartphones",
    "Cameras",
    "Audio",
    "Gaming",
    "Home & Garden",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm, "in category:", selectedCategory);
  };

  return (
    <AppBar
      position="sticky"
      className="header"
      sx={{
        backgroundColor: "white",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        borderBottom: "1px solid #e8e9ea",
      }}
    >
      <Toolbar
        className="header-container"
        sx={{
          minHeight: "90px !important",
          padding: "0 2rem",
          display: "grid",
          gridTemplateColumns:
            "minmax(200px, 1fr) minmax(500px, 3fr) minmax(280px, 1fr)",
          alignItems: "center",
          gap: "2rem",
          maxWidth: "100%",
          margin: 0,
          width: "100%",
        }}
      >
        {/* Khu vực 1: Logo (Trái) */}
        <Box
          className="header-logo"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Logo />
        </Box>

        {/* Khu vực 2: Search Bar (Giữa) */}
        <Box
          className="header-search"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSearch}
            sx={{
              display: "flex",
              width: "100%",
              maxWidth: "600px",
              backgroundColor: "white",
              border: "2px solid #FF7A00",
              borderRadius: "25px",
              overflow: "hidden",
            }}
          >
            {/* Category Dropdown */}
            <FormControl
              sx={{
                minWidth: 140,
                "& .MuiSelect-select": {
                  padding: "12px 16px",
                  borderRadius: 0,
                  border: "none",
                  "&:focus": {
                    backgroundColor: "transparent",
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              <Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                displayEmpty
                sx={{
                  color: "#666",
                  fontSize: "14px",
                  "& .MuiSelect-icon": {
                    color: "#999",
                  },
                }}
              >
                {categories.map((category) => (
                  <MenuItem
                    key={category}
                    value={category}
                    sx={{ fontSize: "14px" }}
                  >
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Search Input */}
            <TextField
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Looking For?"
              variant="outlined"
              sx={{
                flex: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                    borderLeft: "1px solid #e0e0e0",
                  },
                  "&:hover fieldset": {
                    border: "none",
                    borderLeft: "1px solid #e0e0e0",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                    borderLeft: "1px solid #e0e0e0",
                  },
                },
                "& .MuiInputBase-input": {
                  padding: "12px 16px",
                  fontSize: "14px",
                  color: "#333",
                  "&::placeholder": {
                    color: "#999",
                    opacity: 1,
                  },
                },
              }}
            />

            {/* Search Button */}
            <IconButton
              type="submit"
              sx={{
                backgroundColor: "#FF7A00",
                borderRadius: 0,
                padding: "12px 20px",
                "&:hover": {
                  backgroundColor: "#e66900",
                },
              }}
            >
              <SearchIcon sx={{ color: "white", fontSize: "20px" }} />
            </IconButton>
          </Box>
        </Box>

        {/* Khu vực 3: User Actions (Phải) */}
        <Box
          className="header-actions"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "16px",
          }}
        >
          {/* Shuffle Icon */}
          <IconButton sx={{ color: "#666" }} title="Random Product">
            <ShuffleIcon />
          </IconButton>

          {/* Wishlist Icon */}
          <Link
            to="/wishlist"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <IconButton sx={{ color: "#666" }} title="Wishlist">
              <Badge badgeContent={wishlistCount} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          </Link>

          {/* Cart Icon with Price */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <IconButton sx={{ color: "#666" }} title="Shopping Cart">
                <Badge badgeContent={cartItemCount} color="error">
                  <CartIcon />
                </Badge>
              </IconButton>
            </Link>

            <Typography
              variant="h6"
              sx={{
                color: "#333",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              ${cartTotal.toFixed(2)}
            </Typography>
          </Box>

          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              startIcon={<PersonOutlineIcon />}
              sx={{
                backgroundColor: "#D32F2F", // Màu đỏ
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#B71C1C",
                },
              }}
            >
              Đăng nhập
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
