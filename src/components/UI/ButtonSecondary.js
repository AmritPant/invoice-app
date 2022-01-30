import React from "react";
import { Button } from "@chakra-ui/react";

function ButtonSecondary({ children, onClick }) {
  return (
    <Button
      w="9.6rem"
      h="4.8rem"
      bgColor="#252945"
      borderRadius="2.4rem"
      color="#7E88C3"
      fontSize="12px"
      fontWeight="bold"
      letterSpacing="-0.25px"
      marginRight="1rem"
      onClick={onClick}
      _hover={{ color: "#979797", bgColor: "#fff" }}
      _active={{ bgColor: "#fff", border: "none !important", color: "#979797" }}
    >
      {children}
    </Button>
  );
}

export default ButtonSecondary;
