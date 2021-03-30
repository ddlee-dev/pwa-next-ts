import { configureStore } from '@reduxjs/toolkit';
import settingSlice from './slices/settings';

const store = configureStore({
  reducer: {
    settings: settingSlice
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
