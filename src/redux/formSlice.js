import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "customers",

  initialState: {
    customers: [],
  },

  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },

    deleteCustomer: (state, action) => {
      state.customers = state.customers.filter(
        (customer) => customer.id !== action.payload
      );
    },
  },
});

export const { addCustomer, deleteCustomer } = formSlice.actions;

export default formSlice.reducer;