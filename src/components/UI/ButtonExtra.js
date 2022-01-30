import React from "react";
import { Button } from "@chakra-ui/react";

function ButtonPrimary({ children, onClick }) {
  return (
    <Button
      variant="link"
      onClick={onClick}
      h="4.8rem"
      w="9.6rem"
      bgColor="#fff"
      borderRadius="2.4rem"
      fontSize="1.2rem"
      color="#7E88C3"
      mr="8rem"
      fontWeight="bold"
      justifySelf="flex-start"
      letterSpacing="-0.25px"
      _hover={{ bgColor: "#eee" }}
      _active={{ bgColor: "#eee", border: "none !important" }}
    >
      {children}
    </Button>
  );
}

export default ButtonPrimary;
