import React from "react";
import { Box, Text } from "@chakra-ui/react";

function StatusBox({ status }) {
  let statusColor;
  let statusBackgroundColor;

  if (status === "paid") {
    statusColor = "#33D69F";
    statusBackgroundColor = "#33D69F0D";
  }
  if (status === "pending") {
    statusColor = "#FF8F00";
    statusBackgroundColor = "#FF8F000D";
  }
  if (status === "draft") {
    statusColor = "#DFE3FA";
    statusBackgroundColor = "#DFE3FA0D";
  }

  return (
    <Box
      width="10.04rem"
      h="4rem"
      backgroundColor={statusBackgroundColor}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="6px"
      className="status-box"
    >
      <Box
        w="8px"
        h="8px"
        borderRadius="50%"
        backgroundColor={statusColor}
        mr="0.5rem"
      ></Box>
      <Text
        fontSize="12px"
        letterSpacing="-0.25px"
        fontWeight="Bold"
        color={statusColor}
      >
        {status[0].toUpperCase() + status.slice(1)}
      </Text>
    </Box>
  );
}

export default StatusBox;
