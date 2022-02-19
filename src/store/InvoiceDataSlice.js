import Data from "../data.json";
import { createSlice } from "@reduxjs/toolkit";

const invoiceDataSlice = createSlice({
  name: "invoice Data",
  initialState: { data: Data },
  reducers: {
    deleteInvoice(state, action) {
      state.data = state.data.filter(invoice => invoice.id !== action.payload);
    },
    markAsPaid(state, action) {
      const curInvoiceIndex = state.data.findIndex(
        invoice => invoice.id === action.payload
      );
      state.data[curInvoiceIndex].status = "paid";
    },
    addInvoice(state, action) {
      state.data.unshift(action.payload);
    },
  },
});

export default invoiceDataSlice;
