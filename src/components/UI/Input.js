import React, { useRef, useState } from "react";
import { Text, Box, FormLabel, Input } from "@chakra-ui/react";

const CustomInput = ({
  name,
  onChange,
  id,
  gridArea = "",
  type = "text",
  value = "",
  style = {},
  showLabel = "show",
}) => {
  const [isError, setError] = useState(false);
  const inputBoxEl = useRef();

  const inputBlurHandler = (event) => {
    if (event.target.value.trim().length < 1) setError(true);
  };

  const inputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) setError(false);
  };

  return (
    <Box
      ref={inputBoxEl}
      gridArea={gridArea}
      style={style}
      className={isError ? "error" : ""}
    >
      <Box display="flex" justifyContent="space-between">
        {showLabel === "show" && <FormLabel htmlFor={id}>{name}</FormLabel>}
        {isError && <Text>Can't be empty</Text>}
      </Box>
      {!onChange && (
        <Input
          onChange={inputChangeHandler}
          type={type}
          id={id}
          defaultValue={value}
          onBlur={inputBlurHandler}
        />
      )}
      {onChange && (
        <Input onChange={onChange} type={type} id={name} defaultValue={value} />
      )}
    </Box>
  );
};

export default CustomInput;
