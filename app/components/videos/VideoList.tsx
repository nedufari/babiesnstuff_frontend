import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { itemData } from "@/app/utils/dummyData";
import Image from "next/image";
import { Box } from "@mui/material";

const VideoList = () => {
  return (
    <ImageList sx={{}}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          {/* <img
            srcSet={`${item.img}`}
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
          /> */}
          <Box
            sx={{
              "& > img": {
                position: "static !important",
              },
            }}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="100vw"
              style={{
                objectFit: "contain"
              }} />
          </Box>
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default VideoList;
