"use client";

import React, { useEffect } from "react";
import YouMayLike from "@/app/components/shared/YouMayLike";
import {
  Box,
  Container,
  Breadcrumbs,
  Typography,
  SvgIcon,
  Skeleton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useGetProductsInCartQuery } from "../store/Features/cart/cartApiSlice";
import { backIcon, dashedDownIcon, downIcon } from "../utils/icons";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

const CartPage = () => {
  const router = useRouter();

  const {
    data: cartProducts,
    isLoading: isLoadingProducts,
    refetch,
  } = useGetProductsInCartQuery();
  useEffect(() => {
    refetch();
  }, []);

  console.log({ cartProducts });

  let numb: { price: number; tax: number }[] = [];

  if (cartProducts && cartProducts.length > 0) {
    for (let i = 0; i < cartProducts.length; i++) {
      numb.push({
        price: Number(cartProducts[i].price) * cartProducts[i].quantity,
        tax: Number(cartProducts[i].product.taxRate),
      });
    }
  }

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
              color: "#3C3C3C",
              "& li > a": {
                textDecoration: "none",
                color: "#3C3C3C",
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
              <SvgIcon>{backIcon()}</SvgIcon>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#397F98",
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
        >
          <Box
            sx={{
              flex: 2,
            }}
          >
            <Accordion
              sx={{
                "& .MuiAccordionDetails-root": {
                  padding: "unset",
                },
              }}
              expanded={true}
            >
              <AccordionSummary
                expandIcon={<SvgIcon>{dashedDownIcon()}</SvgIcon>}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>
                  Cart ({cartProducts && cartProducts.length})
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  {cartProducts ? (
                    <Box>
                      {cartProducts.map((item, i) => (
                        <CartItem {...item} key={i} refetch={refetch} />
                      ))}
                    </Box>
                  ) : (
                    <Skeleton
                      variant="rounded"
                      width="100%"
                      height={400}
                    ></Skeleton>
                  )}
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>

          <CartSummary numb={numb} isOrder="checkout" shippinFee={null} />
        </Box>
        <YouMayLike />
        <YouMayLike />
      </Container>
    </Box>
  );
};

export default CartPage;
