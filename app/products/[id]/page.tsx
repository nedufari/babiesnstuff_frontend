"use client";

import YouMayLike from "@/app/components/shared/YouMayLike";
import {
  Box,
  Breadcrumbs,
  Button,
  Link as MaterialLink,
  Typography,
  SvgIcon,
  Divider,
  Container,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import Size from "@/app/components/product/Size";
import Color from "@/app/components/product/Color";
import { loveIcon, plusIcon } from "@/app/utils/icons";
import { useGetSingleProductNoAuthQuery } from "@/app/store/Features/products/productsApiSlice";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useAddCartMutation } from "@/app/store/Features/cart/cartApiSlice";
import { toast } from "react-toastify";
import { usePostRegistryMutation } from "@/app/store/Features/registry/registryApiSlice";
import { useAddFavoriteMutation } from "@/app/store/Features/favorite/favoritesApiSlice";
import { BeatLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { setGuestId } from "@/app/store/Features/auth/authSlice";
import Cookies from "js-cookie";

const IndividualProduct = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();

  const [addCart, { isLoading: addCartIsLoading }] = useAddCartMutation();

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();

      const { success, message, payload } = await addCart({
        id,
        quantity,
      }).unwrap();

      console.log({ success, message, payload });

      if (success) {
        const guestId = payload?.cart?.guestId;

        if (guestId) console.log({ guestId });

        dispatch(setGuestId({ guestId }));

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

  const handleFavoriteClick = async (e: any) => {
    try {
      e.preventDefault();

      const { success, message, payload } = await addFavorite({
        id,
        quantity,
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

  const { data: singleProductNoAuth, isLoading: isLoadingSingleProductNoAuth } =
    useGetSingleProductNoAuthQuery(Number(id));

  const [addRegistry, { isLoading: addRegistryIsLoading }] =
    usePostRegistryMutation();

  const [addFavorite, { isLoading: addFavoriteIsLoading }] =
    useAddFavoriteMutation();

  const handleRegistry = async (e: any) => {
    try {
      e.preventDefault();

      const { success, message, payload } = await addRegistry({
        productID: id,
        quantity,
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

  if (isLoadingSingleProductNoAuth)
    return (
      <Box
        sx={{
          backgroundColor: "#F6F6F6",
          width: "100%",
          maxWidth: "100%",
          paddingY: "2rem",
        }}
      >
        <Container
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BeatLoader color="#397F98" size={50} />
        </Container>
      </Box>
    );

  if (!singleProductNoAuth || !singleProductNoAuth.success)
    return (
      <Box
        sx={{
          backgroundColor: "#F6F6F6",
          width: "100%",
          maxWidth: "100%",
          paddingY: "2rem",
        }}
      >
        <Container
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="poster"
            fontWeight={600}
            sx={{
              fontSize: "24px",
              lineHeight: "29.05px",
              marginBottom: "2rem",
            }}
          >
            Product not found
          </Typography>
        </Container>
      </Box>
    );

  const {
    name,
    description,
    price,
    stock,
    productImages,
    available_colors,
    available_sizes,
  } = singleProductNoAuth.payload.products;

  const theProductImage =
    productImages.length > 0
      ? productImages[0]
      : "/assets/images/image-131.png";

  return (
    <Box
      sx={{
        backgroundColor: "#F6F6F6",
        width: "100%",
        maxWidth: "100%",
        paddingY: "2rem",
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
              color: "#3C3C3C",
              "& li > a": {
                textDecoration: "none",
                color: "#3C3C3C",
              },
            }}
          >
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Typography color="text.primary">{name}</Typography>
          </Breadcrumbs>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "1rem", md: "2rem" },
            marginBottom: "4rem",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                width: { xs: "390px", md: "547.5px" },
                height: "527px",
                borderRadius: "4px",
                "& > img": {
                  // scale: { xs: `3`, md: `2` },
                  position: "static !important",
                  objectFit: { xs: "cover !important", md: "cover !important" },
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #397F98",
                backgroundColor: "#FFF",
              }}
            >
              <Image
                src={theProductImage}
                alt="Product picture"
                fill
                sizes="100%"
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "0.5rem",
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            >
              {productImages &&
                productImages.map((img, i) => (
                  <Box
                    sx={{
                      border: `1px solid #D3D3D3`,
                      width: { xs: "86.25px", md: "86.25px" },
                      height: { xs: "90px", md: "90px" },
                      borderRadius: "2px",
                      cursor: "pointer",
                    }}
                    key={i}
                  >
                    <Image
                      key={i}
                      src={img}
                      alt="Product picture"
                      height={100}
                      width={100}
                      loading="lazy"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Box>
                ))}
            </Box>
          </Box>

          <Box>
            <Typography
              variant="poster"
              fontWeight={600}
              sx={{
                fontSize: "24px",
                lineHeight: "29.05px",
                marginBottom: "2rem",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="poster"
              fontWeight={600}
              sx={{
                fontSize: "24px",
                lineHeight: "29.05px",
                marginBottom: "2rem",
              }}
            >
              {`₦${price}`}
            </Typography>
            <Typography
              variant="poster"
              fontWeight={400}
              fontSize="16px"
              lineHeight="24px"
              sx={{
                marginBottom: "2rem",
              }}
            >
              {description}
            </Typography>
            <Typography
              variant="poster"
              fontWeight={400}
              fontSize="18px"
              lineHeight="21.78px"
              sx={{
                marginBottom: "2rem",
              }}
            >
              Sizes
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              {available_sizes &&
                available_sizes
                  .split(",")
                  .map((size: string, i: number) => (
                    <Size key={i} size={size} />
                  ))}
            </Box>
            <Typography
              variant="poster"
              fontWeight={400}
              fontSize="18px"
              lineHeight="21.78px"
              sx={{
                marginBottom: "2rem",
              }}
            >
              Colors
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              {available_colors &&
                available_colors
                  .split(",")
                  .map((color, i) => <Color key={i} backgroundColor={color} />)}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "3rem",
                marginBottom: "2rem",
              }}
            >
              <Button
                component="label"
                variant="contained"
                tabIndex={-1}
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "2px",
                  backgroundColor: "primary.main",
                }}
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                aria-label="Decrease quantity"
              >
                <Divider
                  sx={{
                    width: "12.8px",
                    height: "2px",
                    backgroundColor: "#FFF",
                  }}
                />
              </Button>
              <Typography>{quantity}</Typography>
              <Button
                component="label"
                variant="contained"
                tabIndex={-1}
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "2px",
                  backgroundColor: "primary.main",
                }}
                onClick={() => setQuantity((prev) => Math.min(prev + 1, stock))}
                aria-label="Increase quantity"
              >
                <SvgIcon
                  sx={{
                    width: "12px",
                    height: "12px",
                  }}
                >
                  {plusIcon()}
                </SvgIcon>
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
                marginBottom: "2rem",
              }}
            >
              <Button
                component="label"
                variant="contained"
                tabIndex={-1}
                sx={{
                  width: { xs: "308px", lg: "481.5px" },
                  height: "68px",
                }}
                onClick={handleSubmit}
              >
                <Typography
                  variant="poster"
                  fontWeight={500}
                  fontSize="24px"
                  lineHeight="29.05px"
                  textTransform="capitalize"
                >
                  Add to cart
                </Typography>
              </Button>
              <IconButton onClick={handleFavoriteClick}>
                <SvgIcon
                  sx={{
                    width: "44px",
                    height: "38px",
                  }}
                >
                  {loveIcon()}
                </SvgIcon>
              </IconButton>
            </Box>

            <Button
              component="label"
              variant="outlined"
              tabIndex={-1}
              sx={{
                border: "1px solid transparent",
                borderImage: "linear-gradient(to right, #397F98, #FFA013) 1",
                backgroundColor: "transparent",
                borderRadius: "3px",
                textTransform: "capitalize",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "14.63px",
                color: "#000",
                width: { xs: "308px", lg: "481.5px" },
                height: "68px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleRegistry}
            >
              <Typography
                variant="poster"
                fontWeight={500}
                fontSize="24px"
                lineHeight="29.05px"
                sx={{
                  background: `linear-gradient(to right, #397F98 0%, #FFA013 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Add to Registry
              </Typography>
            </Button>
          </Box>
        </Box>

        <YouMayLike />
        <YouMayLike />
      </Container>
    </Box>
  );
};

export default IndividualProduct;
