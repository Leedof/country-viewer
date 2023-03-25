import { useState, useEffect } from "react";
import axios from "axios";

import { Controls } from "../components/Controls";
import { List } from "../components/List";
import { Card } from "./../components/Card";

import { ALL_COUNTRIES } from "../config";
import { useNavigate, useOutletContext } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useOutletContext();
  const [filteredCountries, setfilteredCountries] = useState([]);

  const onSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((country) => country.region.includes(region));
    }
    if (search) {
      data = data.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }
    setfilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => {
        setCountries(data);
      });
    }
  }, []);

  useEffect(() => {
    if (!filteredCountries.length) {
      setfilteredCountries(countries);
    }
  }, [countries]);

  return (
    <>
      <Controls onSearch={onSearch} />
      <List>
        {filteredCountries.map((country) => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name.official,
            info: [
              {
                title: "Population",
                description: country.population.toLocaleString(),
              },
              {
                title: "Region",
                description: country.region,
              },
              {
                title: "Capital",
                description: country.capital,
              },
            ],
          };
          return (
            <Card
              key={country.name.common}
              onClick={() => navigate("/country/" + country.name.common)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};
