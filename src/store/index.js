import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  cartIsShown: false,
  cartItems: [{ id: 1, title: 'test', quantity: 1, total: 500, price: 100 }],
  totalQuantity: 1,
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
      state.totalQuantity +=1;
    },
    increaseQuantityOfItemInCart(state, action) {
      const index = action.payload;
      state.cartItems[index].quantity += 1;
      state.cartItems[index].total += state.cartItems[index].price;
      state.totalQuantity +=1;
    },
    decreaseQuantityOfItemInCart(state, action) {
      const index = action.payload;
      state.cartItems[index].quantity -= 1;
      state.cartItems[index].total -= state.cartItems[index].price;
      state.totalQuantity -=1;
    }
  },
});

const store = configureStore({ reducer: appSlice.reducer });

export const appActions = appSlice.actions;
export default store;
