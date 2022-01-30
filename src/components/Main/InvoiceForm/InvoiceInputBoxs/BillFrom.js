import React from "react";
import { Box } from "@chakra-ui/react";
import useInputBoxHeading from "../../../../Hooks/use-inputBox-Heading";
import useInput from "../../../../Hooks/use-input";

function BillFrom() {
  const Heading = useInputBoxHeading("Bill From");
  const StreetAdress = useInput({ name: "Street Address", gridArea: "street" });
  const City = useInput({ name: "City", gridArea: "city" });
  const Postal = useInput({ name: "Postal Code", gridArea: "postal" });
  const Country = useInput({ name: "Country ", gridArea: "country" });

  return (
    <Box>
      {Heading}
      <Box className="invoice-input__billFrom">
        {StreetAdress}
        {City}
        {Postal}
        {Country}
      </Box>
    </Box>
  );
}

export default BillFrom;
