import React from "react";
import { ThemeProvider } from "styled-components";

// import { ThemeProvider, Button } from "origin-react";
import getConfig from "radius";
import generateLoader from "radius";

function App() {
  console.log("get config", getConfig);
  console.log("generate loader", generateLoader);
  return (
    <div>
      <h1>Radius/Origin Sandbox</h1>
      {/* <p>Origin Button wrapped with ThemeProvider (default props)</p>
      <ThemeProvider>
        <Button label="Click Me" />
      </ThemeProvider>
      <p>Origin Button without ThemeProvider</p>
      <Button label="Click Me" /> */}
      <p>button wrapped with ThemeProvider</p>
      <ThemeProvider theme={generateLoader}>
        <button>Click Me!</button>
      </ThemeProvider>
    </div>
  );
}

export default App;
