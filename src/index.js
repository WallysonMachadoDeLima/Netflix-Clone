import React from "react";
import ReactDOM from "react-dom/client";
import Rotas from "./routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  </React.StrictMode>
);
