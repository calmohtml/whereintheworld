import React, { Fragment } from "react";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ThemeProvider } from "styled-components";
import themes from "./src/themes";

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={themes.dark}>
        <HomeScreen />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
