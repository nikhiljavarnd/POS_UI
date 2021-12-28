import { BrowserRouter } from "react-router-dom";
import Router from "./route/router";
import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#ffb80e",
    },
    secondary: {
      main: "#982121",
    },
  },
});

function App(props) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router {...props} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
