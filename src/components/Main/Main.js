import React from "react";
import { Box } from "@chakra-ui/react";
import TopBar from "./TopBar/TopBar";
import Invoices from "./Invoices/Invoices";

function Main() {
  return (
    <Box
      flex="0.9"
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt="4rem"
      color="#fff"
    >
      {/* Top Bar */}
      <TopBar />
      {/* Invoices */}
      <Invoices />
      {/* Invoice Input */}
    </Box>
  );
}

export default Main;
