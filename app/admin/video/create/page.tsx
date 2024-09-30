"use client";

import FileUpload from "@/app/components/shared/FileUpload";
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
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useGetAllProductsQuery } from "@/app/store/Features/products/productsApiSlice";
import { IProduct } from "@/app/types";
import { usePostProductVideosMutation } from "@/app/store/Features/videos/videosApiSlice";
import { toast } from "react-toastify";

const CreateVideoPage = () => {
  const [product, setProduct] = useState("");
  const [files, setFiles] = useState([]);

  const { data: allProducts, isLoading: isLoadingProducts } =
    useGetAllProductsQuery();
  const dispatch = useDispatch();
  const router = useRouter();

  const [postProductVideos, { isLoading: postProductVideosIsLoading }] =
    usePostProductVideosMutation();

  const handleProductChange = (event: SelectChangeEvent) => {
    setProduct(event.target.value);
  };

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const objData: any = Object.fromEntries(data.entries());

      let newData = {
        productID: Number(objData["productID"]),
        description: objData["description"],
        title: objData["title"],
      };

      const formData = new FormData();

      Object.entries(newData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
          formData.append("media", files[i]);
        }
      }

      const { success, message, payload } = await postProductVideos(
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
          router.push("/admin/video");
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
        height: "100%",
        backgroundColor: "#FFF",
        paddingX: "1rem",
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
          Add Video
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
            Upload Video
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
              isVideo
              image={false}
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
                  Title
                </Typography>
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="Title"
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
              ></TextareaAutosize>
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
                  Product
                </Typography>
              </InputLabel>

              <Select
                labelId="productID"
                id="productID"
                value={product}
                label="Product"
                onChange={handleProductChange}
                fullWidth
                name="productID"
              >
                {allProducts && allProducts.length > 0 ? (
                  allProducts.map((product: IProduct) => (
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateVideoPage;
