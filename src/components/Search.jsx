import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
  background-color: ${({ theme }) => theme.colors.uiBase};
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadow};
  width: 100%;
  margin-bottom: 1.5rem;
  & svg {
    flex: 0 0 16px;
  }

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 290px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Enter country name',
})`
  margin-left: 2rem;
  overflow: hidden;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.uiBase};
  color: ${({ theme }) => theme.colors.text};
`;

export const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </InputContainer>
  );
};
