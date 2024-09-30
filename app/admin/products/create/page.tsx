"use client";

import FileUpload from "@/app/components/shared/FileUpload";
import { useGetAllProductCategoriesQuery } from "@/app/store/Features/productsCategory/productsCategoryApiSlice";
import { cancelIcon, circledPlusIcon } from "@/app/utils/icons";
import {
  Box,
  Button,
  InputLabel,
  SvgIcon,
  TextField,
  Typography,
  TextareaAutosize,
  Select,
  MenuItem,
  SelectChangeEvent,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { usePostProductMutation } from "@/app/store/Features/products/productsApiSlice";

const CreateProductPage = () => {
  const [category, setCategory] = useState("");
  const [formats, setFormats] = React.useState(() => ["black", "white"]);
  const [sizes, setSizes] = React.useState(() => ["small", "medium"]);
  const [files, setFiles] = useState([]);
  const { data: allProductCategories, isLoading: isLoadingProductCategories } =
    useGetAllProductCategoriesQuery();
  const dispatch = useDispatch();
  const router = useRouter();

  const [postProduct, { isLoading: postProductIsLoading }] =
    usePostProductMutation();

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
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

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const objData: any = Object.fromEntries(data.entries());

      let newData = {
        categoryId: Number(objData["categoryId"]),
        description: objData["description"],
        minWholesaleQuantity: Number(objData["minWholesaleQuantity"]),
        name: objData["name"],
        price: Number(objData["price"]),
        stock: Number(objData["stock"]),
        taxRate: Number(objData["taxRate"]),
        wholesalePrice: objData["wholesalePrice"],
        available_sizes: sizes.join(","),
        available_colors: formats.join(","),
      };

      const formData = new FormData();

      Object.entries(newData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          formData.append("productimage", files[i]);
        }
      }

      const { success, message, payload } = await postProduct(
        formData
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
        setTimeout(() => {
          router.push("/admin/products");
        }, 5000);
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
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FFF",
        padding: "1rem",
        marginY: "2rem",
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <Typography
          fontWeight={600}
          fontSize="14px"
          lineHeight="16.94px"
          color="#1C1B1F"
          variant="poster"
          sx={{
            fontSize: {
              xs: "16px",
              md: "14px",
            },
          }}
        >
          Add Product
        </Typography>
        <Box>
          <Button
            variant="contained"
            tabIndex={-1}
            sx={{
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: 500,
              display: {
                xs: "none",
                md: "block",
              },
            }}
            color="primary"
            type="submit"
          >
            Upload Product
          </Button>
          <Button
            component="label"
            variant="contained"
            tabIndex={-1}
            startIcon={
              <SvgIcon
                sx={{
                  fontSize: "18px",
                }}
              >
                {circledPlusIcon()}
              </SvgIcon>
            }
            sx={{
              backgroundColor: "primary.main",
              height: "40px",
              width: "40px",
              display: {
                xs: "flex",
                md: "none",
              },
              "& > span": {
                marginRight: "unset",
                marginLeft: "unset",
              },
            }}
          ></Button>
        </Box>
      </Box>

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
    </Box>
  );
};

export default CreateProductPage;
