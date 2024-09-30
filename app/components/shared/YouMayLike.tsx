import { youMayLikeData } from "@/app/utils/dummyData";
import {
  Box,
  ImageList,
  SxProps,
  Theme,
  Typography,
  ImageListItem,
  Button,
  ImageListItemBar,
} from "@mui/material";
import React from "react";
import Image from "next/image";

const YouMayLike = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      <Typography
        variant="poster"
        sx={{
          fontSize: { xs: "20px", md: "24px" },
          lineHeight: { xs: "24.2px", md: "48px" },
          alignSelf: "center",
        }}
        fontWeight={600}
        color="#000000"
      >
        YOU MAY ALSO LIKE
      </Typography>

      <ImageList
        sx={{
          flexWrap: "wrap",
          display: "flex",
          gap: "1rem !important",
        }}
      >
        {youMayLikeData.map((item, i) => (
          <ImageListItem
            key={i}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFF",
              width: { xs: "183px", md: "295px" },
              height: { xs: "250px !important", md: "324px !important" },
            }}
          >
            <Box
              sx={{
                scale: { xs: `${1}`, md: `${1.5}` },
              }}
            >
              <Image
                src={item.img}
                alt={item.title}
                height={100}
                width={100}
                loading="lazy"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: "14px",
                lineHeight: "17.07px",
                textTransform: "capitalize",
              }}
              fontWeight={400}
              color="#939393"
            >
              {item.category}
            </Typography>

            <ImageListItemBar
              title={item.title}
              subtitle={<span>₦{item.price}</span>}
              position="below"
              sx={{
                fontSize: { xs: "12px", md: "14px" },
                lineHeight: { xs: "14.63px", md: "17.07px" },
                color: "#000000",
                "& .MuiImageListItemBar-subtitle": {
                  textAlign: "center",
                  fontWeight: 500,
                },
                "& .MuiImageListItemBar-title": {
                  textAlign: "left",
                  fontWeight: 600,
                  whiteSpace: "unset",
                },
              }}
            />

            <Button component="label" variant="contained" tabIndex={-1}>
              Add to Cart
            </Button>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

const styles: { [key: string]: SxProps<Theme> } = {
  mainContainer: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "red",
    display: "flex",
    height: "100vh",
    justifyContent: "space-between",
  },
  image: {
    flex: 1,
  },
};

export default YouMayLike;
