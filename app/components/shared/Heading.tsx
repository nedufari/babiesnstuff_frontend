"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Heading = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
        },
        gridTemplateRows: {
          xs: "1fr 1fr",
          md: "1fr",
        },
        gridTemplateAreas: {
          xs: `"a" "b"`,
          md: `"a b"`,
        },
        marginY: "4rem",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          gridArea: {
            xs: "a",
            md: "b",
          },
          "& > img": {
            position: "static !important",
          },
          justifySelf: {
            xs: "center",
            md: "end",
          },
          WebkitAnimation: "pulsate-bck 4s ease-in-out infinite both",
          animation: "pulsate-bck 4s ease-in-out infinite both",
          "@-webkit-keyframes pulsate-bck": {
            "0%": {
              WebkitTransform: "scale(1)",
              transform: "scale(1)",
            },
            "50%": {
              WebkitTransform: "scale(0.9)",
              transform: "scale(0.9)",
            },
            "100%": {
              WebkitTransform: "scale(1)",
              transform: "scale(1)",
            },
          },
          "@keyframes pulsate-bck": {
            "0%": {
              WebkitTransform: "scale(1)",
              transform: "scale(1)",
            },
            "50%": {
              WebkitTransform: "scale(0.9)",
              transform: "scale(0.9)",
            },
            "100%": {
              WebkitTransform: "scale(1)",
              transform: "scale(1)",
            },
          },
        }}
      >
        <Image
          src="/assets/images/baby-heading.png"
          alt="Heading baby Picture"
          fill
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        />
      </Box>

      <Box
        sx={{
          gridArea: {
            xs: "b",
            md: "a",
          },
          display: "flex",
          flexDirection: "column",
          gap: {
            xs: "0.2rem",
            md: "1rem",
          },
          justifySelf: {
            xs: "center",
            md: "start",
          },
        }}
      >
        <Typography
          fontSize="12px"
          fontWeight={600}
          lineHeight="14.63px"
          color="#000"
          sx={{
            textAlign: {
              xs: "center",
              md: "left",
            },
            fontSize: {
              xs: "10px",
              md: "12px",
            },
            WebkitAnimation: `slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both`,
            animation: `slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both`,
            "@-webkit-keyframes slide-in-left": {
              "0%": {
                WebkitTransform: "translateX(-1000px)",
                transform: "translateX(-1000px)",
                opacity: 0,
              },
              "100%": {
                WebkitTransform: "translateX(0)",
                transform: "translateX(0)",
                opacity: 1,
              },
            },
            "@keyframes slide-in-left": {
              "0%": {
                WebkitTransform: "translateX(-1000px)",
                transform: "translateX(-1000px)",
                opacity: 0,
              },
              "100%": {
                WebkitTransform: "translateX(0)",
                transform: "translateX(0)",
                opacity: 1,
              },
            },
          }}
        >
          A world of wonder awaits at Babies n stuffs
        </Typography>
        <Typography
          fontSize="70px"
          fontWeight={700}
          lineHeight="85.33px"
          color="#000"
          sx={{
            textAlign: {
              xs: "center",
              md: "left",
            },
            fontSize: {
              xs: "32px",
              md: "70px",
            },
            WebkitAnimation: `slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s both`,
            animation: `slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s both`,
            "@-webkit-keyframes slide-in-left": {
              "0%": {
                WebkitTransform: "translateX(-1000px)",
                transform: "translateX(-1000px)",
                opacity: 0,
              },
              "100%": {
                WebkitTransform: "translateX(0)",
                transform: "translateX(0)",
                opacity: 1,
              },
            },
            "@keyframes slide-in-left": {
              "0%": {
                WebkitTransform: "translateX(-1000px)",
                transform: "translateX(-1000px)",
                opacity: 0,
              },
              "100%": {
                WebkitTransform: "translateX(0)",
                transform: "translateX(0)",
                opacity: 1,
              },
            },
          }}
        >
          Little{" "}
          <Box
            component="span"
            sx={{
              color: "#FFA013",
            }}
          >
            Ones{" "}
          </Box>
          Stop
        </Typography>

        <Typography
          fontWeight={500}
          lineHeight="19.5px"
          color="#000"
          sx={{
            width: {
              xs: "100%",
              md: "465px",
            },
            textAlign: {
              xs: "center",
              md: "left",
            },
            fontSize: {
              xs: "12px",
              md: "16px",
            },
            WebkitAnimation: `slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both`,
            animation: `slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both`,
            "@-webkit-keyframes slide-in-left": {
              "0%": {
                WebkitTransform: "translateX(-1000px)",
                transform: "translateX(-1000px)",
                opacity: 0,
              },
              "100%": {
                WebkitTransform: "translateX(0)",
                transform: "translateX(0)",
                opacity: 1,
              },
            },
            "@keyframes slide-in-left": {
              "0%": {
                WebkitTransform: "translateX(-1000px)",
                transform: "translateX(-1000px)",
                opacity: 0,
              },
              "100%": {
                WebkitTransform: "translateX(0)",
                transform: "translateX(0)",
                opacity: 1,
              },
            },
          }}
        >
          Explore our comprehensive collection of baby essentials, playthings,
          and nurturing products. Where little ones come first, and every
          purchase is a celebration of their growth and happiness.
        </Typography>

        <Button
          type="button"
          variant="contained"
          sx={{
            backgroundColor: "primary.main",
            width: {
              xs: "100%",
              md: "390px",
            },
            height: "84px",
            WebkitAnimation: `slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2.5s both`,
            animation: `slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2.5s both`,
            "@-webkit-keyframes slide-in-left": {
              "0%": {
                WebkitTransform: "translateX(-1000px)",
                transform: "translateX(-1000px)",
                opacity: 0,
              },
              "100%": {
                WebkitTransform: "translateX(0)",
                transform: "translateX(0)",
                opacity: 1,
              },
            },
            "@keyframes slide-in-left": {
              "0%": {
                WebkitTransform: "translateX(-1000px)",
                transform: "translateX(-1000px)",
                opacity: 0,
              },
              "100%": {
                WebkitTransform: "translateX(0)",
                transform: "translateX(0)",
                opacity: 1,
              },
            },
          }}
          onClick={() => router.push("/shop")}
        >
          <Typography fontWeight="600" fontSize="20px" lineHeight="24.38px">
            Shop Now
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Heading;
