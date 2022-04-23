import Application from "./containers/Application/Application";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<Application />);
