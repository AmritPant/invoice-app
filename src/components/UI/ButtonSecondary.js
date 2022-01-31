import React from "react";
import { Button } from "@chakra-ui/react";

function ButtonSecondary({ children, onClick }) {
  return (
    <Button
      w="9.6rem"
      h="4.8rem"
      bgColor="#252945"
      borderRadius="2.4rem"
      color="#fff"
      fontSize="12px"
      fontWeight="bold"
      letterSpacing="-0.25px"
      marginRight="1rem"
      onClick={onClick}
      _hover={{ color: "#7E88C3", bgColor: "#DFE3FA" }}
      _active={{
        color: "#7e88c3",
        bgcolor: "#DFE3FA",
      }}
    >
      {children}
    </Button>
  );
}

export default ButtonSecondary;
