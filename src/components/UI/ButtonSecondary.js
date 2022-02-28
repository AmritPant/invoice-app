import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";

function ButtonSecondary({ children, onClick, style }) {
  const curTheme = useSelector((state) => state.theme.curTheme);
  const dynamicColor = `var(--theme-${curTheme}-textColorSecondary)`;

  return (
    <Button
      style={style}
      w={{ base: "7rem", md: "9.6rem" }}
      h="4.8rem"
      bgColor={`var(--theme-${curTheme}-BtnSecondaryBg)`}
      borderRadius="2.4rem"
      color="#fff"
      fontSize="1.2rem"
      fontWeight="bold"
      letterSpacing="-0.25px"
      marginRight="1rem"
      color={dynamicColor}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default ButtonSecondary;
