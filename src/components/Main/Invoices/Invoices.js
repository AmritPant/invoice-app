import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import Invoice from "./Invoice";
import InvoiceData from "../../../data.json";
import NoInvoice from "./NoInvoice";
import FilterInvoiceContext from "../../../contexts/FilterInvoice";
import { Link } from "react-router-dom";

function Invoices() {
  let Data;
  const InvoiceCtx = useContext(FilterInvoiceContext);
  if (InvoiceCtx.inputEls.length > 0) {
    const checkedInput = InvoiceCtx.inputEls
      .filter((input) => input.current.checked === true)
      .at(0);
    if (!checkedInput) {
      Data = InvoiceData;
    } else {
      Data = InvoiceData.filter(
        (invoice) => invoice.status === checkedInput.current.id
      );
    }
  } else {
    Data = InvoiceData;
  }

  return (
    <Box mt="5rem">
      {Data.length > 0 ? (
        Data.map((invoiceData) => {
          return (
            <Link to={`/invoices/${invoiceData.id}`} key={invoiceData.id}>
              <Invoice
                id={invoiceData.id}
                dueDate={invoiceData.paymentDue}
                clientName={invoiceData.clientName}
                status={invoiceData.status}
                price={invoiceData.total}
              />
            </Link>
          );
        })
      ) : (
        <NoInvoice />
      )}
    </Box>
  );
}

export default Invoices;
