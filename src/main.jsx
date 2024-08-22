import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PortafolioProvider } from "./context/PortafolioProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <PortafolioProvider>
    <Analytics />
      <ToastContainer
        autoClose="2000"
        closeOnClick
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
      <App />
    </PortafolioProvider>
);
