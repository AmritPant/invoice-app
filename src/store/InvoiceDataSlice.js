import Data from "../data.json";
import { createSlice } from "@reduxjs/toolkit";

const curInvoiceIndexGenerator = function (state, action) {
  console.log(action.payload.id);
  const curInvoiceIndex = state.data.findIndex(
    (invoice) => invoice.id === action.payload.id
  );
  return curInvoiceIndex;
};

const invoiceDataSlice = createSlice({
  name: "invoice Data",
  initialState: { data: Data },
  reducers: {
    deleteInvoice(state, action) {
      state.data = state.data.filter(
        (invoice) => invoice.id !== action.payload
      );
    },
    markAsPaid(state, action) {
      const curInvoiceIndex = curInvoiceIndexGenerator(state, action);
      state.data[curInvoiceIndex].status = "paid";
    },
    addInvoice(state, action) {
      state.data.unshift(action.payload);
    },
    editInvoice(state, action) {
      const curInvoiceIndex = curInvoiceIndexGenerator(state, action);
      state.data[curInvoiceIndex] = action.payload.data;
      console.log(state.data[curInvoiceIndex]);
    },
  },
});

export default invoiceDataSlice;
