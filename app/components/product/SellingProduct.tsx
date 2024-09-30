import { IProduct } from "@/app/types";
import {
  Box,
  ImageListItem,
  ImageListItemBar,
  Button,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useAddCartMutation } from "@/app/store/Features/cart/cartApiSlice";
import { toast } from "react-toastify";

const SellingProduct: React.FC<IProduct> = ({
  productImages,
  name,
  price,
  // slashedPrice,
  id,
}) => {
  const [addCart, { isLoading: addCartIsLoading }] = useAddCartMutation();

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();

      const { success, message, payload } = await addCart({
        id,
        quantity: 1,
      }).unwrap();

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

  const firstImage =
    productImages.length > 0 ? productImages[0] : "/assets/images/cloth.png";

  return (
    <ImageListItem
      key={id}
      sx={{
        borderRadius: "6px",
        backgroundColor: "#FFF",
        padding: "0.5rem",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "4.5fr 0.5fr 0.5fr 1fr",
        width: "100%",
      }}
    >
      <Box
        sx={{
          "& > a > img": {
            position: "static !important",
            objectFit: { xs: "cover !important", md: "cover !important" },
          },
          alignSelf: { xs: "stretch", md: "stretch" },
        }}
      >
        <Link href={`/products/${id}`}>
          <Image
            src={firstImage}
            alt="Heading baby Picture"
            fill
            sizes="100%"
            style={{
              objectFit: "cover",
            }}
          />
        </Link>
      </Box>
      <ImageListItemBar
        title={name}
        subtitle={<span>₦ {price}</span>}
        position="below"
        sx={{
          fontFamily: `'__Inter_611e81','__Inter_Fallback_611e81'`,
          color: "#6D6D6D",
          paddingLeft: { xs: "0.5rem", md: "2rem" },
          "&  .MuiImageListItemBar-subtitle": {
            color: "#000000",
            fontWeight: 600,
            fontSize: "16px",
          },
        }}
      />
      <Typography
        variant="poster"
        fontWeight="500"
        fontSize="16px"
        lineHeight="19.36px"
        color="#656565"
        sx={{
          textDecoration: "line-through",
          paddingLeft: { xs: "0.5rem", md: "2rem" },
        }}
      >
        {Number(price) * 1.2}
      </Typography>
      <Button
        component="label"
        variant="outlined"
        tabIndex={-1}
        sx={{
          border: "1px solid transparent",
          borderImage: "linear-gradient(to right, #397F98, #FFA013) 1",
          backgroundColor: "transparent",
          borderRadius: "3px",
          textTransform: "capitalize",
          width: "90%",
          alignSelf: "center",
          justifySelf: "center",
        }}
        onClick={handleSubmit}
      >
        <Typography
          fontWeight="600"
          fontSize="16px"
          textAlign="center"
          lineHeight="32px"
          sx={{
            background: `linear-gradient(to right, #397F98 0%, #FFA013 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Add to Cart
        </Typography>
      </Button>
    </ImageListItem>
  );
};

export default SellingProduct;
