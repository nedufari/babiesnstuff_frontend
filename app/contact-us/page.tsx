import {
  Box,
  Container,
  Typography,
  Button,
  InputLabel,
  TextField,
  SvgIcon,
  Divider,
} from "@mui/material";
import React from "react";
import Nav from "../components/shared/Nav";
import { contactUsData, footerSocialIcons } from "../utils/data";

const ContactUsPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: {
          xs: `url("/assets/images/baby-boy-half.png")`,
          md: `url("/assets/images/baby-boy.png")`,
        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: {
          xs: "cover",
          md: "center",
        },
        backgroundSize: "100%",
        width: "100%",
        height: "130VH",
        paddingTop: "2rem",
      }}
    >
      <Container>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Nav bg="white" />
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gridTemplateRows: {
              xs: "0.3fr 1fr",
              md: "1fr",
            },
            gridTemplateAreas: {
              xs: `"a" "b"`,
              md: `"a b"`,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: {
                xs: "flex-start",
                md: "space-between",
              },
              gridArea: "a",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: {
                  xs: "0.1rem",
                  md: "2rem",
                },
              }}
            >
              <Typography
                variant="poster"
                fontWeight={800}
                lineHeight="48.41px"
                sx={{
                  fontSize: {
                    xs: "24px",
                    md: "40px",
                  },
                }}
                color="#FFF"
              >
                CONTACT US
              </Typography>

              {contactUsData.map((item, i) => (
                <Box key={i} sx={{ display: "flex", gap: "1rem" }}>
                  <SvgIcon>{item.icon}</SvgIcon>
                  <Typography
                    variant="poster"
                    fontWeight={600}
                    lineHeight="19.5px"
                    sx={{
                      fontSize: {
                        xs: "10px",
                        md: "24px",
                      },
                    }}
                    color="#FFF"
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              {footerSocialIcons.map((item, i) => (
                <Box
                  sx={{
                    height: { xs: "35px", md: "45px" },
                    width: { xs: "35px", md: "45px" },
                    backgroundColor: "#397F98",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={i}
                >
                  <SvgIcon
                    sx={{
                      height: "24px",
                      width: "24px",
                    }}
                  >
                    {item.icon}
                  </SvgIcon>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              backgroundColor: "#FFF",
              padding: "30px",
              borderRadius: "8px",
              gridArea: "b",
              justifySelf: "end",
            }}
          >
            <Typography
              variant="poster"
              fontWeight="600"
              textAlign="left"
              color="#397F98"
              sx={{
                fontSize: { xs: "24px", md: "30px" },
              }}
            >
              We would love to hear from you
            </Typography>
            <Divider />
            <Box component="form" noValidate sx={{ mt: 1, width: "100%" }}>
              <Box sx={{ marginBottom: "20px" }}>
                <InputLabel>
                  <Typography
                    variant="poster"
                    color="#333333"
                    fontWeight="500"
                    lineHeight="24.2px"
                    sx={{
                      fontSize: { xs: "16px", md: "20px" },
                    }}
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
                    sx={{
                      fontSize: { xs: "16px", md: "20px" },
                    }}
                    lineHeight="24.2px"
                  >
                    Phone number
                  </Typography>
                </InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="phone-number"
                  label="Phone Number"
                  type="text"
                  id="phone-number"
                  autoComplete="phone-number"
                  sx={{ marginTop: "15px" }}
                />
              </Box>

              <Box>
                <InputLabel>
                  <Typography
                    variant="poster"
                    color="#333333"
                    fontWeight="500"
                    sx={{
                      fontSize: { xs: "16px", md: "20px" },
                    }}
                    lineHeight="24.2px"
                  >
                    Message
                  </Typography>
                </InputLabel>
                <TextField
                  id="message"
                  label="Message"
                  multiline
                  rows={8}
                  fullWidth
                  sx={{ marginTop: "15px" }}
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
                  Submit
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
