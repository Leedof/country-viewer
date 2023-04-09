import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, switchTheme } from './theme-slice';

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleTheme = () => {
    dispatch(switchTheme());
  };

  return [theme, handleTheme];
};
