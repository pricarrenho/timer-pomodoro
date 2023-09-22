import { DefaultTheme, css, styled } from "styled-components";
import { StatusStyleType } from "./types";

export const HistoryContainer = styled.div`
  ${() => css`
    flex: 1;
    padding: 3.5rem;

    display: flex;
    flex-direction: column;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    color: ${theme.colors.gray[100]};
  `}
`;

export const HistoryList = styled.div`
  ${() => css`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;
  `}
`;

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${theme.colors.gray[600]};
      padding: 1em;
      text-align: left;
      color: ${theme.colors.gray[100]};
      font-size: ${theme.font.sizes.sm};
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: ${theme.border.size};
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: ${theme.border.size};
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${theme.colors.gray[700]};
      border-top: 4px solid ${theme.colors.gray[800]};

      padding: 1rem;
      font-size: ${theme.font.sizes.sm};
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  `}
`;

type StatusProps = {
  styleType: StatusStyleType;
};

const StatusWrapperModifier = {
  yellow: (theme: DefaultTheme) => css`
    background: ${theme.colors.yellow};
  `,
  red: (theme: DefaultTheme) => css`
    background: ${theme.colors.red[500]};
  `,
  green: (theme: DefaultTheme) => css`
    background: ${theme.colors.green[500]};
  `,
};

export const Status = styled.span<StatusProps>`
  ${({ theme, styleType }) => css`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: "";
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${theme.colors.red[500]};

      ${styleType && StatusWrapperModifier[styleType](theme)}
    }
  `}
`;
