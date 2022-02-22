import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Heading, Box, Text } from "@chakra-ui/react";
import CustomInput from "../../../UI/Input";
import { FormSliceActions } from "../../../../store/store";

function ItemList({ data }) {
  const dispatch = useDispatch();
  const formStatus = useSelector((state) => state.form.formStatus);
  const isFormSubmitable = useSelector((state) => state.form.isFormSubmitable);

  useEffect(() => {
    dispatch(FormSliceActions.clearData());
    dispatch(FormSliceActions.setIsFormSubmitable(true));
  }, [formStatus, dispatch]);

  let itemArr;
  useEffect(() => {
    if (data) {
      data.items.map((item) => dispatch(FormSliceActions.addItem(item)));
    }
  }, []);

  itemArr = useSelector((state) => state.form.itemData);

  // Preventing from unwanted data storage

  const itemObj = {
    id: "i" + (itemArr.length + 1),
    name: "",
    price: 0,
    quantity: 0,
  };

  const ItemListClickHandler = () => {
    dispatch(FormSliceActions.addItem(itemObj));
  };

  const getDetailsAboutEvent = (event) => {
    const id = event.target.parentNode.parentNode.id;
    const data = event.target.value;
    return { id, data };
  };

  const priceChangeHandler = (event) => {
    const { id, data: price } = getDetailsAboutEvent(event);
    dispatch(FormSliceActions.changePrice({ id, price }));
  };

  const quantityChangeHandler = (event) => {
    const { id, data: quantity } = getDetailsAboutEvent(event);
    dispatch(FormSliceActions.changeQuantity({ id, quantity }));
  };

  const nameChangeHandler = (event) => {
    const { id, data: name } = getDetailsAboutEvent(event);
    dispatch(FormSliceActions.changeName({ id, name }));
  };

  const deleteImageClickHandler = (event) => {
    if (event.target.id === "svgImage") {
      const id = event.target.parentNode.parentNode.parentNode.id;
      dispatch(FormSliceActions.deleteItem(id));
    }
  };

  return (
    <Box>
      <Heading
        fontWeight="bold"
        fontSize="1.6rem"
        color="#777F98"
        letterSpacing="-0.38px"
        mb="1rem"
      >
        Item List
      </Heading>
      {itemArr.length > 0 && (
        <Box
          display="grid"
          gridTemplateColumns="0.4fr 0.1fr 0.25fr  0.25fr"
          gridColumnGap="2rem"
          mb="1rem"
          color="#DFE3FA"
          fontWeight="medium"
          fontSize="1.2rem"
        >
          <Text>Item Name</Text>
          <Text ml="-1rem">QTY.</Text>
          <Text>Price</Text>
          <Text ml="-2rem">Total</Text>
        </Box>
      )}
      {itemArr.map((item) => {
        return (
          <Box
            key={item.id}
            id={item.id}
            display="grid"
            mb="2rem"
            gridColumnGap="2rem"
            gridTemplateColumns="0.4fr 0.1fr 0.25fr 0.125fr 0.125fr"
          >
            <CustomInput
              showLabel="hide"
              onChange={nameChangeHandler}
              value={data && item.name}
            />
            <CustomInput
              showLabel="hide"
              onChange={quantityChangeHandler}
              value={data && item.quantity}
            />
            <CustomInput
              showLabel="hide"
              onChange={priceChangeHandler}
              value={data && item.price}
            />
            <Text fontWeight="medium" fontSize="1.2rem" overflow="hidden">
              {item.quantity * item.price ? item.quantity * item.price : "0.00"}
            </Text>
            <Box
              onClickCapture={deleteImageClickHandler}
              cursor="pointer"
              className="deleteImgBox"
            >
              <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
                  fill="#888EB0"
                  id="svgImage"
                />
              </svg>
            </Box>
          </Box>
        );
      })}
      <Button
        bgColor="#252945"
        color="white"
        borderRadius="2.4rem"
        height="4rem"
        width="100%"
        _hover={{ bgColor: "#979797" }}
        _active={{ bgColor: "#979797" }}
        onClick={ItemListClickHandler}
      >
        +Add New Items
      </Button>
      {!isFormSubmitable && (
        <Box color="#EC5757" fontWeight="semibold" fontSize="1rem" mt="1rem">
          <Text>- All fields must be added</Text>
          <Text>- An item must be added</Text>
        </Box>
      )}
    </Box>
  );
}

export default ItemList;
