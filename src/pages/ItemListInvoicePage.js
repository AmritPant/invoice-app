import React from "react";
import { useSelector } from "react-redux";
import { Box, Flex, Text } from "@chakra-ui/react";

function ItemListInvoicePage(props) {
  const Data = useSelector((state) => state.invoice.data);
  const curTheme = useSelector((state) => state.theme.curTheme);
  const clickedItem = Data.filter((invoice) => invoice.id === props.data.id)[0];
  const amountDue = clickedItem.total;

  return (
    <Box
      mt="4rem"
      p="2rem 0 0 0"
      bgColor={`var(--theme-${curTheme}-tertiaryBg)`}
      mb={{ base: "9rem", sm: "0" }}
      borderRadius="8px 8px 00"
    >
      <Box color={`var(--theme-${curTheme}-textColorSecondary)`} p="0 3rem">
        <Flex
          fontSize="1.1rem"
          fontWeight="medium"
          letterSpacing="-0.25px"
          justifyContent="space-between"
        >
          <Text>Item Name</Text>
          <Box
            display={{ base: "none", sm: "grid" }}
            gridTemplateColumns="3rem 8rem 8rem"
            gridColumnGap="2rem"
          >
            <Text textAlign="right">QTY.</Text>
            <Text textAlign="right">Price</Text>
            <Text textAlign="right">Total</Text>
          </Box>
        </Flex>
        <Box>
          {clickedItem.items.map((item) => {
            return (
              <Box
                key={item.name + Math.random()}
                fontWeight="bold"
                fontSize="1.3rem"
                letterSpacing="-0.25px"
                mt="1rem"
                display="grid"
                gridTemplateColumns={{
                  base: "0.5fr 0.5fr 1fr",
                  sm: "2.5fr 3rem 8rem 8rem",
                }}
                gridGap={{ base: "0", sm: "2rem" }}
              >
                {/* --------------------------------------------------------------------- */}
                {/* Name */}
                {/* --------------------------------------------------------------------- */}
                <Text
                  color={`var(--theme-${curTheme}-textColorPrimary)`}
                  gridColumn={{ base: "1/3", sm: "1/2" }}
                >
                  {item.name}
                </Text>
                {/* --------------------------------------------------------------------- */}
                {/* Quantity */}
                {/* --------------------------------------------------------------------- */}
                <Text textAlign={{ base: "left", sm: "center" }}>
                  {item.quantity}{" "}
                  <Text display={{ base: "inline-block", sm: "none" }}>x</Text>
                </Text>
                {/* --------------------------------------------------------------------- */}
                {/* Price */}
                {/* --------------------------------------------------------------------- */}
                <Text
                  textAlign={{ base: "left", sm: "right" }}
                  ml={{
                    base: "-67%",
                    sm: "0",
                  }}
                >{`£${Number(item.price)
                  .toFixed(2)
                  .toLocaleString("en-US")}`}</Text>

                {/* --------------------------------------------------------------------- */}
                {/* Total */}
                {/* --------------------------------------------------------------------- */}
                <Text
                  color={`var(--theme-${curTheme}-textColorPrimary)`}
                  textAlign="right"
                  gridColumn={{ base: "3/4" }}
                  gridRow={{ base: "1/3" }}
                >{`£${Number(item.price * item.quantity)
                  .toFixed(2)
                  .toLocaleString("en-US")}`}</Text>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Flex
        w="100%"
        bgColor={`var(--theme-${curTheme}-itemAmountBg)`}
        h="8rem"
        mt="3rem"
        borderRadius="0 0 8px 8px"
        padding="0 2rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text color="#fff">Amount Due</Text>
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
