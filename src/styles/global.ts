import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      background: ${theme.colors.background};
      color: ${theme.colors.white};
    }

    body,
    h1,
    h2,
    h3 {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family.primary}, sans-serif;
      font-weight: 400;
      font-size: ${theme.font.sizes.md};
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${theme.colors.green[100]};
    }

    button {
      cursor: pointer;
    }
  `}
`;
