import { css, styled } from "styled-components";

export const LayoutContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding-left: 16px;
    padding-right: 16px;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    margin-right: auto;
    margin-left: auto;
    width: 1120px;
    height: 600px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.gray[800]};
    border-radius: ${theme.border.size};

    @media (min-width: 800px) {
      padding: 48px;
      gap: 24px;
    }
  `}
`;
