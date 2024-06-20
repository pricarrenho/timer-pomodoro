import { css, styled } from "styled-components";

export const CountdownContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: ${theme.font.family.secondary}, monospace;
    font-size: ${theme.font.sizes.xl};
    line-height: 1rem;

    color: ${theme.colors.gray[100]};

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.xxl};
      line-height: 8rem;
      gap: 1rem;
    }
  `}
`;

export const Countdown = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.gray[700]};
    padding: 1.5rem;
    border-radius: ${theme.border.size};

    @media (min-width: 800px) {
      padding: 2rem 1rem;
    }
  `}
`;

export const CountdownSeparator = styled.span`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    width: 1rem;
    overflow: hidden;

    color: ${theme.colors.green[500]};

    @media (min-width: 800px) {
      padding: 2rem 0;
      width: 4rem;
    }
  `}
`;
