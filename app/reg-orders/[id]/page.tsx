"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Box, Container, Typography, Skeleton } from "@mui/material";
import { useGetSingleOrderQuery } from "@/app/store/Features/orders/ordersApiSlice";
import OrderItem from "@/app/components/orders/OrderItem";
import { BeatLoader } from "react-spinners";

const TheOrdersPages = () => {
  const { id } = useParams();

  const { data: singleOrder, isLoading: isLoadingSingleOrder } =
    useGetSingleOrderQuery(Number(id));

  if (isLoadingSingleOrder)
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

  if (!singleOrder || !singleOrder.success)
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
            Order not found
          </Typography>
        </Container>
      </Box>
    );

  let totalDisplay = [
    {
      title: "Subtotal",
      value: singleOrder?.payload?.order?.subTotal,
    },
    {
      title: "Discount",
      value: 0,
    },
    {
      title: "Total",
      value: singleOrder?.payload?.order?.total,
    },
  ];

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
          sx={{
            backgroundColor: "#FFF",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "75%",
              }}
            ></Box>
          </Box>

          <Typography
            variant="poster"
            color="#000"
            fontWeight="600"
            fontSize="20px"
            lineHeight="40px"
            sx={{
              marginBottom: "2rem",
            }}
          >
            Order Summary
          </Typography>
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "primary.main",
                paddingLeft: "1rem",
              }}
            >
              <Typography
                variant="poster"
                color="#FFF"
                fontWeight="600"
                fontSize="20px"
                lineHeight="40px"
                sx={{
                  flex: 5,
                }}
              >
                Product
              </Typography>
              <Typography
                variant="poster"
                color="#FFF"
                fontWeight="600"
                fontSize="20px"
                lineHeight="40px"
                sx={{
                  flex: 1,
                }}
              >
                Qty
              </Typography>
              <Typography
                variant="poster"
                color="#FFF"
                fontWeight="600"
                fontSize="20px"
                lineHeight="40px"
                sx={{
                  flex: 1,
                }}
              >
                Price
              </Typography>
            </Box>

            <Box>
              {singleOrder?.payload?.order?.items.length > 0 ? (
                <>
                  {singleOrder?.payload?.order?.items.map((item, i) => (
                    <OrderItem {...item} key={i} />
                  ))}
                </>
              ) : (
                <Skeleton variant="rounded" width="450px" height="100%" />
              )}
            </Box>

            <Box>
              {totalDisplay.map((item, i) => (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    paddingLeft: "2rem",
                    paddingY: "1rem",
                  }}
                  key={i}
                >
                  <Typography
                    variant="poster"
                    color="#000"
                    fontWeight="500"
                    fontSize="20px"
                    lineHeight="24.2px"
                    sx={{ flex: 5 }}
                  >
                    {item.title}
                  </Typography>

                  <Box sx={{ flex: 1 }}></Box>
                  <Typography
                    variant="poster"
                    color="#000"
                    fontWeight="500"
                    fontSize="20px"
                    lineHeight="24.2px"
                    sx={{ flex: 1 }}
                  >
                    ₦{item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TheOrdersPages;
