import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BODY } from "../Helpers/Helper";
import { Flex, Text, Box } from "@chakra-ui/react";
import StatusBox from "../components/UI/StatusBox";
import ButtonPrimary from "../components/UI/ButtonPrimary";
import ButtonSecondary from "../components/UI/ButtonSecondary";
import ButtonTertiary from "../components/UI/ButtonTertiary";
import InvoicePageGoBackLink from "./InvoicePageGoBackLink";
import {
  ModalPopupActions,
  ModalSliceActions,
  invoiceDataActions,
  FormSliceActions,
} from "../store/store";

function InvoicePageHeader({ status, id }) {
  const dispatch = useDispatch();
  const curTheme = useSelector((state) => state.theme.curTheme);

  const deleteButtonClickHandler = () => {
    dispatch(ModalSliceActions.setModalStatus(true));
    dispatch(ModalPopupActions.setModalPopupStatus(true));
  };

  const markAsPaidHandler = () => {
    dispatch(invoiceDataActions.markAsPaid({ id }));
  };

  const editButtonHandler = () => {
    BODY.scrollIntoView();
    dispatch(ModalSliceActions.setModalStatus(true));
    dispatch(FormSliceActions.setFormStatus(true));
  };

  return (
    <Box width={{ base: "90vw", md: "65%" }}>
      <InvoicePageGoBackLink />
      <Flex
        bgColor={`var(--theme-${curTheme}-secondaryBg)`}
        alignItems="center"
        p="1rem 3rem"
        borderRadius="0.8rem"
        justifyContent="space-between"
        color={`var(--theme-${curTheme}-textColorSecondary)`}
        boxShadow="0 10px 10px -10px rgba(72,84,159,0.14)"
      >
        <Flex
          alignItems="center"
          justifyContent={{ base: "space-between", sm: "" }}
          width={{ base: "100%", sm: "auto" }}
        >
          <Text fontSize="1.2rem" fontWeight="medium" mr="1rem">
            Status
          </Text>
          <StatusBox status={status} />
        </Flex>
        <Box
          position={{ base: "absolute", sm: "unset" }}
          bottom="0"
          right="10%"
          mb={{ base: "2rem", sm: "" }}
        >
          <ButtonSecondary onClick={editButtonHandler}>Edit</ButtonSecondary>
          <ButtonTertiary onClick={deleteButtonClickHandler}>
            Delete
          </ButtonTertiary>
          {(status === "pending" || status === "draft") && (
            <ButtonPrimary onClick={markAsPaidHandler}>
              Mark As Paid
            </ButtonPrimary>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

export default InvoicePageHeader;
