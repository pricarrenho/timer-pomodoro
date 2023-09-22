const colors = {
  black: "#13131A",
  white: "#FFFFFF",
  green: {
    300: "#00B37E",
    500: "#00875F",
    700: "#015F43",
  },
  red: {
    500: "#AB222E",
    700: "#7A1921",
  },
  gray: {
    100: "#E1E1E6",
    300: "#C4C4CC",
    400: "#8D8D99",
    500: "#7C7C8A",
    600: "#323238",
    700: "#29292E",
    800: "#202024",
    900: "#121214",
  },
  yellow: "#FBA94C",
};

const font = {
  sizes: {
    ssm: "0.75rem",
    sm: "0.875",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.5rem",
    xxl: "10rem",
  },
  family: {
    primary: "Roboto",
    secondary: "Roboto Mono",
  },
};

const border = {
  size: "4px",
};

export const themeBlack = {
  colors: {
    ...colors,
    background: colors.gray[900],
  },
  font,
  border,
};
