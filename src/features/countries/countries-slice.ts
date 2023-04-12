import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Country, Status } from 'types';
import { Extra } from 'types/extra';

//Types for asyncThunk< Return type , first agrument to payload creator, thunkApi config>
// state: { countries: CountrySlice }; is done to handle getState in conditions
export const fetchCountries = createAsyncThunk<
  { data: Country[] },
  undefined,
  { state: { countries: CountrySlice }; extra: Extra; rejectValue: string }
>(
  '@@countries/fetch-countries',
  async (_, { extra: { client, api }, rejectWithValue }) => {
    try {
      return client.get(api.ALL_COUNTRIES);
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message);
      return rejectWithValue('Unknown error');
    }
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

//Type for the initial state
export type CountrySlice = {
  status: Status;
  error: string | null;
  list: Country[];
};

const initialState: CountrySlice = {
  status: 'idle',
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
        state.error = action.payload || 'Cannot load the data';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload.data;
      });
  },
});

export const countriesReducer = countriesSlice.reducer;
