import Header from "./Header.js";
import Form from "./Form.js";
import CardList from "./CardList.js";

import App from "./components/App.js";

function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
