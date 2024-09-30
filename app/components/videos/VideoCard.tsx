import { IVideo, IVideoCard } from "@/app/types";
import { Box, Typography, CardMedia } from "@mui/material";
import Link from "next/link";
import React from "react";

const VideoCard: React.FC<IVideo> = ({
  title,
  description,
  videofiles,
  createdAT,
  product,
}) => {
  const theVideo = videofiles[0];

  return (
    <Box
      sx={{
        height: { xs: "316px", md: "490px" },
        borderRadius: "6px",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        paddingTop: "1rem",
      }}
    >
      <CardMedia
        sx={{
          "& video": {
            width: "100%",
            height: "100%",
          },
          flex: 3,
          width: "90%",
          alignSelf: "center",
          borderRadius: "2rem",
        }}
      >
        <video controls>
          <source src={theVideo} type="video/mp4" />
          <source src={theVideo} type="video/webm" />
          <source src={theVideo} type="video/ogg" />
          {description}
          Your browser does not support the video tag.
        </video>
      </CardMedia>
      <Box
        sx={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "100%",
          paddingX: { xs: "0.1rem", md: "1rem" },
        }}
      >
        <Typography
          lineHeight="24.38px"
          color="#007AA5"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "20px", md: "32px" },
          }}
        >
          {title}
        </Typography>
        <Typography
          lineHeight="14.4px"
          color="#565656"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "10px", md: "12px" },
          }}
        >
          {description}
        </Typography>

        {product && (
          <Link
            href={`products/${product.id}`}
            style={{
              color: "#FFA013",
              fontWeight: 400,
              fontSize: "16px",
            }}
          >
            {product.name}
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default VideoCard;
