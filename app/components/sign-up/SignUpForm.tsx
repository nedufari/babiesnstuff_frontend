import { useRegisterMutation } from "@/app/store/Features/auth/authApiSlice";
import { setSignUpUserEmail } from "@/app/store/Features/auth/authSlice";
import { ISetSignUp } from "@/app/types";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const SignUpForm: React.FC<ISetSignUp> = ({ setsignUp }) => {
  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const objData = Object.fromEntries(data.entries());

      const { success, message, payload } = await register(objData).unwrap();

      if (success) {
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
        dispatch(setSignUpUserEmail({ email: objData["email"] }));
        setsignUp(false);
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
        Create Account
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
              Full Name
            </Typography>
          </InputLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            id="fullname"
            label="Full Name"
            name="fullname"
            autoComplete="Full Name"
            autoFocus
          />
        </Box>

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
            autoComplete="Email Address"
            autoFocus
          />
        </Box>

        <Box sx={{ marginBottom: "20px" }}>
          <InputLabel>
            <Typography
              variant="poster"
              color="#333333"
              fontWeight="500"
              fontSize="20px"
              lineHeight="24.2px"
            >
              Phone Number
            </Typography>
          </InputLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            id="mobile"
            label="Phone Number"
            name="mobile"
            autoComplete="Phone Number"
            autoFocus
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
            autoComplete="Password"
            sx={{ marginTop: "15px" }}
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
              Confirm Password
            </Typography>
          </InputLabel>
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="Confirm Password"
            sx={{ marginTop: "15px" }}
          />
        </Box>

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          sx={{
            color: "primary.main",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19.36x",
          }}
          label="I accept the Terms & Conditions and Privacy and Cookie Notice"
          componentsProps={{
            typography: { variant: "poster" },
          }}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          sx={{
            color: "primary.main",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19.36x",
          }}
          label="I want to receive  Newsletter with best deals and offers"
          componentsProps={{
            typography: { variant: "poster" },
          }}
        />

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
            Sign Up
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
          Already have an account? <Box component="span">Log In</Box>
        </Typography>
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

export default SignUpForm;
