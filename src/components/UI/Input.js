import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
  const inputRef = useRef();
  const isFormSubmitable = useSelector((state) => state.form.isFormSubmitable);
  const curTheme = useSelector((state) => state.theme.curTheme);

  const inputBlurHandler = (event) => {
    if (event.target.value.trim().length < 1) setError(true);
  };

  const inputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) setError(false);
  };

  useEffect(() => {
    if (!inputRef.current?.value.trim().length > 0 && !isFormSubmitable) {
      setError(true);
      return;
    }
    setError(false);
  }, [isFormSubmitable, inputRef.current?.value]);

  return (
    <Box
      ref={inputBoxEl}
      gridArea={gridArea}
      style={style}
      className={isError ? "error" : ""}
    >
      {showLabel === "show" && (
        <Box display="flex" justifyContent="space-between">
          <FormLabel
            htmlFor={id}
            color={`var(--theme-${curTheme}-textColorSecondary)`}
          >
            {name}
          </FormLabel>
          {isError && <Text>Can't be empty</Text>}
        </Box>
      )}
      {!onChange && (
        <Input
          onChange={inputChangeHandler}
          bgColor={`var(--theme-${curTheme}-secondaryBg)`}
          outline={`1px solid ${curTheme === "dark" ? "#252945" : "#dfe3fa"} `}
          color={`var(--theme-${curTheme}-textColorPrimary)`}
          ref={inputRef}
          type={type}
          id={id}
          defaultValue={value}
          onBlur={inputBlurHandler}
        />
      )}
      {onChange && (
        <Input
          onChange={onChange}
          ref={inputRef}
          type={type}
          id={name}
          defaultValue={value}
          bgColor={`var(--theme-${curTheme}-secondaryBg)`}
          outline={`1px solid ${curTheme === "dark" ? "#252945" : "#dfe3fa"} `}
          color={`var(--theme-${curTheme}-textColorPrimary)`}
        />
      )}
    </Box>
  );
};

export default CustomInput;
