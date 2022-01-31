import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ItemListInvoicePage from "./ItemListInvoicePage";

function InovoicePageDetail(props) {
  return (
    <Box
      width="65%"
      bgColor="#1E2139"
      color="#fff"
      mt="2rem"
      p="5rem 6rem"
      fontSize="1.2rem"
      borderRadius="0.8rem"
    >
      <Flex justifyContent="space-between">
        <Box>
          <Heading>{props.data.id}</Heading>
          <Text>{props.data.description}</Text>
        </Box>
        <Box fontSize="1.1rem" color="#DFE3FA">
          <Text>{props.data.senderAddress.street}</Text>
          <Text>{props.data.senderAddress.city}</Text>
          <Text>{props.data.senderAddress.postCode}</Text>
          <Text>{props.data.senderAddress.country}</Text>
        </Box>
      </Flex>
      <Flex mt="3rem" alignItems="flex-start" justifyContent="space-between">
        <Box>
          <Box mb="1.5rem">
            <Text color="#DFE3FA"> Invoice Date</Text>
            <Text fontSize="15" fontWeight="bold">
              {props.data.createdAt}
            </Text>
          </Box>
          <Box>
            <Text color="#DFE3FA">Payment Due</Text>
            <Text fontSize="15" fontWeight="bold">
              {props.data.paymentDue}
            </Text>
          </Box>
        </Box>
        <Box color="#DFE3FA">
          <Text color="#DFE3FA">Bill To</Text>
          <Text fontSize="15" fontWeight="bold">
            {props.data.clientName}
          </Text>
          <Text>{props.data.clientAddress.street}</Text>
          <Text>{props.data.clientAddress.city}</Text>
          <Text>{props.data.clientAddress.postCode}</Text>
          <Text>{props.data.clientAddress.country}</Text>
        </Box>
        <Box>
          <Text color="#DFE3FA">Send To</Text>
          <Text fontSize="15" fontWeight="bold">
            {props.data.clientEmail}
          </Text>
        </Box>
      </Flex>
      <ItemListInvoicePage data={props.data} />
    </Box>
  );
}

export default InovoicePageDetail;
