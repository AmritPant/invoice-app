import React from "react";
import { useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import "./Invoice.scss";
import iconRightArrow from "../../../assets/icon-arrow-right.svg";
import StatusBox from "../../UI/StatusBox";

function Invoice({ id, price, clientName, dueDate, status }) {
  const curTheme = useSelector((state) => state.theme.curTheme);
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
      backgroundColor={`var(--theme-${curTheme}-secondaryBg)`}
      width="73.2rem"
      h="7.2rem"
      borderRadius="8px"
      alignItems="center"
      padding="0 2rem"
      className="invoice"
      marginBottom="2rem"
      cursor="pointer"
      color={`var(--theme-${curTheme}-textColorPrimary)`}
      boxShadow="0 10px 10px -10px rgb(72,84,159 , 0.14)"
      position="relative"
    >
      <Text fontWeight="bold">
        <span className="span"># </span>
        {id}
      </Text>
      <Text
        color={`var(--theme-${curTheme}-textColorSecondary)`}
        fontWeight="medium"
      >
        {finalDate}
      </Text>
      <Text
        fontWeight="medium"
        color={`var(--theme-${curTheme}-textColorTertiary)`}
      >
        {clientName}
      </Text>
      <Text
        marginLeft="auto !important"
        fontSize="1.6rem"
        fontWeight="bold"
        letterSpacing="-0.8px"
      >
        {finalPrice}
      </Text>
      <StatusBox status={status} />
      <Image src={iconRightArrow} alt="Right Arrow" />
    </Box>
  );
}

export default Invoice;
