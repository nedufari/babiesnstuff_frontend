import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { IBabyCard } from "@/app/types";

const BabyCard: React.FC<IBabyCard> = ({ img, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", md: "398px" },
        height: "289px",
        borderRadius: "6px",
        backgroundColor: "#FFF",
        padding: "0.5rem",
        gap: "0.5rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          flex: { xs: 4, md: 5 },
        }}
      >
        <Box
          sx={{
            "& > img": {
              width: "100%",
              height: "100%",
            },
          }}
        >
          <Image
            src={img}
            alt="Special offer"
            fill
            sizes="100%"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Typography
          fontWeight="600"
          fontSize="16px"
          textAlign="center"
          lineHeight="32px"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
          }}
        >
          {text}
        </Typography>
      </Box>
      <Button
        component="label"
        variant="outlined"
        tabIndex={-1}
        sx={{
          border: "1px solid transparent",
          borderImage: "linear-gradient(to right, #397F98, #FFA013) 1",
          backgroundColor: "transparent",
          borderRadius: "3px",
          textTransform: "capitalize",
          width: "100%",
          alignSelf: "center",
          justifySelf: "center",
          flex: 1,
        }}
      >
        <Typography
          fontWeight="600"
          fontSize="16px"
          textAlign="center"
          lineHeight="32px"
          sx={{
            background: `linear-gradient(to right, #397F98 0%, #FFA013 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Shop Now
        </Typography>
      </Button>
    </Box>
  );
};

export default BabyCard;
