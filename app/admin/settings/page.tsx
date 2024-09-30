"use client";

import {
  Box,
  InputLabel,
  SelectChangeEvent,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
} from "@mui/material";
import React, { useState } from "react";

const SettingsPage = () => {
  const [category, setCategory] = useState("");
  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const [state, setState] = React.useState({
    orderConfirmation: true,
    orderStatus: false,
    orderDelivered: true,
    emailNotification: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FFF",
        padding: "1rem",
        marginY: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexDirection: {
            xs: "column-reverse",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Typography
            variant="poster"
            color="#000000"
            fontWeight="500"
            fontSize="20px"
            lineHeight="24.2px"
          >
            Change Password
          </Typography>
          <Box
            sx={{
              border: "1px solid #E4E4E4",
              borderRadius: "4px",
              paddingX: "1rem",
              paddingY: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box>
              <InputLabel>
                <Typography
                  variant="poster"
                  color="#1C1B1F"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  Current Password
                </Typography>
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="currentPassword"
                label="Current Password"
                name="currentPassword"
                autoComplete="Current Password"
                autoFocus
              />
            </Box>

            <Box>
              <InputLabel>
                <Typography
                  variant="poster"
                  color="#1C1B1F"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  New Password
                </Typography>
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="newPassword"
                label="New Password"
                name="newPassword"
                autoComplete="New Password"
                autoFocus
              />
            </Box>

            <Box>
              <InputLabel>
                <Typography
                  variant="poster"
                  color="#1C1B1F"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  Confirm Password
                </Typography>
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
                autoComplete="Confirm Password"
                autoFocus
              />
            </Box>
          </Box>

          <Typography
            variant="poster"
            color="#000000"
            fontWeight="500"
            fontSize="20px"
            lineHeight="24.2px"
          >
            Fees
          </Typography>

          <Box
            sx={{
              border: "1px solid #E4E4E4",
              borderRadius: "4px",
              paddingX: "1rem",
              paddingY: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box>
              <InputLabel>
                <Typography
                  variant="poster"
                  color="#1C1B1F"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  International Shipping Fee
                </Typography>
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="internationalShippingFees"
                label="International Shipping Fee"
                name="internationalShippingFees"
                autoComplete="International Shipping Fee"
                autoFocus
              />
            </Box>

            <Box>
              <InputLabel>
                <Typography
                  variant="poster"
                  color="#1C1B1F"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  Local shipping Fee
                </Typography>
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="localShippingFees"
                label="Local shipping Fee"
                name="localShippingFees"
                autoComplete="Local shipping Fee"
                autoFocus
              />
            </Box>
          </Box>
          <Typography
            variant="poster"
            color="#000000"
            fontWeight="500"
            fontSize="20px"
            lineHeight="24.2px"
          >
            Notifications
          </Typography>

          <Box
            sx={{
              border: "1px solid #E4E4E4",
              borderRadius: "4px",
              paddingX: "1rem",
              paddingY: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="poster"
                  color="#000000"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  Order Confirmation
                </Typography>
                <Typography
                  variant="poster"
                  color="#000000"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  You will be notified when customer order any product.
                </Typography>
              </Box>

              <FormControlLabel
                sx={{
                  marginRight: 0,
                }}
                control={
                  <Switch
                    checked={state.orderConfirmation}
                    onChange={handleChange}
                    name="orderConfirmation"
                    sx={{
                      "& .MuiSwitch-thumb": {
                        backgroundColor: "#FFF",
                      },
                    }}
                  />
                }
                label=""
              />
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #E4E4E4",
              borderRadius: "4px",
              paddingX: "1rem",
              paddingY: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="poster"
                  color="#000000"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  Order Status Changed
                </Typography>
                <Typography
                  variant="poster"
                  color="#000000"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  You will be notified when customer make changes to the order
                </Typography>
              </Box>

              <FormControlLabel
                sx={{
                  marginRight: 0,
                }}
                control={
                  <Switch
                    checked={state.orderStatus}
                    onChange={handleChange}
                    name="orderStatus"
                    sx={{
                      "& .MuiSwitch-thumb": {
                        backgroundColor: "#FFF",
                      },
                    }}
                  />
                }
                label=""
              />
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #E4E4E4",
              borderRadius: "4px",
              paddingX: "1rem",
              paddingY: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="poster"
                  color="#000000"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  Order Delivered
                </Typography>
                <Typography
                  variant="poster"
                  color="#000000"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  You will be notified once the order is delivered
                </Typography>
              </Box>

              <FormControlLabel
                sx={{
                  marginRight: 0,
                }}
                control={
                  <Switch
                    checked={state.orderDelivered}
                    onChange={handleChange}
                    name="orderDelivered"
                    sx={{
                      "& .MuiSwitch-thumb": {
                        backgroundColor: "#FFF",
                      },
                    }}
                  />
                }
                label=""
              />
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #E4E4E4",
              borderRadius: "4px",
              paddingX: "1rem",
              paddingY: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="poster"
                  color="#000000"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  Email Notification
                </Typography>
                <Typography
                  variant="poster"
                  color="#000000"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  Turn on email notification to get updates through email
                </Typography>
              </Box>

              <FormControlLabel
                sx={{
                  marginRight: 0,
                }}
                control={
                  <Switch
                    checked={state.emailNotification}
                    onChange={handleChange}
                    name="emailNotification"
                    sx={{
                      "& .MuiSwitch-thumb": {
                        backgroundColor: "#FFF",
                      },
                    }}
                  />
                }
                label=""
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              border: "1px solid #E4E4E4",
              borderRadius: "4px",
              paddingX: "1rem",
              paddingY: "1rem",
            }}
          >
            <Box sx={{}}>
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

            <Box sx={{}}>
              <InputLabel>
                <Typography
                  variant="poster"
                  color="#1C1B1F"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  Store Name
                </Typography>
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="storeName"
                label="Store Name"
                name="storeName"
                autoComplete="Store Name"
                autoFocus
              />
            </Box>

            <Box sx={{}}>
              <InputLabel>
                <Typography
                  variant="poster"
                  color="#1C1B1F"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  Location
                </Typography>
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                autoComplete="Location"
                autoFocus
              />
            </Box>

            <Box sx={{}}>
              <InputLabel>
                <Typography
                  variant="poster"
                  color="#1C1B1F"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  Currency
                </Typography>
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="currency"
                label="Currency"
                name="currency"
                autoComplete="Currency"
                autoFocus
              />
            </Box>

            <Box sx={{}}>
              <InputLabel>
                <Typography
                  variant="poster"
                  color="#1C1B1F"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  International Shipping Fee
                </Typography>
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="internationalShippingFee"
                label="International Shipping Fee"
                name="internationalShippingFee"
                autoComplete="International Shipping Fee"
                autoFocus
              />
            </Box>

            <Box sx={{}}>
              <InputLabel>
                <Typography
                  variant="poster"
                  color="#1C1B1F"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  Local Shipping Fee
                </Typography>
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="localShippingFee"
                label="Local Shipping Fee"
                name="localShippingFee"
                autoComplete="Local Shipping Fee"
                autoFocus
              />
            </Box>

            <Box sx={{}}>
              <InputLabel>
                <Typography
                  variant="poster"
                  color="#1C1B1F"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="19.36px"
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

            <Box sx={{}}>
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
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete=" Phone Number"
                autoFocus
              />
            </Box>

            <Box sx={{}}>
              <InputLabel>
                <Typography
                  variant="poster"
                  color="#1C1B1F"
                  fontWeight="500"
                  fontSize="16px"
                  lineHeight="19.36px"
                >
                  Address
                </Typography>
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="Address"
                autoFocus
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsPage;
