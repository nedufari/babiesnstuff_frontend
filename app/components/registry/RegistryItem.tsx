import { IRegistryItem, IRegistryItemAndChecked } from "@/app/types";
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import Image from "next/image";

const RegistryItem: React.FC<IRegistryItemAndChecked> = ({
  product,
  quantity,
  checked,
  cost,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        alignItems: "flex-start",
        gap: "0.8rem",
        border: checked ? "none" : "1px solid #C0C0C0",
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
          ₦{cost}
        </Typography>
      </Box>
      <Button></Button>
    </Box>
  );
};

export default RegistryItem;
