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
  Breadcrumbs,
  Button,
} from "@mui/material";
import React, { useEffect } from "react";
import { backIcon, dashedDownIcon } from "../utils/icons";
import { useRouter } from "next/navigation";
import { useGetMyRegistryQuery } from "../store/Features/registry/registryApiSlice";
import RegistryItem from "../components/registry/RegistryItem";
import CopyToClipboard from "react-copy-to-clipboard";
import { useGetUserProfileQuery } from "../store/Features/auth/authApiSlice";
import { toast } from "react-toastify";
import IosShareIcon from "@mui/icons-material/IosShare";

const RegistryPage = () => {
  const router = useRouter();

  const {
    data: allRegistry,
    isLoading: isLoadingRegistry,
    refetch,
  } = useGetMyRegistryQuery();

  const { data: userProfile, isLoading: isUserProfile } =
    useGetUserProfileQuery();

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
          role="presentation"
          sx={{
            marginBottom: "4rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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

          <CopyToClipboard
            text={`https://babiesnstuffs.com/baby-registry/${userProfile?.payload?.user?.id}`}
            onCopy={(e, t) => toast.info("Baby registry link copied")}
          >
            <Button
              component="label"
              variant="contained"
              tabIndex={-1}
              sx={{
                textTransform: "capitalize",
                fontSize: "14px",
                fontWeight: 400,
              }}
              color="primary"
              startIcon={<IosShareIcon />}
            >
              Share
            </Button>
          </CopyToClipboard>
        </Box>
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
                Registry Items ({allRegistry?.length || 0})
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                {allRegistry ? (
                  <>
                    {allRegistry.map((item, i) => (
                      <RegistryItem {...item} key={i} checked={false} />
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
