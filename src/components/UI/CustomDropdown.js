import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Input, Stack, Text, Box, FormLabel, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import iconArroDown from "../../assets/icon-arrow-down.svg";

function CustomDropdown({ value = 30 }) {
  const [dropdownOptionStatus, setdropdownOptionStatus] = useState(false);
  const [curOptionNumber, setOptionNumber] = useState(value);
  const [defaultValue, setDefaultValue] = useState("Net 30 Days");
  const curTheme = useSelector((state) => state.theme.curTheme);
  const listItemBorder = `1px solid ${
    curTheme === "dark" ? "#1e2139" : "#dfe3fa"
  }`;

  useEffect(() => {
    if (curOptionNumber === 30) setDefaultValue("Net 30 Days");
    if (curOptionNumber === 7) setDefaultValue("Net 7 Days");
    if (curOptionNumber === 14) setDefaultValue("Net 14 Days");
    if (curOptionNumber === 1) setDefaultValue("Net 1 Day");
  }, [curOptionNumber, setDefaultValue]);

  return (
    <Box pos="relative">
      <FormLabel display="block">Payment Terms</FormLabel>
      <Flex alignItems="center">
        <Input
          bgColor={`var(--theme-${curTheme}-secondaryBg)`}
          outline={`1px solid ${curTheme === "dark" ? "#252945" : "#dfe3fa"} `}
          color={`var(--theme-${curTheme}-textColorPrimary)`}
          type="text"
          className="dropdown"
          id={curOptionNumber}
          value={defaultValue}
          readOnly={true}
          onClick={() => setdropdownOptionStatus((prev) => !prev)}
          _focus={{ outline: "none !important" }}
        />
        <Image
          src={iconArroDown}
          alt="Down Arrow"
          display="inline-block"
          ml="-2rem"
          zIndex="1000"
          height="1rem"
        />
      </Flex>
      {dropdownOptionStatus && (
        <Box
          bgColor={`var(--theme-${curTheme}-tertiaryBg)`}
          h="14rem"
          w="100%"
          pos="absolute"
          bottom="-15rem"
          p="1rem 0"
          borderRadius="0.8rem"
          boxShadow=" 0 1rem 2rem 0 rgba(0,0,0,0.25)"
          zIndex="500"
        >
          <Stack cursor="pointer" fontSize="1.2rem" fontWeight="bold" mb="2rem">
            <Text
              borderBottom={listItemBorder}
              _hover={{ color: "#9277FF" }}
              padding="0 2rem"
              pb=".5rem"
              mb=".5rem"
              onClick={() => {
                setOptionNumber(1);
                setdropdownOptionStatus(false);
              }}
            >
              Net 1 Day
            </Text>
            <Text
              borderBottom={listItemBorder}
              _hover={{ color: "#9277FF" }}
              padding="0 2rem"
              pb=".5rem"
              mb=".5rem"
              onClick={() => {
                setOptionNumber(7);
                setdropdownOptionStatus(false);
              }}
            >
              Net 7 Days
            </Text>
            <Text
              borderBottom={listItemBorder}
              _hover={{ color: "#9277FF" }}
              padding="0 2rem"
              pb=".5rem"
              mb=".5rem"
              onClick={() => {
                setOptionNumber(14);
                setdropdownOptionStatus(false);
              }}
            >
              Net 14 Day
            </Text>
            <Text
              _hover={{ color: "#9277FF" }}
              padding="0 2rem"
              pb=".5rem"
              mb=".5rem"
              onClick={() => {
                setOptionNumber(30);
                setdropdownOptionStatus(false);
              }}
            >
              Net 30 Day
            </Text>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default CustomDropdown;
