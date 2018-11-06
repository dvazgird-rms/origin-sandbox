import React from "react";

import { ThemeProvider, Button } from "origin-react";

function App() {
  return (
    <div>
      <p>Hello World!</p>
      <ThemeProvider>
        <Button label="Click Me" />
      </ThemeProvider>
      <Button label="Click Me" />
    </div>
  );
}

export default App;
