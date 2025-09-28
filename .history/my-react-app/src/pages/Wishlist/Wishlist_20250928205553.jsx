import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  selectWishlist,
  removeFromWishlist,
  addToCart,
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
              <TableCell sx={{ width: "45%" }}>Product Name</TableCell>
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
                <TableCell colSpan={5} align="center">
                  No products in wishlist.
                </TableCell>
              </TableRow>
            ) : (
              wishlist.map((product) => (
                <TableRow key={product.id}>
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
