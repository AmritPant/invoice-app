import React from "react";
import { useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/react";

function StatusBox({ status }) {
  const curTheme = useSelector((state) => state.theme.curTheme);
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
    statusColor = curTheme === "dark" ? "#DFE3FA" : "rgba(55,59,83)";
    statusBackgroundColor =
      curTheme === "dark" ? "#DFE3FA0D" : "rgba(55, 59, 83, 0.1)";
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
