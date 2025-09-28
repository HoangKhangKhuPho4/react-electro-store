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
} from "@mui/material";

const Wishlist = () => {
  return (
    <Container sx={{ py: 4 }}>
      {" "}
      {/* Thêm khoảng đệm trên dưới */}
      <Typography variant="h4" component="h1" gutterBottom>
        My wishlist
      </Typography>
      <TableContainer component={Paper}>
        {" "}
        {/* Dùng Paper để có nền trắng và đổ bóng */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "45%" }}>Product Name</TableCell>
              <TableCell sx={{ width: "15%" }}>Unit Price</TableCell>
              <TableCell sx={{ width: "15%" }}>Stock Status</TableCell>
              <TableCell sx={{ width: "15%" }}></TableCell>{" "}
              {/* Bỏ trống cho nút Add to cart */}
              <TableCell sx={{ width: "10%" }} align="center">
                Remove
              </TableCell>
            </TableRow>
          </TableHead>

          {/* === PHẦN THÂN BẢNG SẼ Ở ĐÂY === */}
          <TableBody>{/* Chúng ta sẽ lặp và tạo các dòng ở đây */}</TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Wishlist;
