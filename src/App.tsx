import { Header } from './components/Header';
import { Main } from './components/Main';
import {
  createRoutesFromElements,
  Route,
  Outlet,
  createHashRouter,
} from 'react-router-dom';
//Pages
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { GlobalStyles } from './assets/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/Theme';
import { useTheme } from 'features/theme/use-theme';

function App() {
  const [theme] = useTheme();

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <Main>
          <Outlet />
        </Main>
      </ThemeProvider>
    </>
  );
}

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="country/:name" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
