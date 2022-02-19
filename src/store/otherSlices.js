import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
  name: "Modal Slice",
  initialState: { modalStatus: false },
  reducers: {
    setModalStatus(state, action) {
      state.modalStatus = action.payload;
    },
  },
});

export const FilterInvoicesSlice = createSlice({
  name: "Filter Slice",
  initialState: [{ checked: false }, { checked: false }, { checked: false }],
  reducers: {
    setFilterInvoicesStatus(state, action) {
      state = action.payload;
    },
  },
});

export const ModalPopupSlice = createSlice({
  name: "Modal Popul",
  initialState: { modalPopupStatus: false },
  reducers: {
    setModalPopupStatus(state, action) {
      state.modalPopupStatus = action.payload;
    },
  },
});
