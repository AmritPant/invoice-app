import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import DownArrow from "../../../assets/icon-arrow-down.svg";
import TopBarButton from "./TopBarButton";

function TopNavigation() {
  return (
    <Box ml="28rem" display="flex" alignItems="center">
      <Box display="flex" alignItems="center" mr="3rem" cursor="pointer">
        <Text fontSize="1.2rem" letterSpacing="-0.25px" mr="1rem">
          Filter By Status
        </Text>
        <Image src={DownArrow} h="4.23px" w="8.26px" />
      </Box>
      <TopBarButton />
    </Box>
  );
}

export default TopNavigation;
