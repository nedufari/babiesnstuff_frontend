import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  SxProps,
  TextField,
  Theme,
  Typography,
  SvgIcon,
  InputLabel,
} from "@mui/material";
import React from "react";
import { googleIcon } from "../utils/icons";

const ForgotPassword: React.FC = () => {
  const handleSubmit = () => {};
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
              background: `linear-gradient(to right, #397F98 0%, #FFA013 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Forgot Password
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1, width: "100%" }}>
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                background: `linear-gradient(to right, #397F98 0%, #FFA013 100%)`,
                textTransform: "capitalize",
              }}
            >
              <Typography
                variant="poster"
                fontWeight="600"
                fontSize="24px"
                lineHeight="29.05px"
              >
                Send Code
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
              Didn&apos;t get the Code? <Box component="span">Resend code</Box>
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
    paddingTop: "4rem",
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
export default ForgotPassword;
