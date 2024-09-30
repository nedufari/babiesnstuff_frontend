"use client";

import {
  cartIcon,
  downIcon,
  hamIcon,
  loveIcon,
  questionIcon,
  searchIcon,
} from "@/app/utils/icons";
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
  SvgIcon,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import ProfileDetails from "./ProfileDetails";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useRouter } from "next/navigation";
import { useGetProductsInCartQuery } from "@/app/store/Features/cart/cartApiSlice";
import { AppRegistration } from "@mui/icons-material";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const { data: cartProducts, isLoading: isLoadingProducts } =
    useGetProductsInCartQuery();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleSearch: any = async (e: any) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const objData = Object.fromEntries(data.entries());
    router.push(`/products?q=${objData.name}`);
  };

  return (
    <Box component="header" sx={styles["mainContainer"]}>
      <Container
        sx={{
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            gap: "0.5rem",
          }}
        >
          <Box
            component="span"
            sx={{ display: "flex", alignItems: "flex-end", gap: "0.2rem" }}
          >
            <Typography
              fontWeight={600}
              fontSize="12px"
              lineHeight="14.63px"
              color="#414141"
            >
              English
            </Typography>
            <SvgIcon
              sx={{
                width: "4px",
                height: "7px",
              }}
            >
              {downIcon()}
            </SvgIcon>
          </Box>
          <Divider
            orientation="vertical"
            sx={{
              width: "1px",
              height: "17px",
              backgroundColor: "#0F0F0F",
            }}
          />
          <Box
            component="span"
            sx={{ display: "flex", alignItems: "flex-end", gap: "0.2rem" }}
          >
            <Typography
              fontWeight={600}
              fontSize="12px"
              lineHeight="14.63px"
              color="#414141"
            >
              NGN
            </Typography>
            <SvgIcon
              sx={{
                width: "4px",
                height: "7px",
              }}
            >
              {downIcon()}
            </SvgIcon>
          </Box>
          <Divider
            orientation="vertical"
            sx={{
              width: "1px",
              height: "17px",
              backgroundColor: "#0F0F0F",
            }}
          />
          <Box
            component="span"
            sx={{ display: "flex", alignItems: "flex-end", gap: "0.2rem" }}
          >
            <Typography
              fontWeight={600}
              fontSize="12px"
              lineHeight="14.63px"
              color="#414141"
            >
              USD
            </Typography>
            <SvgIcon
              sx={{
                width: "4px",
                height: "7px",
              }}
            >
              {downIcon()}
            </SvgIcon>
          </Box>
        </Box>
      </Container>

      <Divider
        sx={{
          backgroundColor: "rgba(35, 35, 35, 0.5)",
          display: {
            xs: "none",
            md: "block",
          },
        }}
      />

      <Container
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <IconButton onClick={toggleDrawer(true)}>
            <SvgIcon
              sx={{
                width: "17px",
                height: "15px",
              }}
            >
              {hamIcon()}
            </SvgIcon>
          </IconButton>

          <Link href="/">
            <Image
              src="/assets/images/footer-logo.png"
              height={70}
              width={70}
              alt="Website Logo"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <ProfileDetails />

          <IconButton onClick={() => router.push("/cart")}>
            <Badge
              badgeContent={
                <Box
                  sx={{
                    background: "primary.main",
                    color: "#FFF",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "5px",
                  }}
                >
                  1
                </Box>
              }
            >
              <SvgIcon
                sx={{
                  width: "17px",
                  height: "15px",
                }}
              >
                {cartIcon()}
              </SvgIcon>
            </Badge>
          </IconButton>

          <IconButton onClick={() => router.push("/registry")}>
            <AppRegistration />
          </IconButton>
        </Box>
      </Container>

      <Container
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            md: "space-between",
          },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Link href="/">
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
          </Link>
        </Box>

        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: 400,
            height: {
              xs: "69px",
              md: "51px",
            },
          }}
          onSubmit={handleSearch}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search items, categories"
            inputProps={{ "aria-label": "Search items, categories" }}
            name="name"
          />

          <Button
            variant="contained"
            tabIndex={-1}
            startIcon={
              <SvgIcon
                sx={{
                  height: "14px",
                  width: "14px",
                }}
              >
                {searchIcon()}
              </SvgIcon>
            }
            type="submit"
            sx={{
              background: "primary.main",
              textTransform: "capitalize",
            }}
          >
            Search
          </Button>
        </Paper>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <IconButton onClick={() => router.push("/favorites")}>
            <SvgIcon
              sx={{
                width: "17px",
                height: "15px",
              }}
            >
              {loveIcon()}
            </SvgIcon>
          </IconButton>

          <ProfileDetails />
          <SvgIcon
            sx={{
              width: "17px",
              height: "15px",
            }}
          >
            {questionIcon()}
          </SvgIcon>

          <Button
            component="label"
            variant="outlined"
            tabIndex={-1}
            startIcon={
              <Badge
                badgeContent={
                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      color: "#FFF",
                      width: "14px",
                      height: "14px",
                      borderRadius: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "5px",
                      position: "relative",
                      top: "4px",
                      right: "2px",
                    }}
                  >
                    <Typography
                      variant="poster"
                      color="#FFF"
                      fontWeight="500"
                      fontSize="10px"
                      lineHeight="19.36px"
                    >
                      {cartProducts?.length || 0}
                    </Typography>
                  </Box>
                }
              >
                <SvgIcon>{cartIcon()}</SvgIcon>
              </Badge>
            }
            sx={{
              border: "1px solid #397F98",
              borderRadius: "3px",
              textTransform: "capitalize",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "14.63px",
              color: "#000",
            }}
            onClick={() => router.push("/cart")}
          >
            My Cart
          </Button>

          <Button
            component="label"
            variant="outlined"
            tabIndex={-1}
            startIcon={
              <Badge>
                <AppRegistration />
              </Badge>
            }
            sx={{
              border: "1px solid #397F98",
              borderRadius: "3px",
              textTransform: "capitalize",
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "14.63px",
              color: "#000",
            }}
            onClick={() => router.push("/registry")}
          >
            Registry
          </Button>
        </Box>
      </Container>
      <MobileNav open={open} setOpen={setOpen} toggleDrawer={toggleDrawer} />
    </Box>
  );
};

const styles: { [key: string]: SxProps<Theme> } = {
  mainContainer: {
    width: "100%",
    maxWidth: "100%",
  },
};
export default Header;
