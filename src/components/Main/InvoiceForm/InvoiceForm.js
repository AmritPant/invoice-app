import React, { useEffect, useRef } from "react";
import moment from "moment";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import InvoiceInput from "./InvoiceInputBoxs/InvoiceInput";
import ButtonPrimary from "../../UI/ButtonPrimary";
import ButtonSecondary from "../../UI/ButtonSecondary";
import ButtonExtra from "../../UI/ButtonExtra";
import { BODY, randomIdGenerator } from "../../../Helpers/Helper";
import { useDispatch, useSelector } from "react-redux";
import {
  FormSliceActions,
  ModalSliceActions,
  invoiceDataActions,
} from "../../../store/store";

function InvoiceForm({ type, data }) {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.form.itemData);
  const invoiceInputRef = useRef();

  function CloseModalAndForm() {
    dispatch(ModalSliceActions.setModalStatus(false));
    dispatch(FormSliceActions.setFormStatus(false));
    BODY.classList.remove("overflow");
  }

  const getAllInputData = function () {
    const inputArr = Array.from(
      invoiceInputRef.current.querySelectorAll("input")
    );
    const getValueOfInput = (id) =>
      inputArr.find((inputElement) => inputElement.id === id).value;

    const date = getValueOfInput("date");
    const clientName = getValueOfInput("clientName");
    const clientEmail = getValueOfInput("clientEmail");
    const paymentTerms = inputArr.find((inputElement) =>
      inputElement.classList.contains("dropdown")
    ).id;
    const description = getValueOfInput("productDescription");
    const paymentDue = moment(date).add(paymentTerms, "days");
    const street = getValueOfInput("streetBillFrom");
    const city = getValueOfInput("cityBillFrom");
    const postCode = getValueOfInput("postCodeBillFrom");
    const country = getValueOfInput("countryBillFrom");
    const clientStreet = getValueOfInput("streetBillTo");
    const clientCity = getValueOfInput("cityBillTo");
    const clinetPostCode = getValueOfInput("postCodeBillTo");
    const clientCountry = getValueOfInput("countryBillTo");
    const total =
      itemList.length > 0
        ? itemList.reduce(
            (curPice, prevItem) =>
              +prevItem.price * prevItem.quantity + curPice,
            0
          )
        : 0.0;

    return [
      {
        id: randomIdGenerator(),
        createdAt: date,
        clientAddress: {
          street: clientStreet,
          city: clientCity,
          postCode: clinetPostCode,
          country: clientCountry,
        },
        clientEmail,
        clientName,
        description,
        items: itemList,
        paymentDue: new Date(paymentDue).toLocaleDateString("fr-CA"),
        paymentTerms,
        senderAddress: { street, city, postCode, country },
        total: total,
      },
      inputArr,
    ];
  };

  const checkFormValidity = (inputArr) => {
    const status =
      inputArr.every((inputEl) => inputEl.value.trim().length > 0) &&
      itemList.length > 0;
    dispatch(FormSliceActions.setIsFormSubmitable(status));

    if (!status) {
      inputArr
        .filter((inputEl) => inputEl.value.trim().length === 0)
        .map((inputEl) => inputEl.parentNode.classList.add("error"));
      return;
    }
    return status;
  };

  // Save Click Handler
  const saveClickHandler = () => {
    const [inputData, inputArr] = getAllInputData();
    const formValidity = checkFormValidity(inputArr);
    if (formValidity) {
      dispatch(
        invoiceDataActions.addInvoice({ status: "pending", ...inputData })
      );
      CloseModalAndForm();
    }
  };

  // Draft  Click Handler
  const draftClickHandler = () => {
    const [inputData, _] = getAllInputData();
    dispatch(invoiceDataActions.addInvoice({ status: "draft", ...inputData }));
    CloseModalAndForm();
  };

  // Save Changes Handler
  const saveChnagesHandler = () => {
    const [inputData, inputArr] = getAllInputData();
    const formValidity = checkFormValidity(inputArr);
    inputData.id = data.id;
    console.log(formValidity);
    if (formValidity) {
      dispatch(
        invoiceDataActions.editInvoice({
          id: data.id,
          data: { status: data.status, ...inputData },
        })
      );
      CloseModalAndForm();
    }
  };

  return (
    <Flex
      position="absolute"
      top="0"
      left="7%"
      flexDir="column"
      justifyContent="space-between"
      padding="2rem 3rem"
      height="100vh"
      bgColor="#141625"
      zIndex="300"
      color="#fff"
      width="40%"
      className="invoice-form"
    >
      {type === "new" && <Heading>New Invoice</Heading>}
      {type === "edit" && (
        <Heading>
          Edit{" "}
          <Text display="inline-block" color="#888EB0">
            #
          </Text>
          {data.id}
        </Heading>
      )}
      <Box ref={invoiceInputRef}>
        {type === "new" && <InvoiceInput />}
        {type === "edit" && <InvoiceInput data={data} />}
      </Box>

      {/* When the Form type is New Invoice */}
      {type === "new" && (
        <Box display="flex" justifyContent="flex-end" marginLeft="auto">
          <ButtonExtra onClick={CloseModalAndForm}>Discard</ButtonExtra>
          <ButtonSecondary onClick={draftClickHandler}>
            Save as Draft
          </ButtonSecondary>
          <ButtonPrimary onClick={saveClickHandler}>Save & Send</ButtonPrimary>
        </Box>
      )}
      {/* When the Form type is Edit */}
      {type === "edit" && (
        <Box display="flex" justifyContent="flex-end" marginLeft="auto">
          <ButtonSecondary onClick={CloseModalAndForm}>Cancel</ButtonSecondary>
          <ButtonPrimary onClick={saveChnagesHandler}>
            Save Changes
          </ButtonPrimary>
        </Box>
      )}
    </Flex>
  );
}

export default InvoiceForm;
