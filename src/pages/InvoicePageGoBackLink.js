import React from "react";
import { NavLink } from "react-router-dom";
import { Image } from "@chakra-ui/image";
import iconChevromLeft from "../assets/icon-arrow-left.svg";
import "./InvoicePageGoBackLink.scss";
import { useSelector } from "react-redux";

function InvoicePageGoBackLink() {
  const curTheme = useSelector((state) => state.theme.curTheme);
  return (
    <NavLink to="/" className={`goBackLink goBackLink__${curTheme}`}>
      <Image
        src={iconChevromLeft}
        display="inline-block"
        mr="1.5rem"
        alt="Arrow Left"
      />
      Go Back
    </NavLink>
  );
}

export default InvoicePageGoBackLink;
