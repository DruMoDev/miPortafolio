import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PortafolioProvider } from "./context/PortafolioProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortafolioProvider>
      <ToastContainer
        autoClose="2000"
        closeOnClick
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
      <App />
    </PortafolioProvider>
  </React.StrictMode>
);
