import { IVideo } from "@/app/types";
import { dotsIcon } from "@/app/utils/icons";
import { Box, CardMedia, SvgIcon, Typography } from "@mui/material";
import React from "react";

const VideoAdminCard: React.FC<IVideo> = ({
  title,
  videofiles,
  description,
}) => {
  const theVideo = videofiles[0];

  return (
    <Box
      sx={{
        width: "313px",
        height: "215px",
        display: "flex",
        justifyContent: "space-between",
        padding: "0.5rem",
        flexDirection: "column",
        border: "1px solid #ECECEC",
        borderRadius: "6px",
        gap: "0.2rem",
      }}
    >
      <CardMedia
        sx={{
          height: "80%",
          "& video": {
            width: "100%",
            height: "100%",
          },
        }}
      >
        <video controls>
          <source src={theVideo} type="video/mp4" />
          {description}
        </video>
      </CardMedia>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="poster"
          lineHeight="24.2px"
          color="#000000"
          fontWeight="500"
          fontSize="20px"
        >
          {title}
        </Typography>
        <SvgIcon>{dotsIcon()}</SvgIcon>
      </Box>
    </Box>
  );
};

export default VideoAdminCard;
