import { IFavorite, IProduct } from "@/app/types";
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRemoveFavoriteMutation } from "@/app/store/Features/favorite/favoritesApiSlice";

const FavoriteItem: React.FC<IFavorite> = ({ product }) => {
  const [removeFavorite, { isLoading: removeFavoriteIsLoading }] =
    useRemoveFavoriteMutation();

  const handleRemove = async (e: any) => {
    try {
      e.preventDefault();

      const { success, message, payload } = await removeFavorite({
        id: product.id,
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
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        alignItems: "flex-start",
        gap: "0.8rem",
        border: "1px solid #C0C0C0",
        borderRight: "none",
        borderLeft: "none",
        paddingY: "3rem",
      }}
    >
      {product.productImages.length >= 1 ? (
        <Box
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            "& > img": {
              position: "static !important",
              borderRadius: "50%",
            },
          }}
        >
          <Image
            src={product.productImages[0]}
            alt={product.name}
            fill
            sizes="100%"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            "& > img": {
              position: "static !important",
              borderRadius: "50%",
            },
          }}
        >
          <Image
            src="/assets/images/image-131.png"
            alt="Product picture"
            height={100}
            width={100}
            loading="lazy"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>
      )}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Typography
          variant="poster"
          fontWeight={500}
          fontSize="24px"
          lineHeight="29.05px"
        >
          {product.name}
        </Typography>
        <Typography
          variant="poster"
          fontWeight={400}
          fontSize="18px"
          lineHeight="21.78px"
        >
          Sizes: {product?.available_sizes?.split(",")[0] || "medium"}
        </Typography>
        <Typography
          variant="poster"
          fontWeight={600}
          fontSize="24px"
          lineHeight="29.05px"
        >
          ₦{product.price}
        </Typography>
      </Box>
      <Button onClick={handleRemove}>REMOVE</Button>
    </Box>
  );
};

export default FavoriteItem;
