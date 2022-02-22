import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Invoice from "./Invoice";
import NoInvoice from "./NoInvoice";
import FilterInvoiceContext from "../../../contexts/FilterInvoice";

function Invoices() {
  const InvoiceData = useSelector((state) => state.invoice.data);

  let Data;
  const InvoiceCtx = useContext(FilterInvoiceContext);
  if (
    InvoiceCtx.inputEls.length > 0 &&
    InvoiceCtx.inputEls.every((inputEl) => inputEl.current)
  ) {
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
