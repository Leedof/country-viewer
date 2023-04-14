import styled from 'styled-components';

const LoaderItem = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 6rem;
  margin-top: 3rem;
  margin-bottom: 3rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    animation: pulsOut 1.8s ease-in-out infinite;

    filter: ${({ theme }) => `drop-shadow(0 0 1rem ${theme.colors.altBase})`};
  }
  &::before {
    width: 100%;
    padding-bottom: 100%;

    box-shadow: ${({ theme }) => `inset 0 0 0 1rem ${theme.colors.altBase}`};
    animation-name: pulsIn;
  }
  &:after {
    width: calc(100% - 2rem);
    padding-bottom: calc(100% - 2rem);

    box-shadow: ${({ theme }) => `0 0 0 0 ${theme.colors.altBase}`};
  }
  @keyframes pulsIn {
    0% {
      box-shadow: ${({ theme }) => `inset 0 0 0 1rem ${theme.colors.altBase}`};

      opacity: 1;
    }
    50%,
    100% {
      box-shadow: ${({ theme }) => `inset 0 0 0 0 ${theme.colors.altBase}`};

      opacity: 0;
    }
  }

  @keyframes pulsOut {
    0%,
    50% {
      box-shadow: ${({ theme }) => `0 0 0 0 ${theme.colors.altBase}`};

      opacity: 0;
    }
    100% {
      box-shadow: ${({ theme }) => `0 0 0 1rem ${theme.colors.altBase}`};

      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
`;

export const Loader = () => {
  return (
    <Wrapper>
      <LoaderItem />
    </Wrapper>
  );
};
