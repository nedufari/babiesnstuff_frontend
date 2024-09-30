"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Skeleton,
  Divider,
  Breadcrumbs,
} from "@mui/material";
import {
  useGetAllProductCategoriesNoAuthQuery,
  useGetOneProductCategoryWithProductsQuery,
} from "../store/Features/productsCategory/productsCategoryApiSlice";
import { useSearchParams } from "next/navigation";
import { useGetAllSearchProductsQuery } from "../store/Features/products/productsApiSlice";
import SellingProduct from "../components/product/SellingProduct";
import { IProductCategory } from "../types";
import Link from "next/link";
import { BeatLoader } from "react-spinners";

const ProductPage = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  const [theProducts, setTheProducts] = useState<any[]>([]);

  const { data: allProductCategories, isLoading: isLoadingProductCategories } =
    useGetAllProductCategoriesNoAuthQuery();

  const {
    data: allProducts,
    isLoading: isLoadingProducts,
    refetch: refetchAllProducts,
  } = useGetAllSearchProductsQuery(search);

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  const {
    data: allProductCategoryProducts,
    isLoading: isLoadingProductCategoryProducts,
  } = useGetOneProductCategoryWithProductsQuery(selectedCategoryId!, {
    skip: !selectedCategoryId,
  });

  useEffect(() => {
    if (search) {
      refetchAllProducts();
    }
  }, [search, refetchAllProducts]);

  useEffect(() => {
    if (allProducts) {
      setTheProducts(allProducts);
    }
  }, [allProducts]);

  useEffect(() => {
    if (allProductCategoryProducts) {
      setTheProducts(allProductCategoryProducts);
    }
  }, [allProductCategoryProducts]);

  const handleCategoryClick = (item: IProductCategory) => {
    setSelectedCategoryId(item.id);
  };

  if (isLoadingProducts)
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
            <Typography color="text.primary">Search</Typography>
          </Breadcrumbs>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#FFF",
              padding: "1rem",
            }}
          >
            <Typography
              variant="poster"
              fontSize="24px"
              fontWeight={600}
              lineHeight="19.36px"
              color="#232323"
              textAlign="left"
              sx={{
                marginBottom: "2rem",
              }}
            >
              Category
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {allProductCategories ? (
                <>
                  {allProductCategories.map((item, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        cursor: "pointer",
                      }}
                      onClick={() => handleCategoryClick(item)}
                    >
                      <Typography
                        variant="poster"
                        fontSize="16px"
                        fontWeight={500}
                        lineHeight="19.36px"
                        color="#232323"
                        textAlign="left"
                      >
                        {item.name}
                      </Typography>
                      <Divider
                        variant="fullWidth"
                        sx={{
                          height: "1px",
                          backgroundColor: "#F0F0F0",
                        }}
                      ></Divider>
                    </Box>
                  ))}
                </>
              ) : (
                <Skeleton variant="rounded" width="450px" height="100%" />
              )}
            </Box>
          </Box>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(300px, 400px))"
            gap={2}
            sx={{
              flex: 5,
              width: "100%",
              maxWidth: "100%",
            }}
          >
            {theProducts ? (
              <>
                {theProducts.map((item: any, i: number) => (
                  <SellingProduct {...item} key={i} />
                ))}
              </>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Typography
                  variant="poster"
                  fontSize="12px"
                  fontWeight={600}
                  lineHeight="14.52px"
                  color="#000"
                  textAlign="center"
                >
                  No products available
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductPage;
