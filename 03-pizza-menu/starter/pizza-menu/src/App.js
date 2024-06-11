import logo from "./logo.svg";
import "./index.css";

import { Fragment } from "react";
// import pizza data
import pizzaData from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza(props) {
  const { name, ingredients, price, photoName, soldOut } = props;

  return (
    <Fragment>
      <div className="pizza">
        <img src={require(`./img/pizzas/${photoName}`)} alt={name} />
        <li>
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <span>{soldOut ? <p>Sold Out</p> : <p>€{price}</p>}</span>
        </li>
      </div>
    </Fragment>
  );
}

const Header = () => {
  // const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  return (
    <Fragment>
      <header className="header">
        <h1>Welcome to Pizza Place</h1>
      </header>
    </Fragment>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour < closeHour;
  return (
    <Fragment>
      <footer className="footer">
        {isOpen ? (
          <Fragment>
            <p>
              We are open until {closeHour}:00. Come visit us or order online
            </p>
            <button className="center btn">Order</button>
          </Fragment>
        ) : (
          <p>We are currently closed - we are open tomorrow at {openHour}pm</p>
        )}
      </footer>
    </Fragment>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <Fragment>
      <main className="menu">
        <h2>Our Menu</h2>

        {numPizzas > 0 ? (
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.id} {...pizza} />
            ))}
          </ul>
        ) : (
          <p>No pizzas available</p>
        )}
      </main>
    </Fragment>
  );
};

export default App;
