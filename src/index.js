import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { GiftExpertApp } from "./GiftExpertApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GiftExpertApp />
  </StrictMode>
);
