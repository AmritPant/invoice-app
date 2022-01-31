import React from "react";
import { NavLink } from "react-router-dom";
import { Image } from "@chakra-ui/image";
import iconChevromLeft from "../assets/icon-arrow-left.svg";
import "./InvoicePageGoBackLink.scss";

function InvoicePageGoBackLink() {
  return (
    <NavLink to="/" className="goBackLink">
      <Image src={iconChevromLeft} display="inline-block" mr="1.5rem" />
      Go Back
    </NavLink>
  );
}

export default InvoicePageGoBackLink;
