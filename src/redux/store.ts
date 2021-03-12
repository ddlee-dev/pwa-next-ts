import { configureStore } from '@reduxjs/toolkit';
import settingSlice from './slices/settings';

const store = configureStore({
  reducer: {
    settings: settingSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
