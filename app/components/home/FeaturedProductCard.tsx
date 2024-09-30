import { ISellingProduct } from "@/app/types";
import {
  Box,
  Typography,
  ImageListItem,
  ImageListItemBar,
  Button,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const FeaturedProductCard: React.FC<ISellingProduct> = ({
  img,
  title,
  price,
  slashedPrice,
  i,
}) => {
  return (
    <ImageListItem
      key={i}
      sx={{
        width: { xs: "181px", md: "285px" },
        height: { xs: "341px", md: "380px" },
        borderRadius: "6px",
        backgroundColor: "#FFF",
        padding: "0.5rem",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "6fr 0.5fr 0.5fr",
      }}
    >
      <Box
        sx={{
          "& > img": {
            position: "static !important",
            objectFit: { xs: "cover !important", md: "cover !important" },
          },
          alignSelf: { xs: "stretch", md: "stretch" },
        }}
      >
        <Image
          src={img}
          alt="Heading baby Picture"
          fill
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
      <ImageListItemBar
        title={title}
        subtitle={<span>₦ {price}</span>}
        position="below"
        sx={{
          fontFamily: `'__Inter_611e81','__Inter_Fallback_611e81'`,
          color: "#6D6D6D",
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
        }}
      >
        {slashedPrice}
      </Typography>
    </ImageListItem>
  );
};

export default FeaturedProductCard;
