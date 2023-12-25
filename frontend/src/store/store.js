

// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducer/userSlice';

// Configure le store avec le reducer du slice
export const store = configureStore({
  reducer: {
    auth: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store.js; 