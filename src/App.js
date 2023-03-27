import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";
//Pages
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { NotFound } from "./pages/NotFound";
import { GlobalStyles } from "./assets/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/Theme";

function App() {
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header theme={theme} switchTheme={switchTheme} />
        <Main>
          <Outlet context={[countries, setCountries]} />
        </Main>
      </ThemeProvider>
    </>
  );
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="country/:name" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
