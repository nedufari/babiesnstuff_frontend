"use client";

import { Box, Container, Skeleton } from "@mui/material";
import React from "react";
import Nav from "../components/shared/Nav";
import Heading from "../components/shared/Heading";
import { videoPageData } from "../utils/dummyData";
import VideoCard from "../components/videos/VideoCard";
import BigVideoCard from "../components/videos/BigVideoCard";
import { useGetAllProductVideosNoAuthQuery } from "../store/Features/videos/videosApiSlice";

const VideosPage = () => {
  const { data: allVideos, isLoading: isLoadingVideos } =
    useGetAllProductVideosNoAuthQuery();

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
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Nav />
        </Box>

        <Heading />

        <Box
          component="section"
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap={2}
          sx={{
            marginTop: "6rem",
          }}
        >
          {allVideos ? (
            <>
              {allVideos.map((item, i) => (
                <VideoCard {...item} key={i} />
              ))}
            </>
          ) : (
            <Skeleton variant="rounded" width={450} height="100%"></Skeleton>
          )}
        </Box>

        {/* <Box
          component="section"
          sx={{
            gap: "1rem",
            display: "flex",
            flexWrap: "wrap",
            marginTop: "4rem",
          }}
        >
          {videoPageData.slice(0, 2).map((item, i) => (
            <BigVideoCard {...item} key={i} />
          ))}
        </Box> */}

        <Box
          component="section"
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap={2}
          sx={{
            marginTop: "2rem",
          }}
        >
          {allVideos ? (
            <>
              {allVideos.slice(0, 3).map((item, i) => (
                <VideoCard {...item} key={i} />
              ))}
            </>
          ) : (
            <Skeleton variant="rounded" width={450} height="100%"></Skeleton>
          )}
        </Box>

        <Box
          component="section"
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          gap={2}
          sx={{
            marginTop: "4rem",
          }}
        >
          {allVideos ? (
            <>
              {allVideos.slice(0, 2).map((item, i) => (
                <VideoCard {...item} key={i} />
              ))}
            </>
          ) : (
            <Skeleton variant="rounded" width={450} height="100%"></Skeleton>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default VideosPage;
