"use client";

import {
  Box,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
  SvgIcon,
  Typography,
  Skeleton,
  TablePagination,
  Pagination,
} from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { circledPlusIcon } from "@/app/utils/icons";
import VideoAdminCard from "@/app/components/admin/VideoAdminCard";
import { useGetAllProductVideosQuery } from "@/app/store/Features/videos/videosApiSlice";

const VideoPage = () => {
  const router = useRouter();

  const [category, setCategory] = useState("");
  const { data: allVideos, isLoading: isLoadingVideos } =
    useGetAllProductVideosQuery();

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Box
        sx={{
          width: "95%",
          backgroundColor: "#FFF",
          height: {
            xs: "120px",
            md: "75px",
          },
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          paddingX: "1rem",
        }}
      >
        <Button
          component="label"
          variant="contained"
          tabIndex={-1}
          startIcon={
            <SvgIcon
              sx={{
                fontSize: "18px",
              }}
            >
              {circledPlusIcon()}
            </SvgIcon>
          }
          sx={{
            backgroundColor: "primary.main",
            width: {
              xs: "100%",
              md: "200px",
            },
          }}
          onClick={() => router.push("/admin/video/create")}
        >
          Add Video
        </Button>
      </Box>

      <Box
        sx={{
          width: "95%",
          backgroundColor: "#FFF",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="poster"
            fontSize="14px"
            fontWeight={600}
            lineHeight="16.94px"
            color="#000"
          >
            Videos
          </Typography>
          <Typography
            variant="poster"
            fontSize="14px"
            fontWeight={600}
            lineHeight="16.94px"
            color="#000"
          >
            See all
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "primary.main",
            height: "49px",
            borderRadius: "8px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: "1rem",
          }}
        >
          <Typography
            variant="poster"
            fontSize="14px"
            fontWeight={600}
            lineHeight="16.94px"
            color="#FFF"
          >
            Product Name
          </Typography>
          <Typography
            variant="poster"
            fontSize="14px"
            fontWeight={600}
            lineHeight="16.94px"
            color="#FFF"
          >
            Action
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          {allVideos ? (
            <>
              {allVideos.map((item, i) => (
                <VideoAdminCard {...item} key={i} />
              ))}
            </>
          ) : (
            <Skeleton variant="rounded" width={450} height="100%"></Skeleton>
          )}
        </Box>

        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            "& > .Mui-selected": {
              backgroundColor: "primary.main !important",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default VideoPage;
