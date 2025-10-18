import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TarefasProvider } from "./context/TarefasContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TarefasProvider>
      <App />
    </TarefasProvider>
  </React.StrictMode>
);
