"use client";

import React from "react";
import {
  Box,
  Typography,
  Divider,
  Paper,
  InputBase,
  Button,
} from "@mui/material";
import { useCheckOutCartMutation } from "@/app/store/Features/cart/cartApiSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

type ICartPricing = {
  numb: { price: number; tax: number }[];
  isOrder: "order" | "checkout" | "registry" | "registry-order";
  shippinFee: null | string;
  vat?: number;
};

function calculateTotalPrice(numb: { price: number; tax: number }[]): number {
  let total = 0;

  for (const item of numb) {
    const taxAmount = item.price * (item.tax / 100);
    const itemTotal = item.price + taxAmount;
    total += itemTotal;
  }

  return total;
}

const CartSummary: React.FC<ICartPricing> = ({
  numb,
  isOrder,
  shippinFee,
  vat,
}) => {
  const [checkOutCart, { isLoading: checkOutCartIsLoading }] =
    useCheckOutCartMutation();

  const storedNumb = useSelector((state: RootState) => state.registryIds.numb);

  const router = useRouter();

  const handleCheckOut = async (e: any) => {
    if (numb.length <= 0) {
      toast.error("You can not checkout with an empty cart", {
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
      try {
        e.preventDefault();

        const { message, payload } = await checkOutCart({}).unwrap();

        if (payload.order.success) {
          toast.success(`${payload.order.message}`, {
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
            router.push(`/checkout/${payload.order.payload.order.id}`);
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
    }
  };

  const handleRegistryCheckout = async () => {
    router.push("/registry-orders");
  };

  const subTotal =
    numb.length >= 1
      ? numb.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue.price;
        }, 0)
      : 0;

  const tax =
    numb.length >= 1
      ? numb.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue.tax;
        }, 0)
      : 0;

  const total = numb.length >= 1 ? calculateTotalPrice(numb) : 0;

  // const vat = m;

  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1rem",
        gap: "2rem",
        maxHeight: "30rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography
          variant="poster"
          fontWeight={600}
          sx={{
            fontSize: "24px",
            lineHeight: "29.05px",
          }}
        >
          Cart Summary
        </Typography>
        <Divider></Divider>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="poster"
            fontWeight={400}
            sx={{
              fontSize: "20px",
              lineHeight: "24.2px",
            }}
          >
            Subtotal
          </Typography>
          <Typography
            variant="poster"
            fontWeight={400}
            sx={{
              fontSize: "20px",
              lineHeight: "24.2px",
            }}
          >
            {subTotal}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="poster"
            fontWeight={400}
            sx={{
              fontSize: "20px",
              lineHeight: "24.2px",
            }}
          >
            Shipping
          </Typography>
          <Typography
            variant="poster"
            fontWeight={400}
            sx={{
              fontSize: "20px",
              lineHeight: "24.2px",
            }}
          >
            {shippinFee == null ? "N/A" : shippinFee}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="poster"
            fontWeight={400}
            sx={{
              fontSize: "20px",
              lineHeight: "24.2px",
            }}
          >
            VAT
          </Typography>
          <Typography
            variant="poster"
            fontWeight={400}
            sx={{
              fontSize: "20px",
              lineHeight: "24.2px",
            }}
          >
            7.5%({vat && vat})
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="poster"
            fontWeight={400}
            sx={{
              fontSize: "20px",
              lineHeight: "24.2px",
            }}
          >
            Discounts
          </Typography>
          <Typography
            variant="poster"
            fontWeight={400}
            sx={{
              fontSize: "20px",
              lineHeight: "24.2px",
            }}
          >
            N/A
          </Typography>
        </Box>
        <Divider></Divider>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="poster"
            fontWeight={400}
            sx={{
              fontSize: "20px",
              lineHeight: "24.2px",
            }}
          >
            Total
          </Typography>
          <Typography
            variant="poster"
            fontWeight={400}
            sx={{
              fontSize: "20px",
              lineHeight: "24.2px",
            }}
          >
            {shippinFee == null ? `${total}` : Number(shippinFee) + total}
          </Typography>
        </Box>
      </Box>

      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: { xs: "100%", md: "400px" },
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter Coupon Code"
          inputProps={{ "aria-label": "Search items, categories" }}
        />

        <Button
          component="label"
          variant="contained"
          tabIndex={-1}
          sx={{
            textTransform: "capitalize",
            fontSize: "14px",
            fontWeight: 400,
          }}
          color="primary"
        >
          Apply
        </Button>
      </Paper>

      {isOrder == "order" ? (
        <Button
          variant="contained"
          tabIndex={-1}
          sx={{
            height: "68px",
          }}
          fullWidth
          type="submit"
        >
          <Typography
            variant="poster"
            fontWeight={500}
            fontSize="24px"
            lineHeight="29.05px"
            textTransform="capitalize"
          >
            Confirm Order
          </Typography>
        </Button>
      ) : isOrder == "checkout" ? (
        <Button
          component="label"
          variant="contained"
          tabIndex={-1}
          sx={{
            height: "68px",
          }}
          fullWidth
          onClick={handleCheckOut}
        >
          <Typography
            variant="poster"
            fontWeight={500}
            fontSize="24px"
            lineHeight="29.05px"
            textTransform="capitalize"
          >
            Checkout
          </Typography>
        </Button>
      ) : isOrder == "registry" ? (
        <Button
          variant="contained"
          tabIndex={-1}
          sx={{
            height: "68px",
          }}
          onClick={handleRegistryCheckout}
        >
          <Typography
            variant="poster"
            fontWeight={500}
            fontSize="24px"
            lineHeight="29.05px"
            textTransform="capitalize"
          >
            Checkout
          </Typography>
        </Button>
      ) : (
        <Button
          variant="contained"
          tabIndex={-1}
          sx={{
            height: "68px",
          }}
          fullWidth
          type="submit"
        >
          <Typography
            variant="poster"
            fontWeight={500}
            fontSize="24px"
            lineHeight="29.05px"
            textTransform="capitalize"
          >
            Confirm Order
          </Typography>
        </Button>
      )}
    </Box>
  );
};

export default CartSummary;
