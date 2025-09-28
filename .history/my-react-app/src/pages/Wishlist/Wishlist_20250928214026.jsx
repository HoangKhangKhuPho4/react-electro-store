import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromWishlist,
  selectWishlist,
} from "../../redux/appSlice";

const Wishlist = () => {
  const wishlist = useSelector(selectWishlist);
  const dispatch = useDispatch();

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My wishlist
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "8%" }}>Image</TableCell>
              <TableCell sx={{ width: "37%" }}>Product Name</TableCell>
              <TableCell sx={{ width: "15%" }}>Unit Price</TableCell>
              <TableCell sx={{ width: "15%" }}>Stock Status</TableCell>
              <TableCell sx={{ width: "15%" }}></TableCell>
              <TableCell sx={{ width: "10%" }} align="center">
                Remove
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wishlist.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No products in wishlist.
                </TableCell>
              </TableRow>
            ) : (
              wishlist.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <img
                      src={product.image}
                      alt={product.title || product.name}
                      style={{
                        width: 48,
                        height: 48,
                        objectFit: "cover",
                        borderRadius: 8,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                      }}
                    />
                  </TableCell>
                  <TableCell>{product.title || product.name}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>In Stock</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="warning"
                      size="small"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add to cart
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => dispatch(removeFromWishlist(product.id))}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Wishlist;
