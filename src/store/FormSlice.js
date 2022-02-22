import { createSlice } from "@reduxjs/toolkit";

const itemFinder = (state, id) => {
  const item = state.itemData.filter((item) => item.id === id).at(0);
  return item;
};

const FormSlice = createSlice({
  name: "Form Slice",
  initialState: { formStatus: false, isFormSubmitable: true, itemData: [] },
  reducers: {
    setFormStatus(state, action) {
      state.formStatus = action.payload;
    },
    setIsFormSubmitable(state, action) {
      state.isFormSubmitable = action.payload;
    },

    addItem(state, action) {
      state.itemData.push(action.payload);
    },
    deleteItem(state, action) {
      state.itemData = state.itemData.filter(
        (item) => item.id !== action.payload
      );
    },
    changeName(state, action) {
      const item = itemFinder(state, action.payload.id);
      item.name = action.payload.name;
    },
    changePrice(state, action) {
      const item = itemFinder(state, action.payload.id);
      item.price = action.payload.price;
    },
    changeQuantity(state, action) {
      const item = itemFinder(state, action.payload.id);
      item.quantity = action.payload.quantity;
    },
    clearData(state) {
      state.itemData = [];
    },
  },
});

export default FormSlice;
