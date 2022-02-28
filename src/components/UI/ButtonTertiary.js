import React from "react";
import { Button } from "@chakra-ui/react";

function ButtonTertiary({ children, onClick }) {
  return (
    <Button
      w={{ sm: "7rem", md: "8.9rem" }}
      h="4.8rem"
      bgColor="#EC5757"
      borderRadius="2.4rem"
      color="#fff"
      fontSize="1.2rem"
      fontWeight="bold"
      letterSpacing="-0.25px"
      marginRight="1rem"
      onClick={onClick}
      _hover={{ color: "#fff", bgColor: "#FF9797" }}
      _active={{
        color: "#fff",
        bgcolor: "#FF9797",
      }}
    >
      {children}
    </Button>
  );
}

export default ButtonTertiary;
