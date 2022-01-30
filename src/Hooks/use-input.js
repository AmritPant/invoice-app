import React from "react";
import { Box, FormLabel, Input } from "@chakra-ui/react";

const useInput = ({ name, gridArea = "not grid", type = "text" }) => {
  return (
    <Box gridArea={gridArea}>
      <FormLabel htmlFor={name}>{name}</FormLabel>
      <Input type={type} id={name} />
    </Box>
  );
};

export default useInput;
