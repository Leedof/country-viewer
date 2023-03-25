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

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Outlet context={[countries, setCountries]} />
      </Main>
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
