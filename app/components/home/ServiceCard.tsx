import { IServiceCard } from "@/app/types";
import { cartIcon, whiteCartIcon } from "@/app/utils/icons";
import { Box, SvgIcon, Typography } from "@mui/material";
import React from "react";

const ServiceCard: React.FC<IServiceCard> = ({
  title,
  text,
  bg = "#FFF",
  iconBg = "linear-gradient(to right, #397F98 0%, #FFA013 100%)",
  icon = whiteCartIcon(),
  textColor = "#707070",
  headingColor = "#000",
}) => {
  return (
    <Box
      sx={{
        background: bg,
        borderRadius: "8px",
        width: {
          xs: "165px",
          md: "250px",
        },
        height: {
          xs: "140px",
          md: "200px",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        padding: "0.7rem",
        gap: "1rem",
        border: "1px solid #397F98",
        marginY: "0.5rem",
      }}
    >
      <Box
        sx={{
          height: "34px",
          width: "34px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: iconBg,
          borderRadius: "6px",
        }}
      >
        <SvgIcon
          sx={{
            width: "20px",
            height: "20px",
          }}
        >
          {icon}
        </SvgIcon>
      </Box>

      <Typography
        fontWeight={600}
        fontSize="12px"
        lineHeight="14.63px"
        color={headingColor}
      >
        {title}
      </Typography>
      <Typography
        fontWeight={400}
        lineHeight="14.63px"
        color={textColor}
        width="235px"
        sx={{
          fontSize: {
            xs: "10px",
            md: "12px",
          },
          width: {
            xs: "170px",
            md: "235px",
          },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default ServiceCard;
