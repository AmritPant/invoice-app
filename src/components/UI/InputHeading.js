import React from 'react';
import { Heading } from '@chakra-ui/react';

const InputHeading = ({ name }) => {
  return (
    <Heading
      fontSize="1.2rem"
      color="#7C5DFA"
      fontWeight="bold"
      letterSpacing="-0.25px"
      marginBottom="2rem"
    >
      {name}
    </Heading>
  );
};

export default InputHeading;
