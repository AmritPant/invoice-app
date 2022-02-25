import { configureStore } from "@reduxjs/toolkit";
import invoiceDataSlice from "./InvoiceDataSlice";
import FormSlice from "./FormSlice";
import {
  ModalSlice,
  FilterInvoicesSlice,
  ModalPopupSlice,
  ThemeSlice,
} from "./otherSlices";

const store = configureStore({
  reducer: {
    form: FormSlice.reducer,
    modal: ModalSlice.reducer,
    filter: FilterInvoicesSlice.reducer,
    popup: ModalPopupSlice.reducer,
    invoice: invoiceDataSlice.reducer,
    theme: ThemeSlice.reducer,
  },
});

export const FormSliceActions = FormSlice.actions;
export const ModalSliceActions = ModalSlice.actions;
export const FilterInvoiceActions = FilterInvoicesSlice.actions;
export const ModalPopupActions = ModalPopupSlice.actions;
export const invoiceDataActions = invoiceDataSlice.actions;
export const ThemeSliceActions = ThemeSlice.actions;

export default store;
