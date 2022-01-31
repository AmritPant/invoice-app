import { Flex } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import InvoicePageHeader from "./InvoicePageHeader";
import InovoicePageDetail from "./InovoicePageDetail";
import Data from "../data.json";

function InvoicePage() {
  const params = useParams();
  const ClickedInvoice = Data.filter(
    (invoice) => invoice.id === params.invoiceId
  ).at(0);

  console.log(ClickedInvoice);

  return (
    <Flex flex="0.9" flexDir="column" alignItems="center" pt="4rem">
      <InvoicePageHeader status={ClickedInvoice.status} />
      <InovoicePageDetail data={ClickedInvoice} />
    </Flex>
  );
}

export default InvoicePage;
