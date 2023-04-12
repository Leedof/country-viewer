import { useDispatch, useSelector } from 'react-redux';
import { Theme, switchTheme } from './theme-slice';
import { selectTheme } from './theme-selectors';

export const useTheme = (): [Theme, () => void] => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleTheme = () => {
    dispatch(switchTheme());
  };

  return [theme, handleTheme];
};
