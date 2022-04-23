import Application from "./containers/Application/Application";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>
);
