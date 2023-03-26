import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { filterByCode } from "../config";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 2rem;
  row-gap: 2rem;
  column-gap: 4rem;
  @media (min-width: 767px) {
    grid-template-columns: 400px 1fr;
    margin-top: 3rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 600px 1fr;
  }
`;
const InfoBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.75rem;
`;
const InfoImg = styled.img`
  width: 100%;
`;
const InfoTitle = styled.h2`
  margin: 0;
  color: var(--color-text);
  font-weight: var(--fw-bold);
  font-size: 32px;
`;
const InfoLists = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 1.5rem;
  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  color: var(--color-text);
  font-size: var(--fs-sm);
  & > b {
    font-weight: var(--fw-normal);
  }
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
const BordersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  & > span {
    font-weight: var(--fw-bold);
  }
  & > div {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;
const BorderListItem = styled(Link)`
  display: inline-block;
  background-color: var(--colors-ui-base);
  padding: 0 1rem;
  line-height: 1.5;
  text-decoration: none;
  box-shadow: var(--shadow);
  color: var(--color-text);
`;
const parseCountryData = (data) => {
  return {
    name: data.name.common,
    flag: data.flags.png,
    mainInfo: [
      {
        title: "Native Name",
        value: Object.values(data.name.nativeName)[0]["common"],
      },
      {
        title: "Population",
        value: data.population.toLocaleString(),
      },
      {
        title: "Region",
        value: data.region,
      },
      {
        title: "Sub Region",
        value: data.subregion,
      },
      {
        title: "Capital",
        value: data.capital.join(", "),
      },
    ],
    otherInfo: [
      {
        title: "Currencies",
        value: Object.values(data.currencies)[0].name,
      },
      {
        title: "Languages",
        value: Object.values(data.languages).join(", "),
      },
      {
        title: "Area",
        value: data.area.toLocaleString(),
      },
    ],
    borders: data?.borders || [],
  };
};

export const Info = ({ country }) => {
  const [borderCountries, setBorderCountries] = useState([]);

  const { name, flag, mainInfo, otherInfo, borders } =
    parseCountryData(country);

  useEffect(() => {
    if (borders.length)
      axios.get(filterByCode(borders)).then(({ data }) => {
        const borderCountries = data.map((el) => {
          return el.name.common;
        });
        setBorderCountries(borderCountries);
      });
  }, []);

  return (
    <Wrapper>
      <InfoImg src={flag} />
      <InfoBody>
        <InfoTitle>{name}</InfoTitle>
        <InfoLists>
          <List>
            {mainInfo.map((el) => (
              <ListItem key={el.title}>
                <b>{el.title + ": "}</b>
                {el.value}
              </ListItem>
            ))}
          </List>
          <List>
            {otherInfo.map((el) => (
              <ListItem key={el.title}>
                <b>{el.title + ": "}</b>
                {el.value}
              </ListItem>
            ))}
          </List>
        </InfoLists>
        <BordersList>
          <span>Border countries:</span>
          <div>
            {borders.length === 0
              ? "None"
              : borderCountries.map((el) => (
                  <BorderListItem key={el} to={"/country/" + el}>
                    {el}
                  </BorderListItem>
                ))}
          </div>
        </BordersList>
      </InfoBody>
    </Wrapper>
  );
};
