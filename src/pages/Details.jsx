import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../config";
import { Button } from "../components/Button";
import { Info } from "../components/Info";

export const Details = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack size="16px" /> Back
      </Button>
      {country === null ? <h1>Opps, try again</h1> : <Info country={country} />}
    </>
  );
};
