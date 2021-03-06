import React from "react";
import { Button } from "@chakra-ui/react";

function ButtonPrimary({ children, onClick }) {
  return (
    <Button
      h="4.8rem"
      w={{ base: "11rem", md: "13.8rem" }}
      bgColor="#7C5DFA"
      borderRadius="2.4rem"
      fontSize="1.2rem"
      color="#fff"
      fontWeight="bold"
      onClick={onClick}
      letterSpacing="-0.25px"
      _hover={{ bgColor: "#9277FF" }}
      _active={{ bgColor: "#9277FF", border: "none !important" }}
    >
      {children}
    </Button>
  );
}

export default ButtonPrimary;
