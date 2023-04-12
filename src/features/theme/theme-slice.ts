import { createSlice } from '@reduxjs/toolkit';

export type Theme = 'light' | 'dark';

const themeSlice = createSlice({
  name: '@@theme',
  initialState: 'light' as Theme,
  reducers: {
    switchTheme(state) {
      return (state = state === 'light' ? 'dark' : 'light');
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { switchTheme } = themeSlice.actions;
