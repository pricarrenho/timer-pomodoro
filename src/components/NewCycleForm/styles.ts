import { css, styled } from "styled-components";

export const FormContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 0.8rem;
    flex-wrap: wrap;

    color: ${theme.colors.gray[100]};

    font-size: ${theme.font.sizes.md};
    font-weight: bold;
  `}
`;

const BaseInput = styled.input`
  ${({ theme }) => css`
    background: transparent;
    text-align: center;
    border: 0;
    border-bottom: 2px solid ${theme.colors.gray[500]};
    font-weight: bold;
    font-size: ${theme.font.sizes.md};
    padding: 0 0.5rem;
    color: ${theme.colors.gray[100]};

    &::placeholder {
      color: ${theme.colors.gray[500]};
    }

    &:focus {
      box-shadow: none;
      border-color: ${theme.colors.green[500]};
    }
  `}
`;

export const TaskInput = styled(BaseInput)`
  ${() => css`
    flex: 1;
  `}
`;

export const MinutesAmountInput = styled(BaseInput)`
  ${() => css`
    width: 4rem;
  `}
`;
