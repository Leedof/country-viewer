import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
};

const countriesSlice = createSlice({
  name: '@@countries',
  initialState,
  reducers: {},
});

export const countriesReducer = countriesSlice.reducer;
