import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import addIcon from "../../../assets/icon-plus.svg";

function TopBarButton() {
  return (
    <Box>
      <Button
        varient="solid"
        width="15rem"
        height="4.8rem"
        display="inline-flex"
        backgroundColor="#7C5DFA"
        borderRadius="24px"
        _hover={{ backgroundColor: "#9277FF" }}
      >
        <Box
          width="3.2rem"
          h="3.2rem"
          borderRadius="50%"
          backgroundColor="#fff"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mr="2rem"
          fontSize="1.2rem"
          letterSpacing="-0.25px"
        >
          <Image src={addIcon} />
        </Box>
        <Text fontSize="1.2rem" letterSpacing="-0.25px">
          New Invoice
        </Text>
      </Button>
    </Box>
  );
}

export default TopBarButton;
