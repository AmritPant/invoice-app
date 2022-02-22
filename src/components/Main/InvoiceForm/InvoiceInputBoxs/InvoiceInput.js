import React, { Fragment } from "react";
import { Box } from "@chakra-ui/react";
import BillTo from "./BillTo";
import BillFrom from "./BillFrom";
import ItemList from "./ItemList";
import "./InvoiceInput.scss";

function InvoiceInput({ data }) {
  return (
    <Box className="invoice-input" height="70vh" overflowY="scroll">
      {data && (
        <Fragment>
          <BillFrom data={data} />
          <BillTo data={data} />
          <ItemList data={data} />
        </Fragment>
      )}

      {!data && (
        <Fragment>
          <BillFrom />
          <BillTo />
          <ItemList />
        </Fragment>
      )}
    </Box>
  );
}

export default InvoiceInput;
