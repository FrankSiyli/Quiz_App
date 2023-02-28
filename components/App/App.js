import Header from "../Header/Header.js";
import Form from "../Form/Form.js";
import Card from "../Card/Card.js";

export function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}
