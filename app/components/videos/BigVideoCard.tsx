import { IVideoCard } from "@/app/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BigVideoCard: React.FC<IVideoCard> = ({
  img,
  title,
  text,
  linkText,
  link,
  time,
}) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "607px" },
        height: { xs: "901px", md: "647px" },
        borderRadius: "6px",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          "& > img": {
            position: "relative !important",
          },

          flex: 3,
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={img}
          alt="Heading baby Picture"
          fill
          sizes="100%"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "95%",
          maxWidth: "95%",
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
            fontSize: { xs: "12px", md: "14px" },
          }}
        >
          {text}
        </Typography>
        <Typography
          lineHeight="14.4px"
          color="#565656"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "12px", md: "14px" },
          }}
          textAlign="right"
        >
          {time}
        </Typography>
        <Link
          href={link}
          style={{
            color: "#FFA013",
            fontWeight: 400,
            fontSize: "16px",
          }}
        >
          {linkText}
        </Link>
      </Box>
    </Box>
  );
};

export default BigVideoCard;
