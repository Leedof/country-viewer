import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Country, Extra, Status } from 'types';

export const loadCountryByName = createAsyncThunk<
  { data: Country[] },
  string,
  { state: { details: DetailsSlice }; extra: Extra }
>(
  '@@details/load-country-by-name',
  (name, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(name));
  },
  {
    condition: (_, { getState }) => {
      const {
        details: { status },
      } = getState();
      if (status === 'loading') {
        return false;
      }
    },
  }
);
export const loadNeighborsByBorder = createAsyncThunk<
  { data: Country[] },
  string[],
  { extra: Extra }
>('@@details/load-neighbors', (borders, { extra: { client, api } }) => {
  return client.get(api.filterByCode(borders));
});

export type DetailsSlice = {
  status: Status;
  error: string | null;
  currentCountry: Country | null;
  neighbors: Country[];
};
const initialState: DetailsSlice = {
  status: 'idle',
  error: null,
  currentCountry: null,
  neighbors: [],
};

const detailsSlice = createSlice({
  name: '@@details',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(loadCountryByName.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCountryByName.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = 'Error';
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.status = 'received';
        state.currentCountry = action.payload.data[0];
      })
      .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
        state.neighbors = action.payload.data;
      }),
});

export const detailsReducer = detailsSlice.reducer;
