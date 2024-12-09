import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    // registering cartReducer under "cart"
    cart: cartReducer,
  },
});

export default store;
