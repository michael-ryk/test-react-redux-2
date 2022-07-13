import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {cartIsShown: false};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleCartShown(state) {
      state.cartIsShown = !state.cartIsShown;
    }
  }
});

const store = configureStore({reducer: appSlice.reducer});

export const appActions = appSlice.actions;
export default store;

