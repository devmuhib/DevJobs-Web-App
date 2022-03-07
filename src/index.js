import React from "react";
import ReactDOM from "react-dom";
import "remixicon/fonts/remixicon.css";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
