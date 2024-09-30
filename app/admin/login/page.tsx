"use client";

import { useLoginAdminMutation } from "@/app/store/Features/auth/authApiSlice";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setCredentials } from "@/app/store/Features/auth/authSlice";

const Loginpage = () => {
  const [login, { isLoading }] = useLoginAdminMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit: any = async (e: any) => {
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
          router.push("/admin/dashboard");
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
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        display: "flex",
        height: "100vh",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          flex: { xs: 3, md: 3 },
          backgroundColor: "primary.main",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            "& > img": {
              position: "static !important",
            },
            width: { xs: "150px", md: "290px" },
          }}
        >
          <Image
            src="/assets/images/baby-n-stuff-pic.png"
            alt="Heading baby Picture"
            fill
            sizes="100%"
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#E8E8E8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "100%",
          flex: 5,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            paddingX: "30px",
            borderRadius: "8px",
            height: "75%",
            paddingTop: "15px",
            paddingBottom: "25px",
          }}
        >
          <Typography
            variant="poster"
            fontWeight="600"
            fontSize="30px"
            textAlign="center"
            sx={{
              background: `linear-gradient(to right, #397F98 0%, #FFA013 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
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
                  background: `linear-gradient(to right, #397F98 0%, #FFA013 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
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
                  background: `linear-gradient(to right, #397F98 0%, #FFA013 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Loginpage;
