import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ItemListInvoicePage from "./ItemListInvoicePage";
import { useSelector } from "react-redux";

function InovoicePageDetail(props) {
  const curTheme = useSelector((state) => state.theme.curTheme);
  const mainTextColor = `var(--theme-${curTheme}-textColorPrimary)`;

  return (
    <Box
      width={{ base: "90vw", md: "65%" }}
      bgColor={`var(--theme-${curTheme}-secondaryBg)`}
      color={mainTextColor}
      mt="2rem"
      p={{ base: "1rem 2rem", sm: "3rem 4rem", lg: "5rem 6rem" }}
      fontSize="1.2rem"
      borderRadius="0.8rem"
    >
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Heading>
            <Text display="inline-block" color="#888EB0">
              #
            </Text>
            {props.data.id}
          </Heading>
          <Text>{props.data.description}</Text>
        </Box>
        <Box
          fontSize="1.1rem"
          color={`var(--theme-${curTheme}-textColorSecondary)`}
        >
          <Text>{props.data.senderAddress.street}</Text>
          <Text>{props.data.senderAddress.city}</Text>
          <Text>{props.data.senderAddress.postCode}</Text>
          <Text>{props.data.senderAddress.country}</Text>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "repeat(2,1fr)", sm: "repeat(3,1fr)" }}
        gridTemplateRows={{ base: "0.5fr 0.5fr 0.1fr", sm: "repeat(2,50%)" }}
        color={`var(--theme-${curTheme}-textColorSecondary)`}
        mt="3rem"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Box mb="1.5rem" grid="1/2">
          <Text> Invoice Date</Text>
          <Text fontSize="1.5rem" color={mainTextColor} fontWeight="bold">
            {props.data.createdAt}
          </Text>
        </Box>
        <Box gridRow="2/3">
          <Text>Payment Due</Text>
          <Text color={mainTextColor} fontSize="1.5rem" fontWeight="bold">
            {props.data.paymentDue}
          </Text>
        </Box>
        <Box gridRow="1/3">
          <Text>Bill To</Text>
          <Text fontSize="1.5rem" fontWeight="bold" color={mainTextColor}>
            {props.data.clientName}
          </Text>
          <Text>{props.data.clientAddress.street}</Text>
          <Text>{props.data.clientAddress.city}</Text>
          <Text>{props.data.clientAddress.postCode}</Text>
          <Text>{props.data.clientAddress.country}</Text>
        </Box>
        <Box
          gridRow={{ base: "3/4", sm: "1/2" }}
          gridColumn={{ base: "1/3", sm: "3/4" }}
        >
          <Text>Send To</Text>
          <Text
            color={mainTextColor}
            fontSize={{ base: "1.2rem", sm: "1.5rem" }}
            fontWeight="bold"
          >
            {props.data.clientEmail}
          </Text>
        </Box>
      </Box>
      <ItemListInvoicePage data={props.data} />
    </Box>
  );
}

export default InovoicePageDetail;
