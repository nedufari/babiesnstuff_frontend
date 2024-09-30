import {
  useRegisterMutation,
  useResendOtpMutation,
  useVerifyOtpMutation,
} from "@/app/store/Features/auth/authApiSlice";
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
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "@/app/types";
import { setCredentials } from "@/app/store/Features/auth/authSlice";
import { MuiOtpInput } from "mui-one-time-password-input";

const VerifyEmailForm = () => {
  const [verifyOtp, { isLoading: verifyOtpLoading }] = useVerifyOtpMutation();
  const [reSendOtp, { isLoading: reSendOtpLoading }] = useResendOtpMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const email = useSelector((state: RootState) => state.auth.signUpUserEmail);
  const [value, setValue] = React.useState<string>("");

  const textFieldRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    i: number
  ) => {
    if (e.target.value.length === 1 && i < textFieldRefs.current.length - 1) {
      textFieldRefs.current[i + 1]?.focus();
    }
  };

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleComplete = (finalValue: string) => {
    // fetch("...");
  };

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const { success, message, payload } = await verifyOtp({
        otp: value,
      }).unwrap();

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
        dispatch(
          setCredentials({
            token: payload.accessToken.token,
          })
        );
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

  const handleResendCode = async (e: any) => {
    try {
      e.preventDefault();

      const { success, message, payload } = await reSendOtp({ email }).unwrap();

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
        Verify Email
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1, width: "100%", display: "flex", flexDirection: "column" }}
      >
        <Typography
          textAlign="center"
          variant="poster"
          fontWeight="500"
          fontSize="20px"
          lineHeight="24.2px"
          color="#969696"
          sx={{
            marginBottom: 1,
          }}
        >
          A code has been sent to your mail, input the code to continue
        </Typography>

        <MuiOtpInput
          value={value}
          onChange={handleChange}
          onComplete={handleComplete}
          length={4}
          autoFocus
          validateChar={(character: string, index: number) => true}
        />

        {/* <Box
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
            "& .MuiFormControl-root": {
              justifyContent: "center",
            },
          }}
        >
          {Array.from({ length: 4 }, (x, i) => i).map((item, i) => (
            <TextField
              key={i}
              id={`outlined-basic-${i}`}
              variant="outlined"
              name={`name-${i}`}
              inputProps={{
                maxLength: 1,
                style: { textAlign: "center" },
              }}
              onChange={(e) => handleInputChange(e, i)}
              inputRef={(el) => (textFieldRefs.current[i] = el)}
              sx={{
                width: { xs: "unset", md: "77px" },
                height: { xs: "unset", md: "100px" },
              }}
            />
          ))}
        </Box> */}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 1,
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
            Sign Up
          </Typography>
        </Button>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            textAlign="center"
            variant="poster"
            fontWeight="400"
            fontSize="16px"
            lineHeight="19.36px"
            color="#000000"
          >
            Didn’t get a code?{" "}
          </Typography>
          <Button
            variant="text"
            sx={{ textTransform: "lowercase" }}
            onClick={handleResendCode}
          >
            <Typography
              textAlign="center"
              variant="poster"
              fontWeight="600"
              fontSize="16px"
              lineHeight="19.36px"
              color="#000000"
              textTransform="capitalize"
            >
              Resend code
            </Typography>
          </Button>
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

export default VerifyEmailForm;
