import { css, styled } from "styled-components";

export const HomeContainer = styled.div`
  ${() => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const Form = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  `}
`;

const BaseCountdownButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: ${theme.border.size};

    font-weight: bold;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `}
`;

export const CountdownButton = styled(BaseCountdownButton)`
  ${({ theme }) => css`
    background: ${theme.colors.green[500]};
    color: ${theme.colors.gray[100]};

    &:not(:disabled):hover {
      background: ${theme.colors.green[700]};
    }
  `}
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  ${({ theme }) => css`
    background: ${theme.colors.red[500]};
    color: ${theme.colors.gray[100]};

    &:not(:disabled):hover {
      background: ${theme.colors.red[700]};
    }
  `}
`;
