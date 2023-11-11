import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import PokemonProvider from "./component/provider/PokemonProvider.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PokemonProvider>
        <App/>
      </PokemonProvider>
    </BrowserRouter>
  </React.StrictMode>
);
