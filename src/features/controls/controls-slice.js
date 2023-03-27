import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  region: '',
};

const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setRegion(state, action) {
      state.region = action.payload;
    },
  },
});

export const controlsReducer = controlsSlice.reducer;
export const { setRegion, setSearch } = controlsSlice.actions;

//Selectors

export const selectSearch = (state) => state.controls.search;
export const selectRegion = (state) => state.controls.region;
