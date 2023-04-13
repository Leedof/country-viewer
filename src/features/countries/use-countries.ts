import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchCountries } from './countries-slice';

import {
  selectCountriesInfo,
  selectFilteredCountries,
} from './countries-selectors';
import { RootState, useAppDispatch } from 'store';
import { Country } from 'types';
import { selectControls } from 'features/controls/controls-selectors';

export const useCountries = (): [
  Country[],
  ReturnType<typeof selectCountriesInfo>
] => {
  const dispatch = useAppDispatch();
  const controls = useSelector(selectControls);
  const countries = useSelector((state: RootState) =>
    selectFilteredCountries(state, controls)
  );

  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(fetchCountries());
    }
  }, [qty, dispatch]);

  return [countries, { status, error, qty }];
};
