import { BrowserRouter } from "react-router-dom";
import Router from "./route/router";
import "./App.css";

function App(props) {
  return (
    <BrowserRouter>
      <Router {...props} />
    </BrowserRouter>
  );
}

export default App;
