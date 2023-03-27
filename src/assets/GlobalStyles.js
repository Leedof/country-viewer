import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  box-sizing: border-box;
  color:${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.family};
  font-weight: ${({ theme }) => theme.fw.light};
  background-color: ${({ theme }) => theme.colors.bg};

}
a {
	text-decoration: none;
}
ul {
	list-style: none;
}
`;
