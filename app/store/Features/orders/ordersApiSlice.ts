"use client";

import {
  ICreateOrderResponse,
  IGetAllOrdersResponse,
  IOrder,
} from "@/app/types";
import { apiSlice } from "../../api/apiSlice";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSingleOrder: builder.query<ICreateOrderResponse, number>({
      query: (id) => ({
        url: `/order/get-one-order/${id}`,
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result, error, id) => [{ type: "orders", id }],
    }),
    confirmOrder: builder.mutation({
      query: (details) => {
        const { id, ...item } = details;
        return {
          url: `order/confirm-order/${id}`,
          method: "POST",
          body: item,
        };
      },
      invalidatesTags: [{ type: "orders", id: "LIST" }],
    }),
    getAllOrders: builder.query<IOrder[], void>({
      query: () => ({
        url: "/order-mgt/get-all-orders",
        method: "GET",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "orders" as const,
                id,
              })),
              { type: "orders", id: "LIST" },
            ]
          : [{ type: "orders", id: "LIST" }],
      transformResponse: (response: IGetAllOrdersResponse) => {
        return response.payload.orders[0];
      },
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetSingleOrderQuery,
  useConfirmOrderMutation,
  useGetAllOrdersQuery,
} = ordersApiSlice;
