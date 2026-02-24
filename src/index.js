import "./styles.css";
import { initDomEvents } from "./modules/domHandlers";
import { renderAll } from "./modules/taskActions";

document.addEventListener("DOMContentLoaded", () => {
  initDomEvents();
  renderAll();
});
