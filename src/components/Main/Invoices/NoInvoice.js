import React from "react";
import { Center, Box, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import noInvoiceImg from "../../../assets/illustration-empty.svg";
import { useSelector } from "react-redux";

function NoInvoice() {
  const curTheme = useSelector((state) => state.theme.curTheme);
  return (
    <Center>
      <Box mt="8rem">
        <Image src={noInvoiceImg} />
        <Box
          display="flex"
          flexDirection="column"
          mt="4rem"
          alignItems="center"
        >
          <Heading
            fontWeight="bold"
            mb="1rem"
            fontSize="2rem"
            letterSpacing="-0.63px"
            color={`var(--theme-${curTheme}-textColorPrimary)`}
          >
            There is nothing here
          </Heading>
          <Text
            fontSize="1.2rem"
            letterSpacing="-0.25px"
            color={`var(--theme-${curTheme}-textColorTertiary)`}
          >
            Create new invoice by clicking the
          </Text>
          <Text
            color={`var(--theme-${curTheme}-textColorTertiary)`}
            letterSpacing="-0.25px"
          >
            <Text display="inline-block" mr="0.5rem" fontWeight="bold">
              New invoice
            </Text>
            Button and get Started
          </Text>
        </Box>
      </Box>
    </Center>
  );
}

export default NoInvoice;
