"use client";

import { ICartItemAndRefetch } from "@/app/types";
import { Box, Button, Divider, Typography, SvgIcon } from "@mui/material";
import React from "react";
import Image from "next/image";
import { plusIcon } from "@/app/utils/icons";
import {
  useDecreaseProductCartQuantityMutation,
  useIncreaseProductCartQuantityMutation,
  useRemoveCartItemMutation,
} from "@/app/store/Features/cart/cartApiSlice";
import { toast } from "react-toastify";

const CartItem: React.FC<ICartItemAndRefetch> = ({
  product,
  quantity,
  id,
  refetch,
}) => {
  const [removeCartItem, { isLoading: removeCartItemIsLoading }] =
    useRemoveCartItemMutation();

  const [
    increaseProductCartQuantity,
    { isLoading: increaseProductCartQuantityIsLoading },
  ] = useIncreaseProductCartQuantityMutation();

  const [
    decreaseProductCartQuantity,
    { isLoading: decreaseProductCartQuantityIsLoading },
  ] = useDecreaseProductCartQuantityMutation();

  const handleRemove = async (e: any) => {
    try {
      e.preventDefault();

      const { success, message, payload } = await removeCartItem({
        id,
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

  const handleIncrease = async (e: any) => {
    try {
      e.preventDefault();

      const { success, message, payload } = await increaseProductCartQuantity({
        id,
      }).unwrap();

      refetch();

      if (success) {
      } else {
      }
    } catch (error: any) {
      let msg =
        error.message ||
        (error.data && error.data.message) ||
        "An error occurred";
    }
  };

  const handleDecrease = async (e: any) => {
    try {
      e.preventDefault();

      const { success, message, payload } = await decreaseProductCartQuantity({
        id,
      }).unwrap();

      refetch();

      if (success) {
      } else {
      }
    } catch (error: any) {
      let msg =
        error.message ||
        (error.data && error.data.message) ||
        "An error occurred";
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
          Sizes
        </Typography>
        <Typography
          variant="poster"
          fontWeight={600}
          fontSize="24px"
          lineHeight="29.05px"
        >
          ₦{product.price}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3rem",
            marginBottom: "2rem",
          }}
        >
          <Button
            component="label"
            variant="contained"
            tabIndex={-1}
            sx={{
              width: "30px",
              height: "30px",
              borderRadius: "2px",
              backgroundColor: "primary.main",
              minWidth: "unset",
            }}
            onClick={handleDecrease}
            aria-label="Decrease quantity"
          >
            <Divider
              sx={{
                width: "12.8px",
                height: "2px",
                backgroundColor: "#FFF",
              }}
            />
          </Button>
          <Typography>{quantity}</Typography>
          <Button
            component="label"
            variant="contained"
            tabIndex={-1}
            sx={{
              width: "30px",
              height: "30px",
              borderRadius: "2px",
              backgroundColor: "primary.main",
              minWidth: "unset",
            }}
            onClick={handleIncrease}
            aria-label="Increase quantity"
          >
            <SvgIcon
              sx={{
                width: "12px",
                height: "12px",
              }}
            >
              {plusIcon()}
            </SvgIcon>
          </Button>
        </Box>
      </Box>
      <Button onClick={handleRemove}>REMOVE</Button>
    </Box>
  );
};

export default CartItem;
