import React from "react";
import { useSelector } from "react-redux";
import { Box, Text, Heading } from "@chakra-ui/react";
import TopNavigation from "./TopNavigation";
function TopBar() {
  const curTheme = useSelector((state) => state.theme.curTheme);

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      color={`var(--theme-${curTheme}-textColorPrimary)`}
      alignItems="center"
    >
      <Box>
        <Heading fontSize="3.2rem" fontWeight="Bold" letterSpacing="-1px">
          Invoices
        </Heading>
        <Text
          fontSize="1.2rem"
          fontWeight="medium"
          letterSpacing="-0.25px"
          color={`var(--theme-${curTheme}-textColorSecondary)`}
        >
          There are 7 total Invoices
        </Text>
      </Box>
      <TopNavigation />
    </Box>
  );
}

export default TopBar;
