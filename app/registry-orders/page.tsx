"use client";

import {
  Box,
  Container,
  Breadcrumbs,
  Typography,
  SvgIcon,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import { backIcon } from "@/app/utils/icons";
import CartSummary from "@/app/components/cart/CartSummary";
import YouMayLike from "@/app/components/shared/YouMayLike";
import { toast } from "react-toastify";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { usePayForRegistryMutation } from "../store/Features/registry/registryApiSlice";

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
    marginRight: "unset",
  },
}));

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

const CheckOutPage = () => {
  const router = useRouter();

  const itemIds = useSelector((state: RootState) => state.registryIds.itemIds);
  const userId = useSelector((state: RootState) => state.registryIds.userId);
  const theNumb: any = useSelector(
    (state: RootState) => state.registryIds.numb
  );

  const [confirmOrder, { isLoading: confirmOrderIsLoading }] =
    usePayForRegistryMutation();

  let numb: { price: number; tax: number }[] = [];

  const handleConfirmOrder = async (e: any) => {
    try {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const objData: any = Object.fromEntries(data.entries());

      const { success, message, payload } = await confirmOrder({
        id: userId,
        itemIds,
        payForAllItems: false,
        ...objData,
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
        router.push(`${payload.PaymentResponse.authorization_url}`);
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
        backgroundColor: "#F6F6F6",
        width: "100%",
        maxWidth: "100%",
        paddingY: "3rem",
      }}
    >
      <Container>
        <Box
          role="presentation"
          sx={{
            marginBottom: "4rem",
          }}
        >
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#FFA013",
              "& li > a": {
                textDecoration: "none",
                color: "#FFA013",
              },
            }}
          >
            <Box
              onClick={() => router.back()}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <SvgIcon>{backIcon("#FFA013")}</SvgIcon>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#FFA013",
                  cursor: "pointer",
                }}
              >
                Continue Shopping
              </Typography>
            </Box>
          </Breadcrumbs>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: "2rem",
            marginBottom: "2rem",
          }}
          component="form"
          onSubmit={handleConfirmOrder}
        >
          <Box
            sx={{
              flex: 2,
              width: "100%",
              display: "flex",
              gap: "0.5rem",
              flexDirection: "column",
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#FFF",
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
                padding: "2rem",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Typography
                  variant="poster"
                  color="#000000"
                  fontWeight="500"
                  fontSize="20px"
                  lineHeight="24.2px"
                >
                  1. Contact Information
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <InputLabel>
                    <Typography
                      variant="poster"
                      color="#1C1B1F"
                      fontWeight="500"
                      fontSize="16px"
                      lineHeight="19.36px"
                    >
                      Full Name
                    </Typography>
                  </InputLabel>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="Full Name"
                    autoFocus
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <InputLabel>
                    <Typography
                      variant="poster"
                      color="#1C1B1F"
                      fontWeight="500"
                      fontSize="16px"
                      lineHeight="19.36px"
                    >
                      E-mail address
                    </Typography>
                  </InputLabel>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="E-mail address"
                    name="email"
                    autoComplete="E-mail address"
                    autoFocus
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <InputLabel>
                    <Typography
                      variant="poster"
                      color="#1C1B1F"
                      fontWeight="500"
                      fontSize="16px"
                      lineHeight="19.36px"
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
                <Box sx={{ flex: 1 }}>
                  <InputLabel>
                    <Typography
                      variant="poster"
                      color="#1C1B1F"
                      fontWeight="500"
                      fontSize="16px"
                      lineHeight="19.36px"
                    >
                      Additional Phone Number
                    </Typography>
                  </InputLabel>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="additional-mobile"
                    label="Additional Phone Number"
                    name="additional-mobile"
                    autoComplete="Additional Phone Number"
                    autoFocus
                  />
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: "100%",
                backgroundColor: "#FFF",
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
                padding: "2rem",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Typography
                  variant="poster"
                  color="#000000"
                  fontWeight="500"
                  fontSize="20px"
                  lineHeight="24.2px"
                >
                  2. Payment Method
                </Typography>
              </Box>

              <RadioGroup
                name="paymentMethod"
                defaultValue="card"
                sx={{
                  gap: "1rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    "& > .MuiFormControlLabel-root": {
                      marginRight: "unset",
                    },
                    alignItems: "flex-start",
                  }}
                >
                  <MyFormControlLabel
                    value="direct_transfer"
                    label=""
                    control={<Radio />}
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      variant="poster"
                      color="#333333"
                      fontWeight="500"
                      fontSize="16px"
                      lineHeight="19.36px"
                    >
                      Direct Bank Transfer
                    </Typography>
                    <Typography
                      variant="poster"
                      color="#7D7D7D"
                      fontWeight="400"
                      fontSize="14px"
                      lineHeight="18.15px"
                    >
                      Make your payment directly into our Bank account. Your
                      order will not be shipped until the funds have been
                      cleared in our account
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    "& > .MuiFormControlLabel-root": {
                      marginRight: "unset",
                    },
                    alignItems: "flex-start",
                  }}
                >
                  <MyFormControlLabel
                    value="card"
                    label=""
                    control={<Radio />}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <Typography
                      variant="poster"
                      color="#333333"
                      fontWeight="500"
                      fontSize="16px"
                      lineHeight="19.36px"
                    >
                      Card
                    </Typography>
                    <Typography
                      variant="poster"
                      color="#7D7D7D"
                      fontWeight="400"
                      fontSize="14px"
                      lineHeight="18.15px"
                    >
                      We accept:
                    </Typography>

                    <Box sx={{ display: "flex", gap: "1rem" }}>
                      <Box
                        sx={{
                          "& > img": {
                            position: "static !important",
                            width: {
                              xs: "35px",
                              md: "70px",
                            },
                            height: {
                              xs: "35px",
                              md: "70px",
                            },
                          },
                        }}
                      >
                        <Image
                          src="/assets/images/verve.png"
                          alt="Heading baby Picture"
                          fill
                          sizes="100%"
                          style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          "& > img": {
                            position: "static !important",
                            width: {
                              xs: "35px",
                              md: "70px",
                            },
                            height: {
                              xs: "35px",
                              md: "70px",
                            },
                          },
                        }}
                      >
                        <Image
                          src="/assets/images/master.png"
                          alt="Heading baby Picture"
                          fill
                          sizes="100%"
                          style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          "& > img": {
                            position: "static !important",
                            width: {
                              xs: "35px",
                              md: "70px",
                            },
                            height: {
                              xs: "35px",
                              md: "70px",
                            },
                          },
                        }}
                      >
                        <Image
                          src="/assets/images/visa.png"
                          alt="Heading baby Picture"
                          fill
                          sizes="100%"
                          style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          "& > img": {
                            position: "static !important",
                            width: {
                              xs: "35px",
                              md: "70px",
                            },
                            height: {
                              xs: "35px",
                              md: "70px",
                            },
                          },
                        }}
                      >
                        <Image
                          src="/assets/images/paypal.png"
                          alt="Heading baby Picture"
                          fill
                          sizes="100%"
                          style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </RadioGroup>
            </Box>
          </Box>

          <CartSummary numb={theNumb} isOrder="registry-order" shippinFee="7" />
        </Box>
      </Container>
    </Box>
  );
};

export default CheckOutPage;
