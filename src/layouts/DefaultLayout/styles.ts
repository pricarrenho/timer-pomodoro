import { css, styled } from "styled-components";

export const LayoutContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 74rem;
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2.5rem;
    background-color: ${theme.colors.gray[800]};
    border-radius: ${theme.border.size};
  `}
`;
