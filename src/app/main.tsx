import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Counter } from "../components/Counter";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Counter />
    </StrictMode>
  );
} else {
  console.error('Failed to find root element with id "root"');
}
