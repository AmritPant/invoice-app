import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import DownArrow from "../../../assets/icon-arrow-down.svg";
import TopBarButton from "./TopBarButton";
import FIlterInvoices from "./FIlterInvoices";

function TopNavigation() {
  const [filterBoxStatus, setFilterBoxStatus] = useState(false);

  const onClickFilterHandler = () => {
    setFilterBoxStatus((prevStatus) => !prevStatus);
  };

  return (
    <Box ml="28rem" display="flex" alignItems="center" position="relative">
      <Box
        display="flex"
        alignItems="center"
        mr="3rem"
        cursor="pointer"
        onClick={onClickFilterHandler}
      >
        <Text fontSize="1.2rem" letterSpacing="-0.25px" mr="1rem">
          Filter By Status
        </Text>
        <Image src={DownArrow} h="4.23px" w="8.26px" />
      </Box>
      {filterBoxStatus && <FIlterInvoices />}
      <TopBarButton />
    </Box>
  );
}

export default TopNavigation;
