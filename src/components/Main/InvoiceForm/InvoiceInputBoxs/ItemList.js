import { Button, Heading, Box } from "@chakra-ui/react";
import React from "react";

function ItemList() {
  return (
    <Box>
      <Heading
        fontWeight="bold"
        fontSize="1.6rem"
        color="#777F98"
        letterSpacing="-0.38px"
        mb="1rem"
      >
        Item List
      </Heading>
      <Button
        bgColor="#252945"
        color="white"
        borderRadius="2.4rem"
        height="4rem"
        width="100%"
        _hover={{ bgColor: "#979797" }}
        _active={{ bgColor: "#979797" }}
      >
        +Add New Items
      </Button>
    </Box>
  );
}

export default ItemList;
