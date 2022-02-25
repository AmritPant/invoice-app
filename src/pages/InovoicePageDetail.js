import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ItemListInvoicePage from "./ItemListInvoicePage";
import { useSelector } from "react-redux";

function InovoicePageDetail(props) {
  const curTheme = useSelector((state) => state.theme.curTheme);
  const mainTextColor = `var(--theme-${curTheme}-textColorPrimary)`;

  return (
    <Box
      width="65%"
      bgColor={`var(--theme-${curTheme}-secondaryBg)`}
      color={mainTextColor}
      mt="2rem"
      p="5rem 6rem"
      fontSize="1.2rem"
      borderRadius="0.8rem"
    >
      <Flex justifyContent="space-between">
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
      </Flex>
      <Flex
        color={`var(--theme-${curTheme}-textColorSecondary)`}
        mt="3rem"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Box>
          <Box mb="1.5rem">
            <Text> Invoice Date</Text>
            <Text fontSize="15" color={mainTextColor} fontWeight="bold">
              {props.data.createdAt}
            </Text>
          </Box>
          <Box>
            <Text>Payment Due</Text>
            <Text color={mainTextColor} fontSize="15" fontWeight="bold">
              {props.data.paymentDue}
            </Text>
          </Box>
        </Box>
        <Box>
          <Text>Bill To</Text>
          <Text fontSize="15" fontWeight="bold" color={mainTextColor}>
            {props.data.clientName}
          </Text>
          <Text>{props.data.clientAddress.street}</Text>
          <Text>{props.data.clientAddress.city}</Text>
          <Text>{props.data.clientAddress.postCode}</Text>
          <Text>{props.data.clientAddress.country}</Text>
        </Box>
        <Box>
          <Text>Send To</Text>
          <Text color={mainTextColor} fontSize="15" fontWeight="bold">
            {props.data.clientEmail}
          </Text>
        </Box>
      </Flex>
      <ItemListInvoicePage data={props.data} />
    </Box>
  );
}

export default InovoicePageDetail;
