import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Feed from "./Feed";
import "./index.css";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <Feed />
    </StrictMode>,
  );
}
