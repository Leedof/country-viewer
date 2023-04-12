import { Regions } from './regions';

type Name = {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      common: string;
      official: string;
    };
  };
};
type Currency = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};
type Language = {
  [key: string]: string;
};

export type Country = {
  name: Name;
  capital: string[];
  currencies: Currency;
  region: Regions;
  subregion: string;
  population: number;
  area: number;
  languages: Language;
  flags: {
    png: string;
    svg: string;
  };
  borders: string[];
};

type Info = {
  title: string;
  description: string | string[];
};
export type CountryInfo = {
  img: string;
  name: string;
  info: Info[];
};
