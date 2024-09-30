import { IAdminSideBarItem, IStoreInformation } from "@/app/types";
import { Box, SvgIcon, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const SideItem: React.FC<IAdminSideBarItem> = ({ icon, text, link }) => {
  return (
    <Box
      sx={{
        "& > a": {
          display: "flex",
          textDecoration: "none",
          alignItems: "center",
          gap: "0.5rem",
        },
      }}
    >
      <Link href={link}>
        <SvgIcon
          sx={{
            width: "20px",
            height: "20px",
          }}
        >
          {icon}
        </SvgIcon>
        <Typography
          variant="poster"
          fontSize="14px"
          fontWeight={400}
          lineHeight="16.94px"
          color="#000"
        >
          {text}
        </Typography>
      </Link>
    </Box>
  );
};

export default SideItem;
