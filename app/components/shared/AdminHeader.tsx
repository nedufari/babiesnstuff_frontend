"use client";

import { bellIcon, hamIcon, searchIcon } from "@/app/utils/icons";
import {
  Paper,
  InputBase,
  Button,
  SvgIcon,
  Container,
  Box,
  IconButton,
} from "@mui/material";
import React from "react";
import AdminMobileNav from "./AdminMobileNav";

const AdminHeader = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Container
      sx={{
        display: "flex",
        height: "80px",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", md: "flex-end" },
          width: "100%",
        }}
      >
        <IconButton onClick={toggleDrawer(true)}>
          <SvgIcon
            sx={{
              width: "24px",
              height: "24px",
              display: { xs: "block", md: "none" },
            }}
          >
            {hamIcon()}
          </SvgIcon>
        </IconButton>

        <SvgIcon
          sx={{
            width: "24px",
            height: "24px",
          }}
        >
          {bellIcon()}
        </SvgIcon>
      </Box>

      <AdminMobileNav
        open={open}
        setOpen={setOpen}
        toggleDrawer={toggleDrawer}
      />
    </Container>
  );
};

export default AdminHeader;
