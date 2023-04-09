import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: '@@theme',
  initialState,
  reducers: {
    switchTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { switchTheme } = themeSlice.actions;

//Selectors
export const selectTheme = (state) => state.theme.mode;
