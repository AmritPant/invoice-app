import React from "react";
import { Flex } from "@chakra-ui/react";
import LogoBox from "./Logo";
import ThemeBox from "./ThemeBox";
import { useSelector } from "react-redux";

function Header() {
  const curTheme = useSelector((state) => state.theme.curTheme);
  return (
    <Flex
      justifyContent="space-between"
      flexDir={{
        base: "row",
        xl: "column",
      }}
      height={{
        base: "8rem",
        xl: "100vh",
      }}
      borderRadius={{
        base: "none",
        xl: "0 2rem 2rem 0",
      }}
      bgColor={curTheme === "light" ? "#373b53" : "#1e2139"}
      position="sticky"
      top="0"
      zIndex="400"
    >
      <LogoBox />
      <ThemeBox />
    </Flex>
  );
}

export default Header;
