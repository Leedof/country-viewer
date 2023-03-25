import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radius);
  box-shadow: var(--shadow);
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
  type: "search",
  placeholder: "Enter country name",
})`
  margin-left: 2rem;
  overflow: hidden;
  border: none;
  outline: none;
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
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
