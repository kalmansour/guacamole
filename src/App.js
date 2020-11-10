import "./App.css";
// import React, { useState } from "react";

//componets
import HoleList from "./components/HoleList";

//styling
import { Title, GlobalStyle, theme } from "./styles";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Title>Guac-A-Mole</Title>
      <HoleList />
    </ThemeProvider>
  );
}

export default App;
