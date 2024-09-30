"use client";

import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  itemIds: null,
  userId: null,
  numb: null,
};

const registrySlice = createSlice({
  name: "registryIds",
  initialState,
  reducers: {
    addItemIds: (state, action) => {
      const { itemIds } = action.payload;
      state.itemIds = itemIds;
    },
    removeItemIds: (state, action) => {
      state.itemIds = null;
    },
    addUserId: (state, action) => {
      const { id } = action.payload;
      state.userId = id;
    },
    removeUserId: (state, action) => {
      state.userId = null;
    },
    addNumb: (state, action) => {
      const { numb } = action.payload;
      state.numb = numb;
    },
    removeNumb: (state, action) => {
      state.numb = null;
    },
  },
});

export const {
  addItemIds,
  removeItemIds,
  addUserId,
  removeUserId,
  addNumb,
  removeNumb,
} = registrySlice.actions;

export default registrySlice.reducer;
