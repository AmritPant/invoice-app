import React from "react";
import { useSelector } from "react-redux";
import { Flex, Heading, Box, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import InvoicePageHeader from "./InvoicePageHeader";
import InovoicePageDetail from "./InovoicePageDetail";
import ModalPopup from "../components/Extra/ModalPopup";
import InvoiceForm from "../components/Main/InvoiceForm/InvoiceForm";

function InvoicePage() {
  const ModalPopupStatus = useSelector((state) => state.popup.modalPopupStatus);
  const Data = useSelector((state) => state.invoice.data);
  const InvoiceFormStatus = useSelector((state) => state.form.formStatus);

  const params = useParams();

  const ClickedInvoice = Data.filter(
    (invoice) => invoice.id === params.invoiceId
  ).at(0);

  if (!ClickedInvoice) {
    document.title = "Invoice not Found 😥";
    return (
      <Box
        position="absolute"
        transform="translate(-25% , -25%)"
        top="50%"
        left="50%"
        fontSize="1.5rem"
      >
        <Heading>Your Requested Invoice Not Found 😥 (Error: 404)</Heading>;
        <Heading>May be Next Time You find Your Invoice Who Knows? :D </Heading>
        <Heading color="orangered">
          Note: websitelink.com/invoices/id , Might be wrong id 😎 ? recheck it
          now
        </Heading>
        ;
      </Box>
    );
  }
  //  Setting the title
  document.title = `Invoice | ${params.invoiceId}`;

  return (
    <Flex flex="0.9" flexDir="column" alignItems="center" pt="4rem">
      <InvoicePageHeader
        status={ClickedInvoice.status}
        id={ClickedInvoice.id}
      />
      {InvoiceFormStatus && <InvoiceForm type="edit" data={ClickedInvoice} />}
      <InovoicePageDetail data={ClickedInvoice} />
      {ModalPopupStatus && <ModalPopup id={ClickedInvoice.id} data={Data} />}
    </Flex>
  );
}

export default InvoicePage;
