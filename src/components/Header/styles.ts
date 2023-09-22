import { css, styled } from "styled-components";

export const HeaderContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const ImageLogo = styled.img``;

export const Menu = styled.nav`
  ${({ theme }) => css`
    display: flex;
    gap: 8px;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${theme.colors.gray[100]};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${theme.colors.green[300]};
      }

      &.active {
        color: ${theme.colors.green[300]};
      }
    }
  `}
`;
