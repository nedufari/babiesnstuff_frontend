import { IOffer } from "@/app/types";
import { Box, Divider, Typography, Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const OfferCard: React.FC<IOffer> = ({ img, text }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr",
        width: { xs: "100%", md: "550px" },
        height: "205px",
        backgroundColor: "#FFF",
        padding: "0.5rem",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          "& > img": {
            position: "static !important",
          },
        }}
      >
        <Image
          src={img}
          alt="Special offer"
          fill
          sizes="100vw"
          style={{
            objectFit: "contain"
          }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Divider
              sx={{
                width: "73px",
                borderColor: "#0C0C0C",
                marginY: "auto",
              }}
            />
            <Typography
              variant="poster"
              lineHeight="14.4px"
              color="#397F98"
              sx={{
                fontWeight: 500,
                fontSize: "12px",
              }}
            >
              Special Offer
            </Typography>
          </Box>
          <Typography
            variant="poster"
            lineHeight="24.2px"
            color="#000000"
            sx={{
              fontWeight: 500,
              fontSize: "20px",
            }}
            textTransform="uppercase"
          >
            {text}’s clothes
          </Typography>
          <Typography
            variant="poster"
            lineHeight="14.52px"
            color="#6D6D6D"
            sx={{
              fontWeight: 500,
              fontSize: "12px",
            }}
          >
            Best pant & shirts discount 35% off
          </Typography>
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
            width: "118px",
          }}
        >
          <Typography
            fontWeight="600"
            fontSize="16px"
            textAlign="center"
            lineHeight="32px"
            sx={{
              background: `linear-gradient(to right, #397F98 0%, #FFA013 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            shop now
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default OfferCard;
