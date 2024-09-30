"use client";

import { Box, SxProps, Theme } from "@mui/material";
import React, { useState } from "react";
import SignUpForm from "../components/sign-up/SignUpForm";
import VerifyEmailForm from "../components/sign-up/VerifyEmailForm";

const Login: React.FC = () => {
  const [signUp, setsignUp] = useState<boolean>(true);

  return (
    <Box sx={styles["mainContainer"]}>
      <Box sx={styles["image"]}></Box>
      <Box sx={styles["form"]}>
        {signUp ? <SignUpForm setsignUp={setsignUp} /> : <VerifyEmailForm />}
      </Box>
    </Box>
  );
};

const styles: { [key: string]: SxProps<Theme> } = {
  mainContainer: {
    width: "100%",
    maxWidth: "100%",
    display: "grid",
    height: "100vh",
    gridTemplateColumns: {
      xs: "1fr",
      md: "1fr 1fr",
    },
    gridTemplateRows: "1fr",
    gridTemplateAreas: {
      xs: `"b"`,
      md: `"a b"`,
    },
  },
  image: {
    display: {
      xs: "none",
      md: "block",
    },
    gridArea: "a",
    backgroundImage: `url("/assets/images/baby.png")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "70%",
  },
  form: {
    gridArea: "b",
    backgroundColor: "#E8E8E8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "4rem",
    paddingBottom: "6rem",
    width: "100%",
    maxWidth: "100%",
  },
  loginForm: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
    paddingX: "30px",
    borderRadius: "8px",
    paddingTop: "15px",
    paddingBottom: "25px",
  },
};
export default Login;
