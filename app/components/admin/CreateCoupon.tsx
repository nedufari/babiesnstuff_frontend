import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IOpenCreateCoupon } from "@/app/types";
import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

const CreateCoupon: React.FC<IOpenCreateCoupon> = ({ open, setOpen }) => {
  const [category, setCategory] = useState("");
  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            handleClose();
          },
        }}
      >
        <DialogTitle sx={{ textAlign: "center" }}>Coupons</DialogTitle>
        <DialogContent>
          <Box sx={{}}>
            <InputLabel>
              <Typography
                variant="poster"
                color="#1C1B1F"
                fontWeight="500"
                fontSize="16px"
                lineHeight="19.36px"
              >
                Coupon Name
              </Typography>
            </InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Coupon Name"
              name="name"
              autoComplete="Coupon Name"
              autoFocus
            />
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <InputLabel>
              <Typography
                variant="poster"
                color="#1C1B1F"
                fontWeight="500"
                fontSize="16px"
                lineHeight="19.36px"
              >
                Apply Coupon
              </Typography>
            </InputLabel>

            <Select
              labelId="category"
              id="category"
              value={category}
              label="Category"
              onChange={handleCategoryChange}
              fullWidth
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Box>

          <Box sx={{ marginBottom: "1rem" }}>
            <InputLabel>
              <Typography
                variant="poster"
                color="#1C1B1F"
                fontWeight="500"
                fontSize="16px"
                lineHeight="19.36px"
              >
                Discount
              </Typography>
            </InputLabel>

            <Select
              labelId="category"
              id="category"
              value={category}
              label="Category"
              onChange={handleCategoryChange}
              fullWidth
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Box>

          <Box sx={{}}>
            <InputLabel>
              <Typography
                variant="poster"
                color="#1C1B1F"
                fontWeight="500"
                fontSize="16px"
                lineHeight="19.36px"
              >
                Number of times coupon can be used by a customer
              </Typography>
            </InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="stock"
              label="Number of times coupon can be used by a customer"
              name="stock"
              autoComplete="Total Stock Amount"
              autoFocus
            />
          </Box>

          <Box sx={{}}>
            <InputLabel>
              <Typography
                variant="poster"
                color="#1C1B1F"
                fontWeight="500"
                fontSize="16px"
                lineHeight="19.36px"
              >
                Expiry date of coupon
              </Typography>
            </InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="expiryDate"
              label="Expiry date of coupon"
              name="expiryDate"
              autoComplete="Expiry date of coupon"
              autoFocus
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              textTransform: "capitalize",
              backgroundColor: "primary.main",
            }}
          >
            <Typography
              variant="poster"
              fontWeight="600"
              fontSize="24px"
              lineHeight="29.05px"
            >
              Save
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateCoupon;
