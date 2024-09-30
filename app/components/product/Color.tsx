import { IColor } from "@/app/types";
import { Box } from "@mui/material";
import React from "react";

const Color = ({ backgroundColor }: IColor) => {
  return (
    <Box
      sx={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "1px solid #D1D1D1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "32px",
          height: "32px",
          backgroundColor,
          borderRadius: "50%",
        }}
      ></Box>
    </Box>
  );
};

export default Color;
