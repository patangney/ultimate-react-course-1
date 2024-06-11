import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
// import pizza data
import { pizzaData } from "./data";

function App() {
  return (
    <div>
      <h1>Our Menu</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <Fragment>
      <h2>Pizza Margherita</h2>
      <img src="pizzas/margherita.jpg" alt="Pizza Margherita" />
      <p>Tomato and mozarella</p>
      <p>Price: $10</p>
    </Fragment>
  );
}

export default App;
