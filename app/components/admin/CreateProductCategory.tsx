import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IOpenCreateCoupon } from "@/app/types";
import { Box, InputLabel, SelectChangeEvent, Typography } from "@mui/material";
import { usePostProductCategoryMutation } from "@/app/store/Features/productsCategory/productsCategoryApiSlice";
import { toast } from "react-toastify";

const CreateProductCategory: React.FC<IOpenCreateCoupon> = ({
  open,
  setOpen,
}) => {
  const [category, setCategory] = useState("");
  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const [postProductCategory, { isLoading: postProductCategoryIsLoading }] =
    usePostProductCategoryMutation();

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
          onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            try {
              const data = new FormData(event.currentTarget);
              const objData: any = Object.fromEntries(data.entries());

              const { success, message, payload } = await postProductCategory(
                objData
              ).unwrap();

              if (success) {
                toast.success(`${message}`, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });

                handleClose();
              } else {
                toast.error(`${message}`, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }
            } catch (error: any) {
              let msg =
                error.message ||
                (error.data && error.data.message) ||
                "An error occurred";
              toast.error(`${msg}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          },
          sx: { width: "30rem" },
        }}
      >
        <DialogTitle sx={{ textAlign: "center" }}>Category</DialogTitle>
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
                Name
              </Typography>
            </InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="Name"
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
                Description
              </Typography>
            </InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
              autoComplete="Description"
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

export default CreateProductCategory;
