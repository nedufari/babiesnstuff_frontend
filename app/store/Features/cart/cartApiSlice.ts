"use client";

import {
  IAllProductResponse,
  ICartItem,
  IFetchCartResponse,
  IProduct,
  ISingleProductResponse,
} from "@/app/types";
import { apiSlice } from "../../api/apiSlice";

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addCart: builder.mutation({
      query: (details) => {
        const { id, ...item } = details;
        return {
          url: `/cart/add/${id}`,
          method: "POST",
          body: item,
        };
      },
      invalidatesTags: [{ type: "cart", id: "LIST" }],
    }),
    checkOutCart: builder.mutation({
      query: (details) => {
        return {
          url: `/cart/checkout`,
          method: "POST",
          body: details,
        };
      },
      invalidatesTags: [{ type: "cart", id: "LIST" }],
    }),
    getProductsInCart: builder.query<ICartItem[], void>({
      query: () => ({
        url: "cart/fetch-cart",
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "cart" as const,
                id,
              })),
              { type: "cart", id: "LIST" },
            ]
          : [{ type: "cart", id: "LIST" }],
      transformResponse: (response: IFetchCartResponse) => {
        return response.payload.items;
      },
    }),
    removeCartItem: builder.mutation({
      query: (details) => {
        return {
          url: `/cart/remove-item-from-cart/${details.id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "cart", id: "LIST" }],
    }),
    increaseProductCartQuantity: builder.mutation({
      query: (details) => {
        return {
          url: `/cart/increase-quantity/${details.id}`,
          method: "PATCH",
          body: { quantity: 1 },
        };
      },
      invalidatesTags: [{ type: "cart", id: "LIST" }],
    }),
    decreaseProductCartQuantity: builder.mutation({
      query: (details) => {
        return {
          url: `/cart/decrease-quantity/${details.id}`,
          method: "PATCH",
          body: { quantity: 1 },
        };
      },
      invalidatesTags: [{ type: "cart", id: "LIST" }],
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddCartMutation,
  useGetProductsInCartQuery,
  useCheckOutCartMutation,
  useRemoveCartItemMutation,
  useIncreaseProductCartQuantityMutation,
  useDecreaseProductCartQuantityMutation,
} = cartApiSlice;
