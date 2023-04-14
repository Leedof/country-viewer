import { Details } from 'types';
import { Info } from './Info';
import { useDetails } from './use-details';
import { Loader } from 'components/Loader';

interface ICountryDetails {
  name: string;
}

export const CountryDetails = ({ name }: ICountryDetails) => {
  const { status, error, currentCountry } = useDetails(name);

  return (
    <>
      {status === 'loading' && <Loader />}
      {error && <h2>{error}</h2>}
      {status === 'received' && (
        <Info currentCountry={currentCountry as Details} />
      )}
    </>
  );
};
