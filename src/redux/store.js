import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import the cartReducer from the cartSlice file

// Configure the Redux store
const store = configureStore({
  reducer: {
    // Registering the cartReducer under the "cart" key in the state
    cart: cartReducer, // The cart state will be managed by the cartReducer
  },
});

// Export the store so it can be used in the application
export default store;
