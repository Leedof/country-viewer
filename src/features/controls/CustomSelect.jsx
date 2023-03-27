import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs(({ theme }) => ({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: theme.colors.uiBase,
      color: theme.colors.text,
      borderRadius: theme.radius,
      padding: '0.25rem',
      border: 'none',
      boxShadow: theme.shadow,
      height: '50px',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: theme.colors.text,
      backgroundColor: state.isSelected
        ? theme.colors.bg
        : state.isFocused
        ? theme.colors.bg
        : theme.colors.uiBase,
    }),
  },
}))`
  width: 200px;
  border-radius: ${({ theme }) => theme.radius};
  font-family: ${({ theme }) => theme.family};
  border: none;
  & > * {
    box-shadow: ${({ theme }) => theme.shadow};
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: ${({ theme }) => theme.colors.text} !important;
  }
  & > div[id] {
    background-color: ${({ theme }) => theme.colors.uiBase};
  }
`;
