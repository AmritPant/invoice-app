import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import "./Invoice.scss";
import iconRightArrow from "../../../assets/icon-arrow-right.svg";
import StatusBox from "../../UI/StatusBox";

function Invoice({ id, price, clientName, dueDate, status }) {
  const finalPrice = `£ ${price?.toLocaleString("en-US")}`;
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
      <StatusBox status={status} />
      <Image src={iconRightArrow} />
    </Box>
  );
}

export default Invoice;
