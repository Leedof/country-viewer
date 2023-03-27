import styled from "styled-components";
import { IoMoonOutline, IoMoon } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Container } from "./Container";

const HeaderEl = styled.header`
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.colors.uiBase};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({ to: "/" })`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fs.small};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fw.bold};
`;

const ThemeSwitcher = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fs.small};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fw.bold};
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
              <IoMoonOutline size="16px" />
            ) : (
              <IoMoon size="16px" />
            )}
            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
