import { ItrendingProducts } from "@/app/types";
import { shoppingBag } from "@/app/utils/icons";
import { Box, SvgIcon, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const TrendingProductCard: React.FC<ItrendingProducts> = ({
  img,
  title,
  price,
}) => {
  return (
    <Box
      sx={{
        width: { xs: "170px", md: "280px" },
        height: { xs: "240px", md: "300px" },
        borderRadius: "20px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            "& > img": {
              position: "static !important",
            },
            width: { xs: "165px", md: "238px" },
            height: { xs: "134px", md: "177px" },
            borderRadius: "20px",
          }}
        >
          <Image
            src={img}
            alt="Heading baby Picture"
            fill
            sizes="100vw"
            style={{
              objectFit: "contain"
            }} />
        </Box>

        <Typography
          fontWeight={600}
          lineHeight="18.29px"
          color="#000"
          sx={{
            fontSize: {
              xs: "12px",
              md: "15px",
            },
            alignSelf: "center",
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Typography
            fontWeight={600}
            lineHeight="19.5px"
            color="#000"
            sx={{
              fontSize: {
                xs: "16px",
                md: "24px",
              },
            }}
          >
            ₦{price}
          </Typography>

          <Box
            sx={{
              width: "30px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F4F4F4",
              borderRadius: "50%",
            }}
          >
            <SvgIcon
              sx={{
                height: "17px",
                width: "14px",
              }}
            >
              {shoppingBag()}
            </SvgIcon>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TrendingProductCard;
