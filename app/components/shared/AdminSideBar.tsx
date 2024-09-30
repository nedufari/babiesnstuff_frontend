import { adminNavItems } from "@/app/utils/data";
import { Box, Typography } from "@mui/material";
import React from "react";
import SideItem from "./SideItem";
import Image from "next/image";

const AdminSideBar = () => {
  return (
    <Box
      component="aside"
      sx={{
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        maxHeight: "100vh",
        width: "200px",
        backgroundColor: "#FFF",
        alignItems: "center",
        boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Image
          src="/assets/images/footer-logo.png"
          height={68}
          width={68}
          alt="Website Logo"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
          }}
        >
          {adminNavItems.map((item, i) => (
            <SideItem {...item} key={i} />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <Box
          sx={{
            width: "33px",
            height: "33px",
            "& > img": {
              width: "100%",
              height: "100%",
              position: "unset !important",
            },
          }}
        >
          <Image
            src="/assets/images/selfie.png"
            alt="Selfie"
            fill
            sizes="100%"
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box>
          <Typography
            variant="poster"
            fontSize="14px"
            fontWeight={500}
            lineHeight="16.94px"
            color="#524F4F"
          >
            Raya Neal
          </Typography>
          <Typography
            fontSize="12px"
            fontWeight={500}
            lineHeight="16.94px"
            color="#988B8B"
          >
            Admin
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminSideBar;
