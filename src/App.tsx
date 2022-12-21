import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./layouts/styles/theme";

import { Home } from "./pages/Home";
import { Globals } from "./layouts/styles/global";
function App() {
  return (
    <main id="wrapper">
      <ThemeProvider theme={DefaultTheme}>
        <Home />
        <Globals />
      </ThemeProvider>
    </main>
  );
}

export default App;
