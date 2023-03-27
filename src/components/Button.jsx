import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.uiBase};
  box-shadow: ${({ theme }) => theme.shadow};
  line-height: 1.5;
  border-radius: ${({ theme }) => theme.radius};

  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;
