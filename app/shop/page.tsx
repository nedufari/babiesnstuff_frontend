"use client";

import { Box, Container, ImageList, Typography, Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import Nav from "../components/shared/Nav";
import { SellingProductData, babyCardData, offerData } from "../utils/data";
import SellingProduct from "../components/product/SellingProduct";
import FeaturedProductCard from "../components/home/FeaturedProductCard";
import { featuredBrandsData } from "../utils/dummyData";
import Image from "next/image";
import OfferCard from "../components/product/OfferCard";
import BabyCard from "../components/shop/BabyCard";
import { useGetAllProductsNoAuthQuery } from "../store/Features/products/productsApiSlice";

const ShopPage = () => {
  const {
    data: allProductsNoAuth,
    isLoading: isLoadingProductsNoAuth,
    refetch,
  } = useGetAllProductsNoAuthQuery();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#F6F6F6",
        width: "100%",
        maxWidth: "100%",
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
          <Nav />
        </Box>

        <Box
          component="section"
          sx={{
            marginBottom: "4rem",
          }}
        >
          <Typography
            variant="poster"
            lineHeight="21.78px"
            color="#000000"
            sx={{
              fontWeight: { xs: 500, md: 600 },
              fontSize: { xs: "16px", md: "18px" },
              marginBottom: "2rem",
            }}
          >
            Recommended for you
          </Typography>

          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
            gap={2}
          >
            {allProductsNoAuth ? (
              <>
                {allProductsNoAuth.map((item, i) => (
                  <SellingProduct {...item} key={i} />
                ))}
              </>
            ) : (
              <Skeleton variant="rounded" width="450px" height="100%" />
            )}
          </Box>
        </Box>

        <Box
          component="section"
          sx={{
            marginBottom: "4rem",
          }}
        >
          <Typography
            variant="poster"
            lineHeight="21.78px"
            color="#000000"
            sx={{
              fontWeight: { xs: 500, md: 600 },
              fontSize: { xs: "16px", md: "18px" },
              marginBottom: "2rem",
            }}
          >
            Top Selling
          </Typography>

          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
            gap={2}
          >
            {allProductsNoAuth ? (
              <>
                {allProductsNoAuth.slice(0, 4).map((item, i) => (
                  <SellingProduct {...item} key={i} />
                ))}
              </>
            ) : (
              <Skeleton variant="rounded" width="450px" height="100%" />
            )}
          </Box>
        </Box>

        <Box
          component="section"
          sx={{
            marginBottom: "4rem",
          }}
        >
          <Typography
            variant="poster"
            lineHeight="21.78px"
            color="#000000"
            sx={{
              fontWeight: { xs: 500, md: 600 },
              fontSize: { xs: "16px", md: "18px" },
            }}
          >
            Featured
          </Typography>

          <ImageList
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem !important",
            }}
          >
            {SellingProductData.map((item, i) => (
              <FeaturedProductCard {...item} key={i} />
            ))}
          </ImageList>
        </Box>

        {/* <Box
          component="section"
          sx={{
            marginBottom: "8rem",
          }}
        >
          <Typography
            variant="poster"
            lineHeight="21.78px"
            color="#000000"
            sx={{
              fontWeight: { xs: 500, md: 600 },
              fontSize: { xs: "16px", md: "18px" },
              marginBottom: "4rem",
            }}
            textAlign="center"
          >
            Featured Brands
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {featuredBrandsData.map((item, i) => (
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
                key={i}
              >
                <Image
                  src={item.img}
                  alt="Heading baby Picture"
                  fill
                  sizes="100%"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box> */}

        <Box
          component="section"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {offerData.map((item, i) => (
            <OfferCard {...item} key={i} />
          ))}
        </Box>

        <Box
          component="section"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            marginTop: "8rem",
          }}
        >
          {babyCardData.map((item, i) => (
            <BabyCard {...item} key={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ShopPage;
