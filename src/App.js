import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import FilterInvoiceContext from "./contexts/FilterInvoice";
import Modal from "./components/Extra/Modal";
import InvoiceForm from "./components/Main/InvoiceForm/InvoiceForm";
import { BODY } from "./Helpers/Helper";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import InvoicePage from "./pages/InvoicePage";

function App() {
  const curTheme = useSelector((state) => state.theme.curTheme);
  const [filterInvoiceStatus, setFilterInvoiceStatus] = useState([]);
  const formStatus = useSelector((state) => state.form.formStatus);
  const modalStatus = useSelector((state) => state.modal.modalStatus);
  const numOfinvoice = useSelector((state) => state.invoice.data)?.length;

  const defaultInvoiceStatus = {
    inputEls: filterInvoiceStatus,
    setFilterInvoiceStatus,
  };

  if (modalStatus) BODY.classList.add("overflow");
  BODY.style.backgroundColor = `var(--theme-${curTheme}-primaryBg)`;

  // For the Dynamic Title
  useEffect(() => {
    document.title = `Invoices (${numOfinvoice}) | Frontend Mentor`;
  }, [window.location]);

  return (
    <FilterInvoiceContext.Provider value={defaultInvoiceStatus}>
      {modalStatus && <Modal />}
      <Flex>
        <Header />
        {formStatus && <InvoiceForm type="new" />}
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/invoices/:invoiceId">
              <InvoicePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </Flex>
    </FilterInvoiceContext.Provider>
  );
}

export default App;
