import Router from "./router/Router";
import theme from "./constants/theme";
import React from "react"
import { ThemeProvider } from "@material-ui/core";



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}
export default App;
