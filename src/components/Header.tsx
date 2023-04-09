import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { ThemeSwitcher } from 'features/theme/ThemeSwitcher';

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

const Title = styled(Link).attrs({ to: '/' })`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fs.small};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fw.bold};
`;

export const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is my contry?</Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
