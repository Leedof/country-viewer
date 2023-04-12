import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from './config';

import { countriesReducer } from './features/countries/countries-slice';
import { controlsReducer } from './features/controls/controls-slice';
import { detailsReducer } from './features/details/details-slice';
import { themeReducer } from './features/theme/theme-slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    controls: controlsReducer,
    details: detailsReducer,
    theme: themeReducer,
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
