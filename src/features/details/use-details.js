import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { loadCountryByName, selectDetails } from './details-slice';

const parseData = (data) => {
  if (data === null) {
    return null;
  }

  return {
    name: data.name.common,
    flag: data.flags.png,
    mainInfo: [
      {
        title: 'Native Name',
        value: Object.values(data.name.nativeName)[0]['common'],
      },
      {
        title: 'Population',
        value: data.population.toLocaleString(),
      },
      {
        title: 'Region',
        value: data.region,
      },
      {
        title: 'Sub Region',
        value: data.subregion,
      },
      {
        title: 'Capital',
        value: data.capital.join(', '),
      },
    ],
    otherInfo: [
      {
        title: 'Currencies',
        value: Object.values(data.currencies)[0].name,
      },
      {
        title: 'Languages',
        value: Object.values(data.languages).join(', '),
      },
      {
        title: 'Area',
        value: data.area.toLocaleString(),
      },
    ],
    borders: data?.borders || [],
  };
};

export const useDetails = (name) => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));
  }, [name, dispatch]);

  return {
    status: details.status,
    error: details.error,
    currentCountry: parseData(details.currentCountry),
  };
};
