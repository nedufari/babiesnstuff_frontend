"use client";

import {
  IAllProductResponse,
  IGetAllProductsSearchResponse,
  IProduct,
  ISingleProductResponse,
} from "@/app/types";
import { apiSlice } from "../../api/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postProduct: builder.mutation({
      query: (details) => {
        return {
          url: "/product-mgt/new-product",
          method: "POST",
          body: details,
        };
      },
      invalidatesTags: [{ type: "products", id: "LIST" }],
    }),
    getAllProducts: builder.query<IProduct[], void>({
      query: () => ({
        url: "/product-mgt/fetch-all-products",
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "products" as const,
                id,
              })),
              { type: "products", id: "LIST" },
            ]
          : [{ type: "products", id: "LIST" }],
      transformResponse: (response: IAllProductResponse) => {
        return response.payload.products[0];
      },
    }),
    getAllProductsNoAuth: builder.query<IProduct[], void>({
      query: () => ({
        url: "/browse/fetch-all-products",
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "products" as const,
                id,
              })),
              { type: "products", id: "LIST" },
            ]
          : [{ type: "products", id: "LIST" }],
      transformResponse: (response: IAllProductResponse) => {
        return response.payload.products[0];
      },
    }),
    getSingleProductNoAuth: builder.query<ISingleProductResponse, number>({
      query: (id) => ({
        url: `/browse/fetch-one-product/${id}`,
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result, error, id) => [{ type: "products", id }],
    }),
    getAllSearchProducts: builder.query<IProduct[], any>({
      query: (id) => ({
        url: `browse/search-product?keyword=${id}`,
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "products" as const,
                id,
              })),
              { type: "products", id: "LIST" },
            ]
          : [{ type: "products", id: "LIST" }],
      transformResponse: (response: IGetAllProductsSearchResponse) => {
        return response.payload.data;
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `product-mgt/take-down-product/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "products", id: "LIST" }],
    }),
  }),
  overrideExisting: true,
});

export const {
  usePostProductMutation,
  useGetAllProductsQuery,
  useGetAllProductsNoAuthQuery,
  useGetSingleProductNoAuthQuery,
  useGetAllSearchProductsQuery,
  useDeleteProductMutation,
} = productsApiSlice;
