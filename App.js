import React from "react";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ThemeProvider } from "styled-components";
import themes from "./src/themes";

export default function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <HomeScreen />
    </ThemeProvider>
  );
}
