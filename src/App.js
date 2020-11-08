import "./App.css";
import React, { useState } from "react";

//componets
import CircleList from "./components/CircleList";

//styling
import { Title, GlobalStyle, theme } from "./styles";
import { ThemeProvider } from "styled-components";

// const [currentCircle, setCurrentCircle] = useState();

// const toggleAvocado = () => ();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Title>Guac-A-Mole</Title>
      <CircleList />
    </ThemeProvider>
  );
}

export default App;
