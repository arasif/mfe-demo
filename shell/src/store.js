import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {},
  extraReducers: (builder) => {
    // Matches the action type string created in the products remote
    builder.addCase("cart/addItem", (state, action) => {
      state.items.push(action.payload);
    });
  },
});

export const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});