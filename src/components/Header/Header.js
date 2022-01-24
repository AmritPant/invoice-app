import React from "react";
import { Flex } from "@chakra-ui/react";
import LogoBox from "./Logo";
import ThemeBox from "./ThemeBox";

function Header() {
  return (
    <Flex
      justifyContent="space-between"
      flexDir="column"
      height="100vh"
      pos="fixed"
      flex="0.3"
      borderRadius="0 2rem 2rem 0"
      bgColor="#1E2139"
    >
      <LogoBox />
      <ThemeBox />
    </Flex>
  );
}

export default Header;
