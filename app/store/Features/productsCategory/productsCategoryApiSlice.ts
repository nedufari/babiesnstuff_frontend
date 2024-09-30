"use client";

import {
  IAllProductCategoriesResponse,
  IGetOneProductCategoryWithProducts,
  IProduct,
  IProductCategory,
} from "@/app/types";
import { apiSlice } from "../../api/apiSlice";

export const productsCategoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProductCategories: builder.query<IProductCategory[], void>({
      query: () => ({
        url: "/product-mgt/fetch-all-product-category",
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "productsCategory" as const,
                id,
              })),
              { type: "productsCategory", id: "LIST" },
            ]
          : [{ type: "productsCategory", id: "LIST" }],
      transformResponse: (response: IAllProductCategoriesResponse) => {
        return response.payload.categories[0];
      },
    }),
    getAllProductCategoriesNoAuth: builder.query<IProductCategory[], void>({
      query: () => ({
        url: "/browse/fetch-all-product-categories",
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "productsCategory" as const,
                id,
              })),
              { type: "productsCategory", id: "LIST" },
            ]
          : [{ type: "productsCategory", id: "LIST" }],
      transformResponse: (response: IAllProductCategoriesResponse) => {
        return response.payload.categories[0];
      },
    }),
    getOneProductCategoryWithProducts: builder.query<IProduct[], number>({
      query: (id) => ({
        url: `browse/fetch-one-product-category-with-products/${id}`,
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result, error, id) => [{ type: "productsCategory", id }],
      transformResponse: (response: IGetOneProductCategoryWithProducts) => {
        return response.payload.categories[0][0].products;
      },
    }),
    postProductCategory: builder.mutation({
      query: (details) => {
        return {
          url: "/product-mgt/new-product-category",
          method: "POST",
          body: details,
        };
      },
      invalidatesTags: [{ type: "productsCategory", id: "LIST" }],
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetAllProductCategoriesQuery,
  useGetAllProductCategoriesNoAuthQuery,
  useGetOneProductCategoryWithProductsQuery,
  usePostProductCategoryMutation,
} = productsCategoryApiSlice;
