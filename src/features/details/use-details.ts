import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { loadCountryByName } from './details-slice';
import { Country, Details } from 'types';
import { selectDetails } from './details-selectors';
import { useAppDispatch } from 'store';

function isCountry(data: Country | null): data is Country {
  return data !== null;
}
function parseData(data: Country | null) {
  if (isCountry(data)) {
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
    } as Details;
  }

  return null;
}

export const useDetails = (name: string) => {
  const dispatch = useAppDispatch();
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
