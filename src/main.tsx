import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Route } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { StoreProvider } from "./context/Store/StoreProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <Route>
        <App />
      </Route>
    </StoreProvider>
  </React.StrictMode>
);
