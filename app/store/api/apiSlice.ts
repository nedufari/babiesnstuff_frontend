"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token;
    const guestId = state.auth.guestId;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [
    "admins",
    "products",
    "productsCategory",
    "videos",
    "cart",
    "orders",
    "registry",
    "users",
    "favorite",
  ],
  endpoints: (builder) => ({}),
});
