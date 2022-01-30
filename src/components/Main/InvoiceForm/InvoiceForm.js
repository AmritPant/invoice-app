import React, { useContext } from "react";
import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import InvoiceInput from "./InvoiceInputBoxs/InvoiceInput";
import ButtonPrimary from "../../UI/ButtonPrimary";
import ButtonSecondary from "../../UI/ButtonSecondary";
import ButtonExtra from "../../UI/ButtonExtra";
import ModalContext from "../../../contexts/ModalContex";
import FormContext from "../../../contexts/FormContext";
import { BODY } from "../../../Helpers/Helper";

function InvoiceForm() {
  const ModalCtx = useContext(ModalContext);
  const FormCtx = useContext(FormContext);

  const onClickDiscardHandler = () => {
    ModalCtx.setModalStatus(false);
    FormCtx.setFormStatus(false);
    console.log(BODY);
    BODY.classList.remove("overflow");
  };

  return (
    <Flex
      position="absolute"
      top="0"
      left="7%"
      flexDir="column"
      justifyContent="space-between"
      padding="2rem 3rem"
      height="100vh"
      bgColor="#141625"
      zIndex="300"
      color="#fff"
    >
      <Heading>New Invoice</Heading>
      <InvoiceInput />
      <Box display="flex" justifyContent="flex-end" marginLeft="auto">
        <ButtonExtra onClick={onClickDiscardHandler}>Discard</ButtonExtra>
        <ButtonSecondary>Save as Draft</ButtonSecondary>
        <ButtonPrimary> Save & Send</ButtonPrimary>
      </Box>
    </Flex>
  );
}

export default InvoiceForm;
