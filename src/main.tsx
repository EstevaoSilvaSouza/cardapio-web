import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Route } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { StoreProvider } from "./context/Store/StoreProvider.tsx";
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <StoreProvider>
        <Route>
          <App />
        </Route>
      </StoreProvider>
    </ChakraProvider>
  </React.StrictMode>
);
