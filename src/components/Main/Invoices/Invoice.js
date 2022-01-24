import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import "./Invoice.scss";
import iconRightArrow from "../../../assets/icon-arrow-right.svg";

function Invoice({ id, price, clientName, dueDate, status }) {
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

  const finalPrice = `£ ${price.toLocaleString("en-US")}`;
  const tempDate = new Date(dueDate);
  // prettier-ignore
  const months = ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , "Nov" ,"Dec"]
  const finalDate = `Due ${
    tempDate.getDate() < 9 ? `0${tempDate.getDate()}` : tempDate.getDate()
  } ${months[tempDate.getMonth() - 1]} ${tempDate.getFullYear()}`;

  return (
    <Box
      display="Flex"
      backgroundColor="#1E2139"
      width="73.2rem"
      h="7.2rem"
      borderRadius="8px"
      alignItems="center"
      padding="0 2rem"
      className="invoice"
      marginBottom="2rem"
      cursor="pointer"
      boxShadow="0 10px 10px -10px rgb(72,84,159 , 0.14)"
      position="relative"
    >
      <Text fontWeight="bold">
        <span className="span"># </span>
        {id}
      </Text>
      <Text color="#DFE3FA" fontWeight="medium">
        {finalDate}
      </Text>
      <Text fontWeight="medium">{clientName}</Text>
      <Text
        marginLeft="auto !important"
        fontSize="1.6rem"
        fontWeight="bold"
        letterSpacing="-0.8px"
      >
        {finalPrice}
      </Text>
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
      <Image src={iconRightArrow} />
    </Box>
  );
}

export default Invoice;
