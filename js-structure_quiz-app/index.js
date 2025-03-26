import App from "./components/App.js";
import Header from "./components/Header.js";
import Form from "./components/Form.js";
import Bookmark from "./components/Bookmark.js";
import Card from "./components/Card.js";
import CardList from "./components/CardList.js";
import cards from "./data/cards.js"; // Import the cards data

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
