import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/appSlice";

const IMAGES = [
  "https://images.unsplash.com/photo-1510557880182-3d4d3cba35c1?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518445075-00a2d54c4cfa?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470259078422-826894b933aa?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512499617640-c2f999098c79?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1600&auto=format&fit=crop",
];

const buildProducts = (count, offset = 0) =>
  Array.from({ length: count }).map((_, i) => {
    const id = offset + i + 1;
    return {
      id,
      name: `Apple iPad Mini\nG${2356 + ((id % 9) + 1)}`,
      category: "SmartPhone",
      oldPrice: 1250,
      price: 1050,
      badge: id % 3 === 0 ? "Sale" : id % 4 === 0 ? "New" : undefined,
      image: IMAGES[(offset + i) % IMAGES.length],
    };
  });

const OurProducts = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);

  const datasets = useMemo(
    () => ({
      all: buildProducts(12, 0),
      newArrivals: buildProducts(12, 3),
      featured: buildProducts(12, 6),
      topSelling: buildProducts(12, 9),
    }),
    []
  );

  const current = useMemo(() => {
    if (tab === 1) return datasets.newArrivals;
    if (tab === 2) return datasets.featured;
    if (tab === 3) return datasets.topSelling;
    return datasets.all;
  }, [tab, datasets]);

  const visible = current.slice(0, 8); // 2 rows x 4 columns

  return (
    <Box component="section" sx={{ width: "100%", px: { xs: 2, md: 3 }, py: 3 }}>
      {/* Header row: Title left, Tabs right */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, gap: 2, maxWidth: 1200, mx: 'auto', px: { xs: 1, md: 2 } }}>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Our Products
        </Typography>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          sx={{ '& .MuiTab-root': { textTransform: 'none', borderRadius: 999, minHeight: 36, fontSize: '0.9rem', px: 1.5 }, '& .Mui-selected': { bgcolor: '#ffefdd' }, mr: { xs: 1, md: 3 } }}
        >
          <Tab label="All Products" />
          <Tab label="New Arrivals" />
          <Tab label="Featured" />
          <Tab label="Top Selling" />
        </Tabs>
      </Box>

      <Grid container spacing={2} alignItems="stretch" sx={{ maxWidth: 1200, mx: 'auto' }}>
        {visible.map((p) => (
          <Grid key={p.id} item xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
            <Card sx={{ p: 1.5, border: '1px solid #eee', borderRadius: 2, height: '100%', display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Box sx={{ position: 'relative' }}>
                {p.badge && (
                  <Box sx={{ position: 'absolute', top: 8, right: 8, bgcolor: p.badge === 'Sale' ? '#ef2f06' : '#f28900', color: '#fff', px: 1.2, py: 0.4, borderRadius: 999, fontSize: 12, fontWeight: 700 }}>
                    {p.badge}
                  </Box>
                )}
                <CardMedia component="img" image={p.image} alt={p.name} sx={{ height: 190, objectFit: 'contain' }} />
              </Box>
              <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                <Typography variant="caption" sx={{ color: '#8a8a8a' }}>{p.category}</Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, whiteSpace: 'pre-line' }}>{p.name}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, alignItems: 'baseline', mt: 0.5 }}>
                  <Typography variant="body2" sx={{ textDecoration: 'line-through', color: '#8a8a8a' }}>${p.oldPrice.toFixed(2)}</Typography>
                  <Typography variant="subtitle1" sx={{ color: '#f28900', fontWeight: 800 }}>${p.price.toFixed(2)}</Typography>
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pt: 0 }}>
                <Button variant="contained" color="warning" onClick={() => dispatch(addToCart({ id: p.id, name: p.name, price: p.price }))}>Add To Cart</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurProducts;


