import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { AuthProvider } from "./context/authProvider";
import "./i18n/i18n";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
