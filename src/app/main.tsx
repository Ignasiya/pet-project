import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Providers } from "./providers";
import { App } from "./App";
import "normalize.css";
import "./styles/index.scss";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Providers>
        <App />
      </Providers>
    </StrictMode>
  );
} else {
  console.error('Failed to find root element with id "root"');
}
