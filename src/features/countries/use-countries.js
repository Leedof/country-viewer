import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  fetchCountries,
  selectAllCountries,
  selectCountriesInfo,
} from './countries-slice';

export const useCountries = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectAllCountries);
  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(fetchCountries());
    }
  }, [qty, dispatch]);

  return [countries, { status, error, qty }];
};
