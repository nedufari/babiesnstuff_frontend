import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { SxProps, Theme } from "@mui/material";
import { IChildren } from "@/app/types";

const Layout: React.FC<IChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const styles: { [key: string]: SxProps<Theme> } = {
  mainContainer: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "red",
    display: "flex",
    height: "100vh",
    justifyContent: "space-between",
  },
  image: {
    flex: 1,
  },
};

export default Layout;
