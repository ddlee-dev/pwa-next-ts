import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsType {
  theme: 'light' | 'dark';
}

const initialState = {
  theme: 'light'
} as SettingsType;

const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeTheme: (state: SettingsType, action: PayloadAction<SettingsType['theme']>) => {
      state.theme = action.payload;
    }
  }
});

export const { changeTheme } = settingSlice.actions;
export default settingSlice.reducer;
