import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./layouts/styles/theme";

import { Router } from "./Routes";
import { Globals } from "./layouts/styles/global";

function App() {
  return (
    <main id="wrapper">
      <ThemeProvider theme={DefaultTheme}>
        <Router />
        <Globals />
      </ThemeProvider>
    </main>
  );
}

export default App;
