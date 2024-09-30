import { IOrderItem } from "@/app/types";
import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const OrderItem: React.FC<IOrderItem> = ({ quantity, price, product }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        paddingLeft: "1rem",
        paddingY: "1rem",
        borderBottom: "1px solid #DEDEDE",
      }}
    >
      <Box
        sx={{
          flex: 5,
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: "2rem",
        }}
      >
        {product.productImages.length > 1 ? (
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

        <Box>
          <Typography
            variant="poster"
            color="#000"
            fontWeight="500"
            fontSize="24px"
            lineHeight="29.05px"
          >
            {product.name}
          </Typography>
          <Typography
            variant="poster"
            color="#000"
            fontWeight="400"
            fontSize="20px"
            lineHeight="24.2px"
          >
            Size: {product.available_sizes ? product.available_sizes[0] : null}
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="poster"
        color="#323232"
        fontWeight="600"
        fontSize="24px"
        lineHeight="29.05px"
        sx={{ flex: 1 }}
      >
        {quantity}
      </Typography>
      <Typography
        variant="poster"
        color="#323232"
        fontWeight="500"
        fontSize="24px"
        lineHeight="29.05px"
        sx={{ flex: 1 }}
      >
        ₦{price}
      </Typography>
    </Box>
  );
};

export default OrderItem;
