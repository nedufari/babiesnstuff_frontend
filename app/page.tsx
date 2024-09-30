"use client";

import { Typography, Box, Container, Button } from "@mui/material";
import Layout from "./components/shared/Layout";
import Nav from "./components/shared/Nav";
import { serviceData, trendingProducts } from "./utils/data";
import ServiceCard from "./components/home/ServiceCard";
import Heading from "./components/shared/Heading";
import TrendingProductCard from "./components/home/TrendingProductCard";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
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

          <Heading />

          <Box component="section">
            <Typography
              fontWeight={600}
              fontSize="20px"
              lineHeight="24.38px"
              color="#000"
              marginBottom="2rem"
            >
              Best Services
            </Typography>

            <Box
              sx={{
                "& > .mySwiper": {},
              }}
            >
              <Swiper
                className="mySwiper"
                slidesPerView={1}
                spaceBetween={2}
                autoplay={{
                  delay: 3000,
                }}
                loop
                modules={[Autoplay]}
                breakpoints={{
                  600: {
                    slidesPerView: 2,
                    spaceBetween: 2,
                  },
                  900: {
                    slidesPerView: 4,
                    spaceBetween: 4,
                  },
                }}
              >
                {serviceData.map((item, i) => (
                  <SwiperSlide key={i}>
                    <ServiceCard {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <Button
                type="button"
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "secondary.main",
                  textTransform: "capitalize",
                  width: {
                    xs: "100%",
                    md: "311px",
                  },
                  height: "60px",
                }}
                onClick={() => router.push("/shop")}
              >
                <Typography
                  fontWeight="600"
                  fontSize="16px"
                  lineHeight="19.5px"
                >
                  Shop Product Now
                </Typography>
              </Button>
            </Box>
          </Box>

          <Box
            component="section"
            sx={{
              marginTop: "6rem",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gridTemplateRows: {
                xs: "1fr 0.5fr",
                md: "1fr",
              },
              gridTemplateAreas: {
                xs: `"a" "b"`,
                md: `"a b"`,
              },
              alignItems: {
                xs: "start",
                md: "center",
              },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                gridArea: "a",
                justifySelf: "center",
              }}
            >
              <Box
                sx={{
                  "& > img": {
                    position: "static !important",
                  },
                  width: { xs: "330px", md: "450px" },
                  height: { xs: "330px", md: "450px" },
                  borderRadius: "100px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/assets/images/baby-holder.jpg"
                  alt="Pampers"
                  fill
                  sizes="100%"
                  style={{
                    objectFit: "cover",
                    borderRadius: "100px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  "& > img": {
                    position: "relative !important",
                  },
                  width: { xs: "150px", md: "270px" },
                  height: { xs: "200px", md: "250px" },
                  top: { xs: "-6rem", md: "-4rem" },
                  left: { xs: "4rem", md: "-4rem" },
                  position: "relative ",
                  borderRadius: "100px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/assets/images/baby-oil.jpg"
                  alt="Diaper"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    borderRadius: "100px",
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: {
                  xs: "1rem",
                  md: "3rem",
                },
                gridArea: "b",
              }}
            >
              <Typography
                fontWeight={600}
                lineHeight="14.63px"
                sx={{
                  fontSize: {
                    xs: "10px",
                    md: "12px",
                  },
                }}
              >
                Diapers
              </Typography>

              <Typography
                fontSize="70px"
                fontWeight={700}
                lineHeight="85.33px"
                color="#000"
                sx={{
                  fontSize: {
                    xs: "32px",
                    md: "70px",
                  },
                }}
              >
                Pampers Pants{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#FFA013",
                  }}
                >
                  3 in 1{" "}
                </Box>
              </Typography>

              <Typography
                fontWeight={500}
                lineHeight="19.5px"
                sx={{
                  fontSize: {
                    xs: "10px",
                    md: "16px",
                  },
                }}
              >
                Pampers pants 3 in 1 for your baby from 3 months and above
              </Typography>

              <Button
                type="button"
                variant="contained"
                sx={{
                  backgroundColor: "primary.main",
                  textTransform: "capitalize",
                  width: {
                    xs: "100%",
                    md: "390px",
                  },
                  height: "60px",
                }}
                onClick={() => router.push("/shop")}
              >
                <Typography
                  fontWeight="600"
                  fontSize="20px"
                  lineHeight="24.38px"
                >
                  Buy Now
                </Typography>
              </Button>
            </Box>
          </Box>

          <Box
            component="section"
            sx={{
              marginTop: "6rem",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gridTemplateRows: {
                xs: "1fr 0.5fr",
                md: "1fr",
              },
              gridTemplateAreas: {
                xs: `"b" "a"`,
                md: `"a b"`,
              },
              alignItems: {
                xs: "start",
                md: "center",
              },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: {
                  xs: "1rem",
                  md: "3rem",
                },
                gridArea: "a",
              }}
            >
              <Typography
                fontWeight={600}
                lineHeight="14.63px"
                sx={{
                  fontSize: {
                    xs: "10px",
                    md: "12px",
                  },
                }}
              >
                Videos
              </Typography>

              <Typography
                fontSize="70px"
                fontWeight={700}
                lineHeight="85.33px"
                color="#000"
                sx={{
                  fontSize: {
                    xs: "32px",
                    md: "70px",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "#FFA013",
                  }}
                >
                  Video content{" "}
                </Box>
                of our Products
              </Typography>

              <Typography
                fontWeight={500}
                lineHeight="19.5px"
                sx={{
                  fontSize: {
                    xs: "10px",
                    md: "16px",
                  },
                }}
              >
                Watch videos to see the live product and know what you are
                buying
              </Typography>

              <Button
                type="button"
                variant="contained"
                sx={{
                  backgroundColor: "primary.main",
                  textTransform: "capitalize",
                  width: {
                    xs: "100%",
                    md: "390px",
                  },
                  height: "60px",
                }}
                onClick={() => router.push("/videos")}
              >
                <Typography
                  fontWeight="600"
                  fontSize="20px"
                  lineHeight="24.38px"
                >
                  View Videos
                </Typography>
              </Button>
            </Box>

            <Box
              sx={{
                position: "relative",
                gridArea: "b",
                justifySelf: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Box
                sx={{
                  "& > img": {
                    position: "static !important",
                  },
                  width: { xs: "330px", md: "450px" },
                  height: { xs: "330px", md: "450px" },
                  borderRadius: "100px",
                }}
              >
                <Image
                  src="/assets/images/holding-baby.png"
                  alt="Pampers"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Box>

              <Box
                sx={{
                  "& > img": {
                    position: "relative !important",
                  },
                  width: { xs: "150px", md: "270px" },
                  height: { xs: "200px", md: "250px" },
                  borderRadius: "100px",
                  top: { xs: "-6rem", md: "-4rem" },
                  position: "relative ",
                }}
              >
                <Image
                  src="/assets/images/oil.png"
                  alt="Diaper"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: "4rem",
            }}
          >
            <Typography
              fontWeight={600}
              lineHeight="14.63px"
              textAlign="center"
              sx={{
                fontSize: {
                  xs: "10px",
                  md: "12px",
                },
                marginBottom: "2rem",
              }}
            >
              Make a purchase now
            </Typography>

            <Typography
              fontSize="70px"
              fontWeight={700}
              lineHeight="85.33px"
              color="#000"
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: "32px",
                  md: "70px",
                },
              }}
            >
              Our Trending
              <Box
                component="span"
                sx={{
                  color: "#FFA013",
                }}
              >
                Products
              </Box>
            </Typography>

            <Box
              sx={{
                // display: "flex",
                // flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "4rem",
                // justifyContent: {
                //   xs: "center",
                //   md: "space-around",
                // },
              }}
            >
              <Swiper
                className="mySwiper"
                slidesPerView={1}
                spaceBetween={2}
                autoplay={{
                  delay: 3000,
                }}
                loop
                modules={[Autoplay]}
                breakpoints={{
                  600: {
                    slidesPerView: 2,
                    spaceBetween: 2,
                  },
                  900: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                  },
                }}
              >
                {trendingProducts.map((item, i) => (
                  <SwiperSlide key={i}>
                    <TrendingProductCard {...item} key={i} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2rem",
              }}
            >
              <Button
                type="button"
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "secondary.main",
                  textTransform: "capitalize",
                  width: {
                    xs: "100%",
                    md: "311px",
                  },
                  height: "60px",
                }}
                onClick={() => router.push("/shop")}
              >
                <Typography
                  fontWeight="600"
                  fontSize="16px"
                  lineHeight="19.5px"
                >
                  View All Products
                </Typography>
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
