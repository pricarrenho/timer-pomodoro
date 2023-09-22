import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global.ts";
import { themeBlack } from "./styles/theme.ts";
import { CyclesContextProvider } from "./contexts/CyclesContexts.tsx";

export function App() {
  return (
    <ThemeProvider theme={themeBlack}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Routes />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
