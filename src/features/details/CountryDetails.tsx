import { Details } from 'types';
import { Info } from './Info';
import { useDetails } from './use-details';

interface ICountryDetails {
  name: string;
}

export const CountryDetails = ({ name }: ICountryDetails) => {
  const { status, error, currentCountry } = useDetails(name);

  return (
    <>
      {status === 'loading' && <h2>Loading</h2>}
      {error && <h2>{error}</h2>}
      {status === 'received' && (
        <Info currentCountry={currentCountry as Details} />
      )}
    </>
  );
};
