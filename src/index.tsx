import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Post from "./Post";
import "./index.css";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <Post image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=400&fit=crop"/>
      <Post image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=400&fit=crop"/>
      <Post image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=400&fit=crop"/>
      <Post image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=400&fit=crop"/>
    </StrictMode>,
  );
}
