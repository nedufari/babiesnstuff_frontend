import { Box, Typography } from "@mui/material";
import React from "react";
import { ISize } from "../../types";

const Size: React.FC<ISize> = ({ size }) => {
  return (
    <Box
      sx={{
        border: "1px solid #D1D1D1",
        width: "49px",
        height: "49px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "2px",
      }}
    >
      <Typography
        variant="poster"
        fontWeight={500}
        fontSize="8px"
        lineHeight="32px"
      >
        {size}
      </Typography>
    </Box>
  );
};

export default Size;
