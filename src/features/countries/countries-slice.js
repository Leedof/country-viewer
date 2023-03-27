import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCountries = createAsyncThunk(
  '@@countries/fetch-countries',
  (_, { extra: { client, api } }) => {
    return client.get(api.ALL_COUNTRIES);
  },
  {
    condition: (_, { getState }) => {
      const {
        countries: { status },
      } = getState();
      if (status === 'loading') return false;
    },
  }
);

const initialState = {
  status: 'idle', // idle, loading, rejected, received
  error: null,
  list: [],
};

const countriesSlice = createSlice({
  name: '@@countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload.data;
      });
  },
});

export const countriesReducer = countriesSlice.reducer;

//Selectors

export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
});
export const selectAllCountries = (state) => state.countries.list;

// export const selectFilteredCountries ;
