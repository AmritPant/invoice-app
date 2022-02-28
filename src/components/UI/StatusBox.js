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
      width={{ base: "9rem", md: "10.04rem" }}
      h="4rem"
      backgroundColor={statusBackgroundColor}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="0.6rem"
      className="invoice__status status-box"
    >
      <Box
        w="0.8rem"
        h="0.8rem"
        borderRadius="50%"
        backgroundColor={statusColor}
        mr="0.5rem"
      ></Box>
      <Text
        fontSize="1.2rem"
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
