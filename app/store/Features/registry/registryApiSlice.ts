"use client";

import {
  IAllProductResponse,
  IGetGuestFetchBabyRegistry,
  IGetMyRegistryResponse,
  IProduct,
  IRegistryItem,
  ISingleProductResponse,
} from "@/app/types";
import { apiSlice } from "../../api/apiSlice";

export const registryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postRegistry: builder.mutation({
      query: (details) => {
        const { productID, quantity } = details;
        return {
          url: `/baby-registry/add-item/${productID}`,
          method: "POST",
          body: { quantity },
        };
      },
      invalidatesTags: [{ type: "registry", id: "LIST" }],
    }),
    createRegistry: builder.mutation({
      query: (details) => {
        return {
          url: "/baby-registry/create",
          method: "POST",
          body: details,
        };
      },
      invalidatesTags: [{ type: "registry", id: "LIST" }],
    }),
    getMyRegistry: builder.query<IRegistryItem[], void>({
      query: () => ({
        url: `/baby-registry/fetch-my-registry`,
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "registry" as const,
                id,
              })),
              { type: "registry", id: "LIST" },
            ]
          : [{ type: "registry", id: "LIST" }],
      transformResponse: (response: IGetMyRegistryResponse) => {
        return response.payload.registry.items;
      },
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
    getGuestRegistry: builder.query<IRegistryItem[], number>({
      query: (id) => ({
        url: `baby-registry/guest-fetch-user-registry/${id}`,
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "registry" as const,
                id,
              })),
              { type: "registry", id: "LIST" },
            ]
          : [{ type: "registry", id: "LIST" }],
      transformResponse: (response: IGetGuestFetchBabyRegistry) => {
        return response.payload.paidItems;
      },
    }),
    payForRegistry: builder.mutation({
      query: (details) => {
        const { id, ...item } = details;
        return {
          url: `baby-registry/pay-for-item-in-baby-regitry/${id}`,
          method: "POST",
          body: item,
        };
      },
      invalidatesTags: [{ type: "registry", id: "LIST" }],
    }),
    // getSingleRegistryOrder: builder.query<ICreateOrderResponse, number>({
    //   query: (id) => ({
    //     url: `baby-registry/get-one-registry-order/${id}`,
    //     method: "GET",
    //     validateStatus: (response, result) => {
    //       return response.status === 200 && !result.isError;
    //     },
    //   }),
    //   providesTags: (result, error, id) => [{ type: "orders", id }],
    // }),
  }),
  overrideExisting: true,
});

export const {
  usePostRegistryMutation,
  useGetAllProductsQuery,
  useGetAllProductsNoAuthQuery,
  useGetMyRegistryQuery,
  useCreateRegistryMutation,
  useGetGuestRegistryQuery,
  usePayForRegistryMutation,
} = registryApiSlice;
