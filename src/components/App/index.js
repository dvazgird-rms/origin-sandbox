import React from "react";

import { ThemeProvider, Button } from "origin-react";

function App() {
  return (
    <div>
      <h1>Origin Sandbox</h1>
      <p>Origin Button wrapped with ThemeProvider (default props)</p>
      <ThemeProvider>
        <Button label="Click Me" />
      </ThemeProvider>
      <p>Origin Button without ThemeProvider</p>
      <Button label="Click Me" />
      <p>Non-Origin Button wrapped with ThemeProvider</p>
      <ThemeProvider>
        <button>Click Me!</button>
      </ThemeProvider>
    </div>
  );
}

export default App;
