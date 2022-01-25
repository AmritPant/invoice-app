import React from "react";

const FilterInvoiceContext = React.createContext({
  inputEls: [{ checked: false }, { checked: false }, { checked: false }],
  setFilterInvoiceStatus: () => {},
});

export default FilterInvoiceContext;
