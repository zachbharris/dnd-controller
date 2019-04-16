import React from "react";
import { ThemeProvider } from "styled-components";

// routes
import Routes from "./routes";

const theme = {
  mode: "default"
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Routes />
      </>
    </ThemeProvider>
  );
};

export default App;
