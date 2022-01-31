import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import StatusBox from "../components/UI/StatusBox";
import ButtonPrimary from "../components/UI/ButtonPrimary";
import ButtonSecondary from "../components/UI/ButtonSecondary";
import ButtonTertiary from "../components/UI/ButtonTertiary";
import InvoicePageGoBackLink from "./InvoicePageGoBackLink";

function InvoicePageHeader({ status }) {
  return (
    <Box width="65%">
      <InvoicePageGoBackLink />
      <Flex
        bgColor="#1E2139"
        alignItems="center"
        p="1rem 3rem"
        borderRadius="0.8rem"
        justifyContent="space-between"
        color="#fff"
      >
        <Flex alignItems="center">
          <Text fontSize="1.2rem" fontWeight="medium" mr="1rem">
            Status
          </Text>
          <StatusBox status={status} />
        </Flex>
        <Box>
          <ButtonSecondary>Edit</ButtonSecondary>
          <ButtonTertiary>Delete</ButtonTertiary>
          <ButtonPrimary>Mark As Paid</ButtonPrimary>
        </Box>
      </Flex>
    </Box>
  );
}

export default InvoicePageHeader;
