import React, { useRef, useContext } from "react";
import { Box, Checkbox } from "@chakra-ui/react";
import "./FilterInvoices.scss";
import iconChck from "../../../assets/icon-check.svg";
import FilterInvoiceContext from "../../../contexts/FilterInvoice";

function FIlterInvoices() {
  const InvoiceCtx = useContext(FilterInvoiceContext);
  const inputEl1 = useRef();
  const inputEl2 = useRef();
  const inputEl3 = useRef();

  const checkBoxes = ["Draft", "Pending", "Paid"];
  const inputArr = [inputEl1, inputEl2, inputEl3];

  const onClickFilterHandler = function () {
    if (this.current.checked) {
      this.current.checked = false;
      InvoiceCtx.setFilterInvoiceStatus(inputArr);
      return;
    }
    inputArr.map((inputEl) => (inputEl.current.checked = false));
    this.current.checked = true;
    InvoiceCtx.setFilterInvoiceStatus(inputArr);
  };

  return (
    <Box
      position="absolute"
      bottom="-15rem"
      right="55%"
      w="19.2rem"
      h="12.8rem"
      bgColor="#252945"
      boxShadow="0 10px 20px 0 rgb(0,0,0,0.25)"
      zIndex="100"
      borderRadius="8px"
      padding="2rem"
      className="inovice-filter-container"
    >
      <Box
        cursor="pointer"
        mb="1.5rem"
        className="invoice-filter"
        onClick={onClickFilterHandler.bind(inputEl1)}
      >
        <input
          type="radio"
          id="draft"
          ref={inputEl1}
          className="invoice-filter__input"
        />
        <span className="invoice-filter__fakeCheckbox">
          <img src={iconChck} alt="Icon Tick" />
        </span>
        <label className="invoice-filter__label">Draft</label>
      </Box>

      <Box
        cursor="pointer"
        mb="1.5rem"
        className="invoice-filter"
        onClick={onClickFilterHandler.bind(inputEl2)}
      >
        <input
          type="radio"
          id="pending"
          ref={inputEl2}
          className="invoice-filter__input"
        />
        <span className="invoice-filter__fakeCheckbox">
          <img src={iconChck} alt="Icon Tick" />
        </span>
        <label className="invoice-filter__label">Pending</label>
      </Box>

      <Box
        cursor="pointer"
        mb="1.5rem"
        className="invoice-filter"
        onClick={onClickFilterHandler.bind(inputEl3)}
      >
        <input
          type="radio"
          id="paid"
          ref={inputEl3}
          className="invoice-filter__input"
        />
        <span className="invoice-filter__fakeCheckbox">
          <img src={iconChck} alt="Icon Tick" />
        </span>
        <label className="invoice-filter__label">Paid</label>
      </Box>
    </Box>
  );
}

export default FIlterInvoices;
