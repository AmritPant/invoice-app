import React from "react";

const ModalContext = React.createContext({
  modalStatus: false,
  setModalStatus: () => {},
});

export default ModalContext;
