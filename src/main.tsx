import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Route } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { StoreProvider } from "./context/Store/StoreProvider.tsx";
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from "./context/Auth/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
      <StoreProvider>
        <Route>
          <App />
        </Route>
      </StoreProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
