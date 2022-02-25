import React from "react";
import { Box, Input, FormLabel, Select } from "@chakra-ui/react";
import InputHeading from "../../../UI/InputHeading";
import CustomInput from "../../../UI/Input";
import CustomDropdown from "../../../UI/CustomDropdown";

function BillTo({ data }) {
  const tempDate = new Date();
  // Used French --> Canada because that supports the required format
  // Visit this link for  more info:  https://gist.github.com/mlconnor/1887156
  const TodayDate = tempDate.toLocaleDateString("fr-CA");

  return (
    <Box>
      <InputHeading name="Bill To" />
      <Box className="invoice-input__billTo">
        <CustomInput
          name="Client's Name"
          id="clientName"
          gridArea="ClientName"
          value={data ? data.clientName : ""}
        />
        <CustomInput
          name="Client's Email"
          type="email"
          id="clientEmail"
          gridArea="ClientEmail"
          value={data ? data.clientEmail : ""}
        />
        <CustomInput
          name="Street Address"
          id="streetBillTo"
          gridArea="Street"
          value={data ? data.clientAddress.street : ""}
        />
        <CustomInput
          name="City"
          id="cityBillTo"
          gridArea="city"
          value={data ? data.clientAddress.city : ""}
        />
        <CustomInput
          name="Post Code"
          id="postCodeBillTo"
          gridArea="post"
          value={data ? data.clientAddress.postCode : ""}
        />
        <CustomInput
          name="Country"
          id="countryBillTo"
          gridArea="country"
          value={data ? data.clientAddress.country : ""}
        />

        {/* Date and select Box */}
        <Box
          gridArea="dateBox"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box flex="1" mr="1rem">
            <FormLabel htmlFor="date">Item Date </FormLabel>
            <Input
              type="date"
              id="date"
              defaultValue={data ? data.createdAt : TodayDate}
            />
          </Box>
          <CustomDropdown value={data ? data.paymentTerms : 30} />
        </Box>
        <CustomInput
          name="Product Description"
          id="productDescription"
          gridArea="Product"
          value={data ? data.description : ""}
        />
      </Box>
    </Box>
  );
}

export default BillTo;
