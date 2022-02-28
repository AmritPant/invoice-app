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
      display="grid"
      alignItems="center"
      gridTemplateColumns={{
        base: "repeat(2,1fr)",
        md: "0.14fr 0.3fr 0.4fr 0.2fr 0.1fr 0.1fr ",
      }}
      gridTemplateRows={{
        base: "1fr 0.5fr 1fr",
        md: "1fr",
      }}
      backgroundColor={`var(--theme-${curTheme}-secondaryBg)`}
      width="73.2rem"
      h={{ base: "13rem", md: "7.2rem" }}
      borderRadius="8px"
      padding="0 2rem"
      className="invoice"
      marginBottom="2rem"
      cursor="pointer"
      color={`var(--theme-${curTheme}-textColorPrimary)`}
      boxShadow="0 10px 10px -10px rgb(72,84,159 , 0.14)"
      position="relative"
    >
      <Text fontWeight="bold" className="invoice__id">
        <span className="span"># </span>
        {id}
      </Text>
      <Text
        color={`var(--theme-${curTheme}-textColorSecondary)`}
        fontWeight="medium"
        className="invoice__date"
      >
        {finalDate}
      </Text>
      <Text
        fontWeight="medium"
        color={`var(--theme-${curTheme}-textColorTertiary)`}
        className="invoice__name"
      >
        {clientName}
      </Text>
      <Text
        marginLeft="auto !important"
        fontSize="1.6rem"
        fontWeight="bold"
        letterSpacing="-0.8px"
        className="invoice__price"
      >
        {finalPrice}
      </Text>
      <StatusBox status={status} />
      <Image
        display={{ base: "none", md: "block" }}
        src={iconRightArrow}
        alt="Right Arrow"
      />
    </Box>
  );
}

export default Invoice;
