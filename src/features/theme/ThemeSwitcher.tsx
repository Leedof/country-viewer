import styled from 'styled-components';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';
import { useTheme } from './use-theme';

const Switcher = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fs.small};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fw.bold};
  text-transform: capitalize;
`;

export const ThemeSwitcher = () => {
  const [theme, handleTheme] = useTheme();
  return (
    <Switcher onClick={handleTheme}>
      {theme === 'light' ? (
        <IoMoonOutline size="16px" />
      ) : (
        <IoMoon size="16px" />
      )}
      <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
    </Switcher>
  );
};
