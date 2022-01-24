import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Invoice from "./Invoice";
import Data from "../../../data.json";

function Invoices() {
  return (
    <Box mt="5rem">
      {Data.map((invoiceData) => {
        return (
          <Invoice
            key={invoiceData.id}
            id={invoiceData.id}
            dueDate={invoiceData.paymentDue}
            clientName={invoiceData.clientName}
            status={invoiceData.status}
            price={invoiceData.total}
          />
        );
      })}
    </Box>
  );
}

export default Invoices;
