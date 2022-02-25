import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";

function ButtonSecondary({ children, onClick }) {
  const curTheme = useSelector((state) => state.theme.curTheme);
  const dynamicColor = `var(--theme-${curTheme}-textColorSecondary)`;

  return (
    <Button
      w="9.6rem"
      h="4.8rem"
      bgColor={`var(--theme-${curTheme}-BtnSecondaryBg)`}
      borderRadius="2.4rem"
      color="#fff"
      fontSize="12px"
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
