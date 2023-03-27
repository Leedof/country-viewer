import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  fetchCountries,
  selectCountriesInfo,
  selectFilteredCountries,
} from './countries-slice';
import { selectControls } from '../controls/controls-slice';

export const useCountries = () => {
  const dispatch = useDispatch();
  const controls = useSelector(selectControls);
  const countries = useSelector((state) =>
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
