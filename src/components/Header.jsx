import styled from "styled-components";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

import { Container } from "./Container";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled.a.attrs({ href: "/" })`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ThemeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

export const Header = ({ theme, switchTheme }) => {
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is my contry?</Title>
          <ThemeSwitcher onClick={switchTheme}>
            {theme === "light" ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}
            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
