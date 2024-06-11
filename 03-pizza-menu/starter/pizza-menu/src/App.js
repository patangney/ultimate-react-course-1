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
        <div>
          <h3>{name}</h3>
          <p>{ingredients}</p>
        </div>
        {soldOut ? <p>Sold Out</p> : <p>€{price}</p>}
      </div>
    </Fragment>
  );
}

const Header = () => {
  const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  return (
    <Fragment>
      <header className="header">
        <h1 style={style}>Welcome to Pizza Place</h1>
      </header>
    </Fragment>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 23;
  if (hour >= openHour && hour < closeHour) {
    return (
      <footer className="footer">
        {new Date().toLocaleTimeString().slice(0, 5)} We're currently open
      </footer>
    );
  } else {
    return <footer>We're currently closed</footer>;
  }
};

const Menu = () => {
  return (
    <Fragment>
      <main className="menu">
        <h2>Our Menu</h2>
        <div className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza key={pizza.id} {...pizza} />
          ))}
        </div>
      </main>
    </Fragment>
  );
};

export default App;
