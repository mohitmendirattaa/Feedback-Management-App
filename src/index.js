import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";
const root = createRoot(document.getElementById("root"));

/* root.render(<h1>My App</h1>); */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
