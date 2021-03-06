import React, { useRef, useContext } from "react";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "./FilterInvoices.scss";
import iconChck from "../../../assets/icon-check.svg";
import FilterInvoiceContext from "../../../contexts/FilterInvoice";

function FIlterInvoices(props) {
  const InvoiceCtx = useContext(FilterInvoiceContext);
  const curTheme = useSelector((state) => state.theme.curTheme);
  const inputEl1 = useRef();
  const inputEl2 = useRef();
  const inputEl3 = useRef();

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
      bgColor={`var(--theme-${curTheme}-secondaryBg)`}
      boxShadow="0 10px 20px 0 rgb(0,0,0,0.25)"
      zIndex="100"
      borderRadius="8px"
      padding="2rem"
      className="inovice-filter-container"
      display={props.display}
      id="filterStatusBox"
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
        <Box
          className="invoice-filter__fakeCheckbox"
          bgColor={`var(--theme-${curTheme}-primaryBg)`}
        >
          <img src={iconChck} alt="Icon Tick" />
        </Box>
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
        <Box
          className="invoice-filter__fakeCheckbox"
          bgColor={`var(--theme-${curTheme}-primaryBg)`}
        >
          <img src={iconChck} alt="Icon Tick" />
        </Box>
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
        <Box
          className="invoice-filter__fakeCheckbox"
          bgColor={`var(--theme-${curTheme}-primaryBg)`}
        >
          <img src={iconChck} alt="Icon Tick" />
        </Box>
        <label className="invoice-filter__label">Paid</label>
      </Box>
    </Box>
  );
}

export default FIlterInvoices;
