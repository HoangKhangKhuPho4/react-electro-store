import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

// Component con cho các mục thông tin nhanh ở trên cùng
const QuickItem = ({ icon, title, subtitle }) => (
  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
    <Box
      sx={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#ff3f3f",
        color: "#fff",
      }}
    >
      {icon}
    </Box>
    <Box>
      <Typography sx={{ fontWeight: 700, color: "#fff" }}>{title}</Typography>
      <Typography sx={{ color: "#bdbdbd", fontSize: 14 }}>
        {subtitle}
      </Typography>
    </Box>
  </Box>
);

// Component con cho mỗi link ở các cột
const LinkItem = ({ label }) => (
  <Typography
    component="a"
    href="#"
    sx={{
      color: "#e9e9e9",
      textDecoration: "none",
      fontSize: 14,
      position: "relative",
      pl: "14px",
      "&:hover": { color: "#ffffff" },
      "&::before": {
        content: '"›"',
        position: "absolute",
        left: 0,
        color: "#ff8a00",
      },
    }}
  >
    {label}
  </Typography>
);

const Footer = () => {
  return (
    <Box component="footer">
      {/* Top quick info bar */}
      <Box sx={{ bgcolor: "#3a3d40", py: 3 }}>
        <Grid
          container
          spacing={2}
          sx={{ maxWidth: 1200, mx: "auto", px: 2, mr: 4 }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <QuickItem
              icon={<PlaceIcon />}
              title="Address"
              subtitle="123 Street New York,USA"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <QuickItem
              icon={<MailOutlineIcon />}
              title="Mail Us"
              subtitle="info@example.com"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <QuickItem
              icon={<PhoneIcon />}
              title="Telephone"
              subtitle="(+012) 3456 7890"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <QuickItem
              icon={<PhoneIcon />}
              title="Yoursite@ex.com"
              subtitle="(+012) 3456 7890"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Main footer columns */}
      <Box sx={{ bgcolor: "#2f3234", py: 5 }}>
        <Grid
          container
          spacing={2}
          sx={{ maxWidth: 1200, mx: "auto", px: 2, mr: 4 }}
        >
          {/* Newsletter Column */}
          <Grid item xs={12} md={3}>
            <Typography
              sx={{ fontWeight: 800, mb: 1.5, color: "#ff8a00", fontSize: 18 }}
            >
              Newsletter
            </Typography>
            <Typography
              sx={{
                color: "#bdbdbd",
                mb: 2,
                fontSize: 14,
                maxWidth: "280px", // <-- Thêm dòng này
              }}
            >
              Dolor sit amet justo amet elitr clita ipsum elitr est.Lorem ipsum
              dolor sit amet, consetetur adipiscing elit.
            </Typography>
            <Box
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                background: "#fff",
                borderRadius: "999px",
                p: "4px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                maxWidth: "280px",
              }}
            >
              <TextField
                variant="standard"
                placeholder="Enter your email"
                sx={{
                  flex: 1,
                  "& .MuiInput-underline:before": { borderBottom: "none" },
                  "& .MuiInput-underline:after": { borderBottom: "none" },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottom: "none",
                  },
                  "& .MuiInputBase-input": { p: "8px 16px" },
                }}
              />
              <Button
                sx={{
                  bgcolor: "#ff9800",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "999px",
                  px: 2.5,
                  py: 1.25,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#f57c00" },
                }}
              >
                SignUp
              </Button>
            </Box>
          </Grid>

          {/* Other Link Columns */}
          <Grid item xs={12} md={3}>
            <LinkColumn
              title="Customer Service"
              links={[
                "Contact Us",
                "Returns",
                "Order History",
                "Site Map",
                "Testimonials",
                "My Account",
              ]}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <LinkColumn
              title="Information"
              links={[
                "About Us",
                "Delivery information",
                "Privacy Policy",
                "Terms & Conditions",
                "Warranty",
                "FAQ",
              ]}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <LinkColumn
              title="Extras"
              links={[
                "Brands",
                "Gift Vouchers",
                "Affiliates",
                "Wishlist",
                "Order History",
                "Track Your Order",
              ]}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

// Component con để tái sử dụng cho các cột link
const LinkColumn = ({ title, links }) => (
  <Box>
    <Typography
      sx={{ fontWeight: 800, mb: 1.5, color: "#ff8a00", fontSize: 18 }}
    >
      {title}
    </Typography>
    <Box sx={{ display: "grid", gap: 1 }}>
      {links.map((link) => (
        <LinkItem key={link} label={link} />
      ))}
    </Box>
  </Box>
);

export default Footer;
