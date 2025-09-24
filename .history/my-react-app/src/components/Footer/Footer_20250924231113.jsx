import { Box, Button, Grid, IconButton, InputBase, Paper, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import "./Footer.css";

const QuickItem = ({ icon, title, subtitle }) => (
  <Box className="footer-quick-item">
    <Box className="footer-quick-icon">{icon}</Box>
    <Box>
      <Typography className="footer-quick-title">{title}</Typography>
      <Typography className="footer-quick-sub">{subtitle}</Typography>
    </Box>
  </Box>
);

const LinkItem = ({ label }) => (
  <Box component="a" href="#" className="footer-link">
    {label}
  </Box>
);

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      {/* Top quick info bar */}
      <Box className="footer-quick">
        <Grid container spacing={2} className="footer-container">
          <Grid item xs={12} md={3}>
            <QuickItem icon={<PlaceIcon />} title="Address" subtitle="123 Street New York,USA" />
          </Grid>
          <Grid item xs={12} md={3}>
            <QuickItem icon={<MailOutlineIcon />} title="Mail Us" subtitle="info@example.com" />
          </Grid>
          <Grid item xs={12} md={3}>
            <QuickItem icon={<PhoneIcon />} title="Telephone" subtitle="(+012) 3456 7890" />
          </Grid>
          <Grid item xs={12} md={3}>
            <QuickItem icon={<WhatshotIcon />} title="Yoursite@ex.com" subtitle="(+012) 3456 7890" />
          </Grid>
        </Grid>
      </Box>

      {/* Main footer columns */}
      <Box className="footer-main">
        <Grid container spacing={3} className="footer-container" alignItems="stretch">
          <Grid item xs={12} md={3}>
            <Box className="footer-col">
              <Typography className="footer-col-title">Newsletter</Typography>
              <Typography className="footer-text">
              Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit consectetur adipiscing elit.
              </Typography>
              <Paper component="form" className="newsletter" elevation={0}>
                <InputBase className="newsletter-input" placeholder="Enter your email" />
                <Button variant="contained" color="warning" className="newsletter-btn">SignUp</Button>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box className="footer-col">
              <Typography className="footer-col-title">Customer Service</Typography>
              <Box className="footer-links">
              <LinkItem label="Contact Us" />
              <LinkItem label="Returns" />
              <LinkItem label="Order History" />
              <LinkItem label="Site Map" />
              <LinkItem label="Testimonials" />
              <LinkItem label="My Account" />
              <LinkItem label="Unsubscribe Notification" />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box className="footer-col">
              <Typography className="footer-col-title">Information</Typography>
              <Box className="footer-links">
              <LinkItem label="About Us" />
              <LinkItem label="Delivery information" />
              <LinkItem label="Privacy Policy" />
              <LinkItem label="Terms & Conditions" />
              <LinkItem label="Warranty" />
              <LinkItem label="FAQ" />
              <LinkItem label="Seller Login" />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box className="footer-col">
              <Typography className="footer-col-title">Extras</Typography>
              <Box className="footer-links">
              <LinkItem label="Brands" />
              <LinkItem label="Gift Vouchers" />
              <LinkItem label="Affiliates" />
              <LinkItem label="Wishlist" />
              <LinkItem label="Order History" />
              <LinkItem label="Track Your Order" />
              <LinkItem label="Track Your Order" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;


