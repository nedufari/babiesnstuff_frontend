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
  TextareaAutosize,
  SvgIcon,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import FileUpload from "@/app/components/shared/FileUpload";
import { useGetAllProductCategoriesQuery } from "@/app/store/Features/productsCategory/productsCategoryApiSlice";
import { cancelIcon } from "@/app/utils/icons";

const EditProduct: React.FC<IOpenCreateCoupon> = ({ open, setOpen }) => {
  const [category, setCategory] = useState("");
  const [formats, setFormats] = React.useState(() => ["black", "white"]);
  const [sizes, setSizes] = React.useState(() => ["small", "medium"]);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  const [files, setFiles] = useState([]);

  const { data: allProductCategories, isLoading: isLoadingProductCategories } =
    useGetAllProductCategoriesQuery();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats);
  };

  const handleSizes = (
    event: React.MouseEvent<HTMLElement>,
    newSizes: string[]
  ) => {
    setSizes(newSizes);
  };

  return (
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
      sx={{
        maxWidth: "unset !important",
      }}
    >
      <DialogTitle sx={{ textAlign: "center" }}>Edit Product</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                border: "1px solid #E4E4E4",
                borderRadius: "4px",
                paddingX: "1rem",
                paddingY: "1rem",
              }}
            >
              <FileUpload
                setFiles={setFiles}
                files={files}
                isVideo={false}
              ></FileUpload>
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                border: "1px solid #E4E4E4",
                borderRadius: "4px",
                paddingX: "1rem",
                paddingY: "1rem",
              }}
            >
              <Box sx={{}}>
                <InputLabel>
                  <Typography
                    variant="poster"
                    color="#1C1B1F"
                    fontWeight="500"
                    fontSize="16px"
                    lineHeight="19.36px"
                  >
                    Product Name
                  </Typography>
                </InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Product Name"
                  name="name"
                  autoComplete="Product Name"
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
                    Category
                  </Typography>
                </InputLabel>

                <Select
                  labelId="categoryId"
                  id="categoryId"
                  value={category}
                  label="categoryId"
                  onChange={handleCategoryChange}
                  fullWidth
                  name="categoryId"
                >
                  {allProductCategories && allProductCategories.length > 0 ? (
                    allProductCategories.map((product) => (
                      <MenuItem key={product.id} value={product.id}>
                        {product.name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">
                      <em>No categories available</em>
                    </MenuItem>
                  )}
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
                    Total Stock Amount
                  </Typography>
                </InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="stock"
                  label="Total Stock Amount"
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
                    Cost Price
                  </Typography>
                </InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="price"
                  label="Cost Price"
                  name="price"
                  autoComplete="Cost Price"
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
                    Tax Rate
                  </Typography>
                </InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="taxRate"
                  label="Tax Rate"
                  name="taxRate"
                  autoComplete="Tax Rate"
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
                    Wholesale Quantity
                  </Typography>
                </InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="minWholesaleQuantity"
                  label="Wholesale Quantity"
                  name="minWholesaleQuantity"
                  autoComplete="Wholesale Quantity"
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
                    Wholesale Price
                  </Typography>
                </InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="wholesalePrice"
                  label="Wholesale Price"
                  name="wholesalePrice"
                  autoComplete="Wholesale Price"
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
                    sx={{
                      marginTop: "1rem",
                    }}
                  >
                    Description
                  </Typography>
                </InputLabel>

                <TextareaAutosize
                  minRows={6}
                  style={{
                    width: "100%",
                  }}
                  name="description"
                  id="description"
                ></TextareaAutosize>
              </Box>

              <Box sx={{}}>
                <InputLabel>
                  <Typography
                    variant="poster"
                    color="#1C1B1F"
                    fontWeight="500"
                    fontSize="16px"
                    lineHeight="19.36px"
                    sx={{
                      marginTop: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Colors
                  </Typography>
                </InputLabel>

                <ToggleButtonGroup
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                  color="info"
                  sx={{
                    textTransform: "capitalize",
                  }}
                >
                  <ToggleButton
                    value="black"
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    Black{"   "}
                    <SvgIcon
                      sx={{
                        width: "9px",
                        height: "9px",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {cancelIcon()}
                    </SvgIcon>
                  </ToggleButton>
                  <ToggleButton
                    value="white"
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    White
                    <SvgIcon
                      sx={{
                        width: "9px",
                        height: "9px",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {cancelIcon()}
                    </SvgIcon>
                  </ToggleButton>
                  <ToggleButton
                    value="green"
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    Green
                    <SvgIcon
                      sx={{
                        width: "9px",
                        height: "9px",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {cancelIcon()}
                    </SvgIcon>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>

              <Box sx={{}}>
                <InputLabel>
                  <Typography
                    variant="poster"
                    color="#1C1B1F"
                    fontWeight="500"
                    fontSize="16px"
                    lineHeight="19.36px"
                    sx={{
                      marginTop: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Sizes
                  </Typography>
                </InputLabel>

                <ToggleButtonGroup
                  value={sizes}
                  onChange={handleSizes}
                  aria-label="text formatting"
                  color="info"
                  sx={
                    {
                      //   gap: "1rem",
                    }
                  }
                >
                  <ToggleButton
                    value="small"
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    Small{"   "}
                    <SvgIcon
                      sx={{
                        width: "9px",
                        height: "9px",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {cancelIcon()}
                    </SvgIcon>
                  </ToggleButton>
                  <ToggleButton
                    value="medium"
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    Medium
                    <SvgIcon
                      sx={{
                        width: "9px",
                        height: "9px",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {cancelIcon()}
                    </SvgIcon>
                  </ToggleButton>
                  <ToggleButton
                    value="large"
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    Large
                    <SvgIcon
                      sx={{
                        width: "9px",
                        height: "9px",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {cancelIcon()}
                    </SvgIcon>
                  </ToggleButton>

                  <ToggleButton
                    value="extra-large"
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    Extra Large
                    <SvgIcon
                      sx={{
                        width: "9px",
                        height: "9px",
                        marginLeft: "0.5rem",
                      }}
                    >
                      {cancelIcon()}
                    </SvgIcon>
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </Box>
          </Box>
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
  );
};

export default EditProduct;
