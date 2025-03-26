// render.js oder main.js
import { App } from "./App.js";

export function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
