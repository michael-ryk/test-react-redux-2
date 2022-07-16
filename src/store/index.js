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
      const newItem = action.payload;
      const itemToUpdate = state.cartItems.find(
        (item) => item.title === newItem.title
      );

      if (itemToUpdate) {
        // item already exist - update
        console.log('Item exist: update');
        itemToUpdate.quantity = itemToUpdate.quantity + 1;
        itemToUpdate.total = itemToUpdate.total + itemToUpdate.price;
      } else {
        // Item not exist - add it
        console.log('Item not exist: create');
        state.cartItems = [
          ...state.cartItems,
          {
            id: new Date().getTime().toString(),
            title: newItem.title,
            quantity: 1,
            total: newItem.price,
            price: newItem.price,
            description: newItem.description,
          },
        ];
      }

      state.totalQuantity += 1;
    },
    increaseQuantityOfItemInCart(state, action) {
      const index = action.payload;
      state.cartItems[index].quantity += 1;
      state.cartItems[index].total += state.cartItems[index].price;
      state.totalQuantity += 1;
    },
    decreaseQuantityOfItemInCart(state, action) {
      const index = action.payload;
      state.cartItems[index].quantity -= 1;
      state.cartItems[index].total -= state.cartItems[index].price;
      state.totalQuantity -= 1;
    },
  },
});

const store = configureStore({ reducer: appSlice.reducer });

export const appActions = appSlice.actions;
export default store;
