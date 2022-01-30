import React from "react";
import { Heading } from "@chakra-ui/react";

const useInputBoxHeading = (HeadingName) => {
  return (
    <Heading
      fontSize="1.2rem"
      color="#7C5DFA"
      fontWeight="bold"
      letterSpacing="-0.25px"
      marginBottom="2rem"
    >
      {HeadingName}
    </Heading>
  );
};

export default useInputBoxHeading;
