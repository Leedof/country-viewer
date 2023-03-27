import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from './config';

import { countriesReducer } from './features/countries/countries-slice';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
