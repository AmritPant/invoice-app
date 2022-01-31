import React from "react";
import { Box } from "@chakra-ui/react";
import BillTo from "./BillTo";
import BillFrom from "./BillFrom";
import ItemList from "./ItemList";
import "./InvoiceInput.scss";

function InvoiceInput() {
  return (
    <Box className="invoice-input" height="70vh" overflowY="scroll">
      <BillFrom />
      <BillTo />
      <ItemList />
    </Box>
  );
}

export default InvoiceInput;
