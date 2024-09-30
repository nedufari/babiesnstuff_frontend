import { IChildren } from "@/app/types";
import { Box } from "@mui/material";
import React from "react";
import AdminSideBar from "./AdminSideBar";
import AdminHeader from "./AdminHeader";

const AdminLayout: React.FC<IChildren> = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        boxSizing: "border-box",
      }}
    >
      <AdminSideBar></AdminSideBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          width: "100%",
          maxWidth: "100%",
          alignItems: "center",
          backgroundColor: "#F6F6F6",
          gap: "1rem",
        }}
      >
        <AdminHeader />

        <Box
          sx={{
            width: "95%",
            height: "500px",
            overflowY: "scroll",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
