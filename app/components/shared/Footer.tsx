"use client";

import { useGetAllProductCategoriesNoAuthQuery } from "@/app/store/Features/productsCategory/productsCategoryApiSlice";
import {
  footerCategoriesData,
  footerCompanyData,
  footerSocialIcons,
  footerSupportData,
  storeInformationData,
} from "@/app/utils/data";
import {
  Box,
  Button,
  Divider,
  InputBase,
  Paper,
  SvgIcon,
  SxProps,
  Theme,
  Typography,
  Container,
  Skeleton,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const { data: allProductCategories, isLoading: isLoadingProductCategories } =
    useGetAllProductCategoriesNoAuthQuery();

  const router = useRouter();

  return (
    <Box component="footer" sx={styles["mainContainer"]}>
      <Container>
        <Image
          src="/assets/images/footer-logo.png"
          height={100}
          width={100}
          alt="Website Logo"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "flex-start",
            paddingBottom: "1rem",
          }}
        >
          <Box>
            <Typography
              variant="poster"
              fontSize="24px"
              fontWeight={600}
              lineHeight="29.05px"
              color="#000"
              paddingBottom="2rem"
            >
              Newsletter
            </Typography>
            <Typography
              variant="poster"
              fontSize="16px"
              fontWeight={600}
              lineHeight="19.36px"
              color="#3C3C3C"
              maxWidth="389px"
              paddingBottom="1rem"
            >
              Subscribe to our newsletter for new products, trends and offers
            </Typography>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: { xs: "100%", md: "400px" },
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="example@gmail.com"
                inputProps={{ "aria-label": "Search items, categories" }}
              />

              <Button
                component="label"
                variant="contained"
                tabIndex={-1}
                sx={{
                  textTransform: "capitalize",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
                color="primary"
              >
                Subscribe
              </Button>
            </Paper>

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
                    height: "45px",
                    width: "45px",
                    backgroundColor: "#397F98",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={i}
                >
                  <IconButton onClick={() => window.open(item.link, "_blank")}>
                    <SvgIcon
                      sx={{
                        height: "24px",
                        width: "24px",
                      }}
                    >
                      {item.icon}
                    </SvgIcon>
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography
              variant="poster"
              fontSize="20px"
              fontWeight={600}
              lineHeight="40px"
              color="#000"
              paddingBottom="2rem"
            >
              Categories
            </Typography>

            {allProductCategories ? (
              <>
                {allProductCategories.map((item, i) => (
                  <Box
                    key={i}
                    sx={{}}
                    // onClick={() => handleCategoryClick(item)}
                  >
                    <Typography
                      key={i}
                      variant="poster"
                      fontSize="16px"
                      fontWeight={400}
                      lineHeight="19.36px"
                      color="#000"
                      paddingBottom="0.5rem"
                    >
                      {item.name}
                    </Typography>
                  </Box>
                ))}
              </>
            ) : (
              <></>
            )}
          </Box>
          <Box>
            <Typography
              variant="poster"
              fontSize="20px"
              fontWeight={600}
              lineHeight="40px"
              color="#000"
              paddingBottom="2rem"
            >
              Store Information
            </Typography>
            {storeInformationData.map((item, i) => (
              <Box
                component="span"
                key={i}
                sx={{ display: "flex", gap: "1rem", maxWidth: "16rem" }}
              >
                {item.icon ? (
                  <SvgIcon
                    sx={{
                      height: "18px",
                      width: "18px",
                    }}
                  >
                    {item.icon}
                  </SvgIcon>
                ) : (
                  <Box
                    sx={{
                      height: "18px",
                      width: "18px",
                    }}
                  ></Box>
                )}

                <Typography
                  key={i}
                  variant="poster"
                  fontSize="16px"
                  fontWeight={400}
                  lineHeight="19.36px"
                  color="#000"
                  paddingBottom="0.5rem"
                  textOverflow="ellipsis"
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box>
            <Typography
              variant="poster"
              fontSize="20px"
              fontWeight={600}
              lineHeight="40px"
              color="#000"
              paddingBottom="2rem"
            >
              Company
            </Typography>
            {footerCompanyData.map((item, i) => (
              <Typography
                key={i}
                variant="poster"
                fontSize="16px"
                fontWeight={400}
                lineHeight="19.36px"
                color="#000"
                paddingBottom="0.5rem"
              >
                {item}
              </Typography>
            ))}
          </Box>
          <Box>
            <Typography
              variant="poster"
              fontSize="20px"
              fontWeight={600}
              lineHeight="40px"
              color="#000"
              paddingBottom="2rem"
            >
              Support
            </Typography>
            {footerSupportData.map((item, i) => (
              <Typography
                key={i}
                variant="poster"
                fontSize="16px"
                fontWeight={400}
                lineHeight="19.36px"
                color="#000"
                paddingBottom="0.5rem"
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>

        <Divider
          sx={{
            backgroundColor: "rgba(35, 35, 35, 0.5)",
          }}
        />

        <Container
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: {
              xs: "center",
              md: "space-between",
            },
            alignItems: "center",
            height: "80px",
          }}
        >
          <Typography
            variant="poster"
            fontWeight="600"
            lineHeight="16.94px"
            color="#505050"
            sx={{
              fontSize: {
                xs: "14px",
                md: "18px",
              },
            }}
          >
            Copyright &#64; {new Date().getFullYear()} Babies n stuffs
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <Typography
              variant="poster"
              fontWeight="600"
              lineHeight="16.94px"
              color="#505050"
              sx={{
                fontSize: {
                  xs: "14px",
                  md: "18px",
                },
              }}
            >
              Terms of Use
            </Typography>
            <Divider
              orientation="vertical"
              sx={{
                width: "1px",
                height: "17px",
                backgroundColor: "#505050",
              }}
            />
            <Typography
              variant="poster"
              fontWeight="600"
              lineHeight="16.94px"
              color="#505050"
              sx={{
                fontSize: {
                  xs: "14px",
                  md: "18px",
                },
              }}
            >
              Privacy Policy
            </Typography>
            <Divider
              orientation="vertical"
              sx={{
                width: "1px",
                height: "17px",
                backgroundColor: "#505050",
              }}
            />
            <Typography
              variant="poster"
              fontWeight="600"
              lineHeight="16.94px"
              color="#505050"
              sx={{
                fontSize: {
                  xs: "14px",
                  md: "18px",
                },
              }}
            >
              Cookie Policy
            </Typography>
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

const styles: { [key: string]: SxProps<Theme> } = {
  mainContainer: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "#FAFAFA",
    paddingTop: "3rem",
  },
};

export default Footer;
