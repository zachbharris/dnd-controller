import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import { justWhite, soulBlack } from "./theme/colors";
import Routes from "./routes";

const theme = {
  mode: "default"
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Routes />
      </>
    </ThemeProvider>
  );
};

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${soulBlack};
    color: ${justWhite};
  }
`;

export default App;
