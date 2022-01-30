import React from "react";
import { Box, Input, FormLabel, Select } from "@chakra-ui/react";
import useInput from "../../../../Hooks/use-input";
import useInputBoxHeading from "../../../../Hooks/use-inputBox-Heading";

function BillTo() {
  const ClientName = useInput({
    name: "Client's Name",
    gridArea: "ClientName",
  });

  const ClientEmail = useInput({
    name: "Client's Email",
    gridArea: "ClientEmail",
  });

  const StreetAdress = useInput({
    name: "Street Adress",
    gridArea: "Street",
  });

  const City = useInput({ name: "City", gridArea: "city" });
  const Post = useInput({ name: "Post Code", gridArea: "post" });
  const Country = useInput({ name: "Country", gridArea: "country" });
  const ProductDescription = useInput({
    name: "Product Description",
    gridArea: "Product",
  });

  const Heading = useInputBoxHeading("Bill To");

  return (
    <Box>
      {Heading}
      <Box className="invoice-input__billTo">
        {ClientName}
        {ClientEmail}
        {StreetAdress}
        {City}
        {Post}
        {Country}
        {/* Date and select Box */}
        <Box
          gridArea="dateBox"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box flex="1" mr="1rem">
            <FormLabel htmlFor="date">Item Date </FormLabel>
            <Input type="date" id="date" />
          </Box>
          <Box flex="1">
            <FormLabel htmlFor="Payment Terms">Payment Terms</FormLabel>
            <Select placeholder="Net 30 Days" id="Payment Terms">
              <option>Net 1 Day</option>
              <option>Net 7 Days</option>
              <option>Net 14 Days</option>
              <option>Net 30 Days</option>
            </Select>
          </Box>
        </Box>
        {ProductDescription}
      </Box>
    </Box>
  );
}

export default BillTo;
