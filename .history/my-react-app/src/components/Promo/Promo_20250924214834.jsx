import { useMemo } from "react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItemCount } from "../../redux/appSlice";
import { useGetPostsQuery } from "../../redux/apiSlice";

const featureItems = [
  { title: "FREE RETURN", desc: "30 days money back guarantee!", icon: "↻" },
  { title: "FREE SHIPPING", desc: "Free shipping on all order", icon: "✈" },
  { title: "SUPPORT 24/7", desc: "We support online 24 hrs a day", icon: "⚙" },
  { title: "GIFT CARD", desc: "Recieve gift all over order $50", icon: "🎁" },
  { title: "SECURE PAYMENT", desc: "We value your security", icon: "🔒" },
  { title: "ONLINE SERVICE", desc: "Free return products in 30 days", icon: "🛎" },
];

const Promo = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartItemCount);

  // Use RTK Query as demo data source for promo titles/subtitles
  const { data: posts = [], isFetching } = useGetPostsQuery();

  const promoCards = useMemo(
    () => [
      {
        id: 101,
        title: posts[0]?.title || "Smart Camera",
        subtitle: "Find The Best Camera for You!",
        sale: "40% Off",
        image:
          "https://images.unsplash.com/photo-1519183071298-a2962be96f83?q=80&w=1600&auto=format&fit=crop",
        price: 299,
      },
      {
        id: 102,
        title: posts[1]?.title || "Smart Whatch",
        subtitle: "Find The Best Whatches for You!",
        sale: "20% Off",
        image:
          "https://images.unsplash.com/photo-1518445075-00a2d54c4cfa?q=80&w=1600&auto=format&fit=crop",
        price: 199,
      },
    ],
    [posts]
  );

  return (
    <Box component="section" sx={{ width: "100%", py: 2, px: { xs: 2, md: 3 } }}>
      {/* Row 1: six feature boxes */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {featureItems.map((f, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={idx}>
            <Card sx={{ height: "100%", display: "flex", alignItems: "flex-start", gap: 1.5, p: 2, boxShadow: 0, border: "1px solid #eee" }}>
              <Box sx={{ fontSize: 26 }}>{f.icon}</Box>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, letterSpacing: 0.3 }}>
                  {f.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  {f.desc}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Row 2: two promo cards (same row, equal width) */}
      <Grid container spacing={2} alignItems="stretch" sx={{ flexWrap: 'nowrap' }}>
        {promoCards.map((p) => (
          <Grid key={p.id} item xs={6} sm={6} md={6} lg={6} sx={{ flex: '1 1 50%' }}>
            <Card sx={{ position: "relative", overflow: "hidden", borderRadius: 2, border: "1px solid #eee", height: "100%", minHeight: 200 }}>
              <Grid container>
                <Grid item xs={7} sx={{ p: 2 }}>
                  <Typography variant="overline" sx={{ color: "#8a8a8a", fontSize: '0.7rem' }}>
                    {p.subtitle}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: "#ff6b35", mt: 0.5 }}>
                    {p.title}
                  </Typography>
                  <Typography variant="h4" sx={{ color: "#ef2f06", fontWeight: 800, my: 0.5 }}>
                    {p.sale}
                  </Typography>
                  <CardActions sx={{ pl: 0 }}>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => dispatch(addToCart({ id: p.id, name: p.title, price: p.price }))}
                    >
                      Add to cart (Cart: {cartCount})
                    </Button>
                  </CardActions>
                </Grid>
                <Grid item xs={5} sx={{ position: "relative", minHeight: 220 }}>
                  <CardMedia component="img" height="100%" image={p.image} alt={p.title} sx={{ objectFit: "contain", p: 2 }} />
                </Grid>
              </Grid>
              <Box sx={{ position: "absolute", top: 12, right: 12, bgcolor: "#f28900", color: "#fff", px: 1.5, py: 0.5, borderRadius: 2, fontWeight: 700 }}>
                {isFetching ? "Loading..." : "Promo"}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Promo;


