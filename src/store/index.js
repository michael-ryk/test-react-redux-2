import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  cartIsShown: false,
  cartItems: [{ id: 1, title: 'test', quantity: 5, total: 500, price: 100 }],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleCartShown(state) {
      state.cartIsShown = !state.cartIsShown;
    },
    addItemToCart(state, action) {
      state.cartItems = [...state.cartItems, action.payload];
    },
    increaseQuantityOfItemInCart(state, action) {
      const index = action.payload;
      state.cartItems[index].quantity += 1;
      state.cartItems[index].total += state.cartItems[index].price;
    },
    decreaseQuantityOfItemInCart(state, action) {
      const index = action.payload;
      state.cartItems[index].quantity -= 1;
      state.cartItems[index].total -= state.cartItems[index].price;
    }
  },
});

const store = configureStore({ reducer: appSlice.reducer });

export const appActions = appSlice.actions;
export default store;
