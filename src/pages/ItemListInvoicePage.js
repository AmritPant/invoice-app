import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Data from "../data.json";

function ItemListInvoicePage(props) {
  const clickedItem = Data.filter((invoice) => invoice.id === props.data.id)[0];
  const amountDue = clickedItem.items.reduce(
    (prevPrice, curInvoice) => prevPrice + curInvoice.total,
    0
  );
  return (
    <Box mt="4rem" p="2rem 0 0 0" bgColor="#252945" borderRadius="8px 8px 00">
      <Box p="0 3rem">
        <Flex
          fontSize="1.1rem"
          color="#DFE3FA"
          fontWeight="medium"
          letterSpacing="-0.25px"
          justifyContent="space-between"
        >
          <Text>Item Name</Text>
          <Flex flex="0.5" justifyContent="space-between">
            <Text>QTY.</Text>
            <Text>Price</Text>
            <Text>Total</Text>
          </Flex>
        </Flex>
        <Box>
          {clickedItem.items.map((item) => {
            return (
              <Flex
                key={item.name + Math.random()}
                justifyContent="space-between"
                mt="1rem"
                fontSize="1.3rem"
                color="#fff"
                fontWeight="bold"
                letterSpacing="-0.25px"
              >
                <Text>{item.name}</Text>
                <Flex>
                  <Text>{item.quantity}</Text>
                  <Text ml="6.5rem">{`£${Number(item.price)
                    .toFixed(2)
                    .toLocaleString("en-US")}`}</Text>

                  <Text ml="5rem">{`£${Number(item.total)
                    .toFixed(2)
                    .toLocaleString("en-US")}`}</Text>
                </Flex>
              </Flex>
            );
          })}
        </Box>
      </Box>
      <Flex
        w="100%"
        bgColor="#0C0E16"
        h="8rem"
        mt="3rem"
        borderRadius="0 0 8px 8px"
        padding="0 2rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text>Amount Due</Text>
        <Text
          fontWeight="bold"
          fontSize="2.4rem"
          color="#fff"
          letterSpacing="-0.5px"
        >
          {`£${Number(amountDue.toFixed(2)).toLocaleString("en-US")}`}
        </Text>
      </Flex>
    </Box>
  );
}

export default ItemListInvoicePage;