"use client";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  SxProps,
  TextField,
  Theme,
  Typography,
  InputLabel,
} from "@mui/material";
import React from "react";
import { useLoginMutation } from "../store/Features/auth/authApiSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setCredentials } from "../store/Features/auth/authSlice";

const Login: React.FC = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const objData = Object.fromEntries(data.entries());

      const { success, message, payload } = await login(objData).unwrap();

      if (success) {
        dispatch(
          setCredentials({
            token: payload.token,
          })
        );

        toast.success(`${message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          router.push("/");
        }, 5000);
      } else {
        toast.error(`${message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error: any) {
      let msg =
        error.message ||
        (error.data && error.data.message) ||
        "An error occurred";
      toast.error(`${msg}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <Box sx={styles["mainContainer"]}>
      <Box sx={styles["image"]}></Box>
      <Box sx={styles["form"]}>
        <Box sx={styles["loginForm"]}>
          <Typography
            variant="poster"
            fontWeight="600"
            fontSize="30px"
            textAlign="center"
            sx={{
              color: "primary.main",
            }}
          >
            Log In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, width: "100%" }}
          >
            <Box sx={{ marginBottom: "20px" }}>
              <InputLabel>
                <Typography
                  variant="poster"
                  color="#333333"
                  fontWeight="500"
                  fontSize="20px"
                  lineHeight="24.2px"
                >
                  Email Address
                </Typography>
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  marginTop: "15px",
                }}
              />
            </Box>

            <Box>
              <InputLabel>
                <Typography
                  variant="poster"
                  color="#333333"
                  fontWeight="500"
                  fontSize="20px"
                  lineHeight="24.2px"
                >
                  Password
                </Typography>
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ marginTop: "15px" }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                sx={{
                  color: "primary.main",
                  fontWeight: "500",
                  fontSize: "20px",
                  lineHeight: "24.2px",
                }}
                label="Remember me"
                componentsProps={{
                  typography: { variant: "poster" },
                }}
              />
              <Typography
                variant="poster"
                fontWeight="500"
                fontSize="20px"
                lineHeight="24.2px"
                sx={{
                  color: "secondary.main",
                }}
              >
                Forgot Password
              </Typography>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "primary.main",
                textTransform: "capitalize",
              }}
            >
              <Typography
                variant="poster"
                fontWeight="600"
                fontSize="24px"
                lineHeight="29.05px"
              >
                Log In
              </Typography>
            </Button>

            <Typography
              textAlign="center"
              variant="poster"
              fontWeight="400"
              fontSize="16px"
              lineHeight="19.36px"
              color="#000000"
            >
              New User? <Box component="span">Sign Up</Box>
            </Typography>
          </Box>
        </Box>
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
    height: "75%",
    paddingTop: "15px",
    paddingBottom: "25px",
  },
};
export default Login;
