import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";
import "./styles/fonts.scss";
import "./styles/main.scss";
import "react-loading-skeleton/dist/skeleton.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
