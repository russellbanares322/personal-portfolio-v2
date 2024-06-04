import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import "@splidejs/react-splide/css";
import PageProvider from "./context/PageContext.js";
import { Toaster } from "react-hot-toast";
import "aos/dist/aos.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageProvider>
      <App />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
        }}
      />
    </PageProvider>
  </React.StrictMode>
);
