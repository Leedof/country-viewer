import { useNavigate } from 'react-router-dom';

import { useCountries } from './use-countries';
import { List } from 'components/List';
import { Card } from 'components/Card';
import { CountryInfo } from 'types';
import { Loader } from 'components/Loader';

export const CountriesList = () => {
  const navigate = useNavigate();
  const [countries, { status, error, qty }] = useCountries();

  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <Loader />}

      {status === 'received' && (
        <List>
          {countries.map((country) => {
            const countryInfo: CountryInfo = {
              img: country.flags.png,
              name: country.name.official,
              info: [
                {
                  title: 'Population',
                  description: country.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: country.region,
                },
                {
                  title: 'Capital',
                  description: country.capital,
                },
              ],
            };
            return (
              <Card
                key={country.name.common}
                onClick={() => navigate('/country/' + country.name.common)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
};
