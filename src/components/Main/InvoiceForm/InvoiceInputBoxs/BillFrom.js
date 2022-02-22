import React from "react";
import { Box } from "@chakra-ui/react";
import Input from "../../../../components/UI/Input";
import InputHeading from "../../../UI/InputHeading";

function BillFrom({ data }) {
  return (
    <Box>
      <InputHeading name="Bill From" />
      <Box className="invoice-input__billFrom">
        <Input
          name="Street Address"
          id="streetBillFrom"
          gridArea="street"
          value={data ? data.senderAddress.street : ""}
        />
        <Input
          name="City"
          id="cityBillFrom"
          gridArea="city"
          value={data ? data.senderAddress.city : ""}
        />
        <Input
          name="Post Code"
          id="postCodeBillFrom"
          gridArea="postal"
          value={data ? data.senderAddress.postCode : ""}
        />
        <Input
          name="Country"
          id="countryBillFrom"
          gridArea="country"
          value={data ? data.senderAddress.country : ""}
        />
      </Box>
    </Box>
  );
}

export default BillFrom;
