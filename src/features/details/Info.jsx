import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNeighbors } from './use-neighbors';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 2rem;
  row-gap: 2rem;
  column-gap: 4rem;
  @media (min-width: 767px) {
    grid-template-columns: 400px 1fr;
    margin-top: 3rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 600px 1fr;
  }
`;
const InfoBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.75rem;
`;
const InfoImg = styled.img`
  width: 100%;
`;
const InfoTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fw.bold};
  font-size: ${({ theme }) => theme.fs.heading};
`;
const InfoLists = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 1.5rem;
  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fs.small};
  & > b {
    font-weight: ${({ theme }) => theme.fw.normal};
  }
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
const BordersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  & > span {
    font-weight: ${({ theme }) => theme.fw.bold};
  }
  & > div {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;
const BorderListItem = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.uiBase};
  padding: 0 1rem;
  line-height: 1.5;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadow};
  color: ${({ theme }) => theme.colors.text};
`;

export const Info = ({ currentCountry }) => {
  const { name, flag, mainInfo, otherInfo, borders } = currentCountry;
  const neighbors = useNeighbors(borders);

  return (
    <Wrapper>
      <InfoImg src={flag} />
      <InfoBody>
        <InfoTitle>{name}</InfoTitle>
        <InfoLists>
          <List>
            {mainInfo.map((el) => (
              <ListItem key={el.title}>
                <b>{el.title + ': '}</b>
                {el.value}
              </ListItem>
            ))}
          </List>
          <List>
            {otherInfo.map((el) => (
              <ListItem key={el.title}>
                <b>{el.title + ': '}</b>
                {el.value}
              </ListItem>
            ))}
          </List>
        </InfoLists>
        <BordersList>
          <span>Border countries:</span>
          <div>
            {neighbors.length === 0
              ? 'None'
              : neighbors.map((el) => (
                  <BorderListItem key={el} to={'/country/' + el}>
                    {el}
                  </BorderListItem>
                ))}
          </div>
        </BordersList>
      </InfoBody>
    </Wrapper>
  );
};
