"use client";

import { IAllFavoriteResponse, IFavorite } from "@/app/types";
import { apiSlice } from "../../api/apiSlice";

export const favoritesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addFavorite: builder.mutation({
      query: (details) => {
        const { id, ...item } = details;
        return {
          url: `browse/add-product-to-favourite/${id}`,
          method: "POST",
          body: item,
        };
      },
      invalidatesTags: [{ type: "favorite", id: "LIST" }],
    }),
    getAllFavorites: builder.query<IFavorite[], void>({
      query: () => ({
        url: "browse/all-myFavourite-products",
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "favorite" as const,
                id,
              })),
              { type: "favorite", id: "LIST" },
            ]
          : [{ type: "favorite", id: "LIST" }],
      transformResponse: (response: IAllFavoriteResponse) => {
        return response.payload.fav[0];
      },
    }),
    removeFavorite: builder.mutation({
      query: (details) => {
        return {
          url: `browse/remove-product-from-favourites/${details.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "favorite", id: "LIST" }],
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddFavoriteMutation,
  useGetAllFavoritesQuery,
  useRemoveFavoriteMutation,
} = favoritesApiSlice;
