import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { GifExpertApp } from "./GifExpertApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>
);
