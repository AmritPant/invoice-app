import React from "react";
import { useSelector } from "react-redux";
import { Box, Text, Heading } from "@chakra-ui/react";
import TopNavigation from "./TopNavigation";
function TopBar() {
  const curTheme = useSelector((state) => state.theme.curTheme);
  const numOfInvoices = useSelector((state) => state.invoice.data)?.length;

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      color={`var(--theme-${curTheme}-textColorPrimary)`}
      alignItems="center"
      width={{ base: "90vw", md: "73.2rem" }}
    >
      <Box>
        <Heading
          fontSize={{ base: "2.5rem", sm: "3.2rem" }}
          fontWeight="Bold"
          letterSpacing="-1px"
        >
          Invoices
        </Heading>
        <Text
          fontSize="1.2rem"
          fontWeight="medium"
          letterSpacing="-0.25px"
          color={`var(--theme-${curTheme}-textColorSecondary)`}
        >
          {numOfInvoices > 0
            ? `There are ${numOfInvoices} total Invoices`
            : "No Invoice"}
        </Text>
      </Box>
      <TopNavigation />
    </Box>
  );
}

export default TopBar;
