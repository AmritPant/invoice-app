import React from "react";
import { Center, Box, Heading, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import noInvoiceImg from "../../../assets/illustration-empty.svg";

function NoInvoice() {
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
          >
            There is nothing here
          </Heading>
          <Text fontSize="1.2rem" color="#DFE3FA" letterSpacing="-0.25px">
            Create new invoice by clicking the{" "}
          </Text>
          <Text letterSpacing="-0.25px">
            <Text
              color="#fff"
              display="inline-block"
              mr="0.5rem"
              fontWeight="bold"
            >
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
