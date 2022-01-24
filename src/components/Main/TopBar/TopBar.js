import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import TopNavigation from "./TopNavigation";
function TopBar() {
  return (
    <Box display="flex" justifyContent="space-around" alignItems="center">
      <Box>
        <Heading fontSize="3.2rem" fontWeight="Bold" letterSpacing="-1px">
          Invoices
        </Heading>
        <Text
          fontSize="1.2rem"
          fontWeight="medium"
          letterSpacing="-0.25px"
          color="#DFE3FA"
        >
          There are 7 total Invoices
        </Text>
      </Box>
      <TopNavigation />
    </Box>
  );
}

export default TopBar;
