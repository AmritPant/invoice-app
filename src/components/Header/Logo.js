import React from "react";
import Logo from "../../assets/logo.svg";

import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";

function LogoBox() {
  return (
    <Flex
      position="relative"
      bgColor="#7C5DFA"
      h="10rem"
      w="10rem"
      borderRadius="0 2rem 2rem 0"
      alignItems="center"
      justifyContent="center"
      _before={{
        content: `""`,
        position: "absolute",
        bottom: "0",
        left: "0",
        height: "4.5rem",
        width: "10rem",
        backgroundColor: "#9277FF",
        borderRadius: "2rem 0 2rem 0",
        zIndex: "5",
      }}
    >
      <Image h="4rem" w="4rem" zIndex="10" src={Logo} alt="Main Logo" />
    </Flex>
  );
}

export default LogoBox;
