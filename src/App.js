import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import FilterInvoiceContext from "./contexts/FilterInvoice";

function App() {
  const [filterInvoiceStatus, setFilterInvoiceStatus] = useState([]);

  const defaultInvoiceStatus = {
    inputEls: filterInvoiceStatus,
    setFilterInvoiceStatus,
  };

  return (
    <FilterInvoiceContext.Provider value={defaultInvoiceStatus}>
      <Flex>
        {/* Header */}
        <Header />
        {/* Main */}
        <Main />
      </Flex>
    </FilterInvoiceContext.Provider>
  );
}

export default App;
