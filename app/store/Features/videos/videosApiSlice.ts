"use client";

import { IAllVideosResponse, IVideo } from "@/app/types";
import { apiSlice } from "../../api/apiSlice";

export const videosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postProductVideos: builder.mutation({
      query: (details) => {
        return {
          url: "/product-mgt/upload-product-video",
          method: "POST",
          body: details,
        };
      },
      invalidatesTags: [{ type: "videos", id: "LIST" }],
    }),
    getAllProductVideos: builder.query<IVideo[], void>({
      query: () => ({
        url: "/product-mgt/fetch-all-videos",
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "videos" as const,
                id,
              })),
              { type: "videos", id: "LIST" },
            ]
          : [{ type: "videos", id: "LIST" }],
      transformResponse: (response: IAllVideosResponse) => {
        return response.payload.videos[0];
      },
    }),
    getAllProductVideosNoAuth: builder.query<IVideo[], void>({
      query: () => ({
        url: "/browse/fetch-all-videos",
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "videos" as const,
                id,
              })),
              { type: "videos", id: "LIST" },
            ]
          : [{ type: "videos", id: "LIST" }],
      transformResponse: (response: IAllVideosResponse) => {
        return response.payload.videos[0];
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  usePostProductVideosMutation,
  useGetAllProductVideosQuery,
  useGetAllProductVideosNoAuthQuery,
} = videosApiSlice;
