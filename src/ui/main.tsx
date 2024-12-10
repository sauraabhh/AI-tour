import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// Create the root element
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
}
