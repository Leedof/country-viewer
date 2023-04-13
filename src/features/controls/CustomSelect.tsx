import styled from 'styled-components';
import Select, { OptionProps, Props } from 'react-select';
import { Regions } from 'types';
import { CSSProperties } from 'react';

export type RegionOption =
  | {
      value: Regions;
      label: Regions;
    }
  | '';

const MySelect = (props: Props<RegionOption, false>) => {
  return <Select {...props} />;
};

export const CustomSelect = styled(MySelect).attrs(({ theme }) => ({
  styles: {
    control: (base: CSSProperties) => ({
      ...base,
      backgroundColor: theme.colors.uiBase,
      color: theme.colors.text,
      borderRadius: theme.radius,
      padding: '0.25rem',
      border: 'none',
      boxShadow: theme.shadow,
      height: '50px',
    }),
    option: (base: CSSProperties, state: OptionProps<{}>) => ({
      ...base,
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
