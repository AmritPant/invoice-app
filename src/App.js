import React, { useContext, useState } from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import FilterInvoiceContext from "./contexts/FilterInvoice";
import Modal from "./components/Extra/Modal";
import ModalContext from "./contexts/ModalContex";
import InvoiceForm from "./components/Main/InvoiceForm/InvoiceForm";
import FormContext from "./contexts/FormContext";
import { BODY } from "./Helpers/Helper";

function App() {
  const [filterInvoiceStatus, setFilterInvoiceStatus] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [formStatus, setFormStatus] = useState(false);

  const defaultInvoiceStatus = {
    inputEls: filterInvoiceStatus,
    setFilterInvoiceStatus,
  };

  const defautlModalStatus = {
    modalStatus,
    setModalStatus,
  };

  if (modalStatus) BODY.classList.add("overflow");

  const defaultFormContext = {
    formStatus,
    setFormStatus,
  };

  return (
    <FilterInvoiceContext.Provider value={defaultInvoiceStatus}>
      <ModalContext.Provider value={defautlModalStatus}>
        <FormContext.Provider value={defaultFormContext}>
          {modalStatus && <Modal />}
          <Flex>
            {/* Header */}
            <Header />
            {/* Main */}
            {formStatus && <InvoiceForm />}
            <Main />
          </Flex>
        </FormContext.Provider>
      </ModalContext.Provider>
    </FilterInvoiceContext.Provider>
  );
}

export default App;
