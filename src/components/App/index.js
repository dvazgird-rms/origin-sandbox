import React from "react";
import { ThemeProvider } from "styled-components";

import getConfig from "radius";
import generateLoader from "radius";

import Button from "../Button";

function App() {
  console.log("get config", getConfig);
  console.log("generate loader", generateLoader);
  return (
    <div>
      <h1>Radius/Origin Sandbox</h1>
      <p>button wrapped with ThemeProvider using theme from radius</p>
      <ThemeProvider theme={generateLoader}>
        <Button>Click Me!</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
