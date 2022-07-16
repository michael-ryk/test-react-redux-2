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
        // Item already exist - update
        itemToUpdate.quantity++;
        itemToUpdate.total = itemToUpdate.total + itemToUpdate.price;
      } else {
        // Item not exist - create new
        state.cartItems = [
          ...state.cartItems,
          {
            id: new Date().getTime().toString(),
            title: newItem.title,
            total: newItem.price,
            price: newItem.price,
            description: newItem.description,
            quantity: 1,
          },
        ];
      }

      state.totalQuantity += 1;
    },
    removeItemFromCart(state, action) {
      const itemToRemove = action.payload;
      const itemToUpdate = state.cartItems.find(
        (item) => item.title === itemToRemove.title
      );

      if (itemToUpdate.quantity === 1) {
        // Last item - Remove it
        state.cartItems = state.cartItems.filter(item => item.title !== itemToRemove.title);
      } else {
        // Not last item - update
        itemToUpdate.quantity--;
        itemToUpdate.total = itemToUpdate.total - itemToUpdate.price;
      }

      state.totalQuantity -= 1;
    },
  },
});

const store = configureStore({ reducer: appSlice.reducer });

export const appActions = appSlice.actions;
export default store;
