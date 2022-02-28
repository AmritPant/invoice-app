import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import addIcon from "../../../assets/icon-plus.svg";
import { BODY } from "../../../Helpers/Helper";
import { useDispatch } from "react-redux";
import { FormSliceActions, ModalSliceActions } from "../../../store/store";

function TopBarButton() {
  const dispatch = useDispatch();

  const onClickBtnHandler = () => {
    BODY.scrollIntoView();
    dispatch(ModalSliceActions.setModalStatus(true));
    dispatch(FormSliceActions.setFormStatus(true));
  };

  return (
    <Box color="#fff">
      <Button
        varient="solid"
        width={{ base: "13rem", sm: "15rem" }}
        height="4.8rem"
        display="inline-flex"
        backgroundColor="#7C5DFA"
        borderRadius="24px"
        _hover={{ backgroundColor: "#9277FF" }}
        _active={{
          backgroundColor: "#9277FF",
          outline: "none",
          border: "none",
        }}
        onClick={onClickBtnHandler}
      >
        <Box
          width={{ base: "2.5rem", sm: "3.2rem " }}
          h={{ base: "2.5rem", sm: "3.2rem" }}
          borderRadius="50%"
          backgroundColor="#fff"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mr={{ base: "1rem", sm: "2rem" }}
          fontSize="1.2rem"
          letterSpacing="-0.25px"
        >
          <Image
            src={addIcon}
            alt="Add Icon"
            height={{ base: ".9rem", sm: "auto" }}
          />
        </Box>
        <Text fontSize="1.2rem" letterSpacing="-0.25px">
          New Invoice
        </Text>
      </Button>
    </Box>
  );
}

export default TopBarButton;
