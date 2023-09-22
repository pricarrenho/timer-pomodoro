import { css, styled } from "styled-components";

export const CountdownContainer = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary}, monospace;
    font-size: ${theme.font.sizes.xxl};
    line-height: 8rem;

    color: ${theme.colors.gray[100]};

    display: flex;
    gap: 1rem;
  `}
`;

export const Countdown = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.gray[700]};
    padding: 2rem 1rem;
    border-radius: ${theme.border.size};
  `}
`;

export const CountdownSeparator = styled.span`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    width: 4rem;
    overflow: hidden;

    color: ${theme.colors.green[500]};
  `}
`;
