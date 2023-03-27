import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.colors.uiBase};
`;

const CardImage = styled.img.attrs()`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fs.normal};
  font-weight: ${({ theme }) => theme.fw.bold};
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const CardListItem = styled.li`
  font-size: ${({ theme }) => theme.fs.small};
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fw.light};

  & > b {
    font-weight: ${({ theme }) => theme.fw.bold};
  }
`;

export const Card = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};
