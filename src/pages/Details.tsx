import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../components/Button';
import { CountryDetails } from '../features/details/CountryDetails';

export const Details = () => {
  const navigate = useNavigate();
  const { name = '' } = useParams();

  return (
    <>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack size="16px" /> Back
      </Button>
      <CountryDetails name={name} />
    </>
  );
};
