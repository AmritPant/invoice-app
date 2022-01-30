import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import ModalContext from "../../contexts/ModalContex";
import FormContext from "../../contexts/FormContext";
import { BODY } from "../../Helpers/Helper";

function Modal() {
  const ModalCtx = useContext(ModalContext);
  const FormCtx = useContext(FormContext);

  const onClickModalHandler = () => {
    ModalCtx.setModalStatus(false);
    FormCtx.setFormStatus(false);
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
