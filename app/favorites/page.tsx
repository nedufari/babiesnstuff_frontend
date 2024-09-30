"use client";

import {
  Box,
  Container,
  Accordion,
  AccordionSummary,
  SvgIcon,
  Typography,
  AccordionDetails,
  Skeleton,
} from "@mui/material";
import React, { useEffect } from "react";
import { dashedDownIcon } from "../utils/icons";
import { useRouter } from "next/navigation";
import { useGetAllFavoritesQuery } from "../store/Features/favorite/favoritesApiSlice";
import FavoriteItem from "../components/favorite/FavoriteItem";

const RegistryPage = () => {
  const router = useRouter();

  const {
    data: allFavorites,
    isLoading: isLoadingFavorites,
    refetch,
  } = useGetAllFavoritesQuery();

  useEffect(() => {
    refetch();
  }, []);

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
            display: "flex",
            gap: "2rem",
            marginBottom: "2rem",
            width: "100%",
          }}
        >
          <Accordion
            sx={{
              "& .MuiAccordionDetails-root": {
                padding: "unset",
              },
              width: "100%",
            }}
            expanded={true}
          >
            <AccordionSummary
              expandIcon={<SvgIcon>{dashedDownIcon()}</SvgIcon>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                variant="poster"
                fontWeight="600"
                fontSize="24px"
                lineHeight="48px"
              >
                Favorites ({allFavorites?.length || 0})
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                {allFavorites ? (
                  <>
                    {allFavorites.map((item, i) => (
                      <FavoriteItem {...item} key={i} />
                    ))}
                  </>
                ) : (
                  <Skeleton variant="rounded" width="450px" height="100%" />
                )}
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
};

export default RegistryPage;
