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

export const ThemeSlice = createSlice({
  name: "theme",
  initialState: { curTheme: "light" },
  reducers: {
    setCurTheme(state, action) {
      state.curTheme = action.payload;
    },
  },
});

export const ProfileSlice = createSlice({
  name: "profile",
  initialState: { profileStatus: false },
  reducers: {
    setProfileStatus(state, action) {
      state.profileStatus = action.payload;
    },
  },
});
