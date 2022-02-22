import React from "react";
import { Box } from "@chakra-ui/react";
import { BODY } from "../../Helpers/Helper";
import { useDispatch } from "react-redux";
import {
  FormSliceActions,
  ModalSliceActions,
  ModalPopupActions,
} from "../../store/store";

function Modal() {
  const dispatch = useDispatch();

  const onClickModalHandler = () => {
    dispatch(ModalSliceActions.setModalStatus(false));
    dispatch(FormSliceActions.setFormStatus(false));
    dispatch(ModalPopupActions.setModalPopupStatus(false));
    BODY.classList.remove("overflow");
  };

  return (
    <Box
      pos="absolute"
      top="0"
      left="0"
      height="100%"
      w="100%"
      backgroundPosition="cover"
      backgroundColor="rgb(0,0,0,0.3)"
      zIndex="101"
      onClick={onClickModalHandler}
    ></Box>
  );
}

export default Modal;
