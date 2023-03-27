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
  const [shownCountries, setShownCountries] = useState([]);
  const [shownAmount, setShownAmount] = useState(12);

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
    setShownCountries(data.slice(0, shownAmount));
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setShownAmount((prev) => {
        if (prev <= filteredCountries.length) return prev + 12;
        return prev;
      });
    }
  };

  useEffect(() => {
    setShownCountries(filteredCountries.slice(0, shownAmount));
  }, [shownAmount, filteredCountries]);

  // Scroll on Home page
  useEffect(() => {
    if (filteredCountries.length) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [filteredCountries]);

  //First render with fetching
  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => {
        setCountries(data);
        setfilteredCountries(data);
        setShownCountries(data.slice(0, shownAmount));
      });
    }
  }, []);

  return (
    <>
      <Controls onSearch={onSearch} />
      <List>
        {shownCountries.map((country) => {
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
