import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BsCartCheck } from "react-icons/bs";
import { AppContext } from "../../context/AppContext";

const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext);


  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">Conf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <BsCartCheck size={20} />
        </Link>
        {cart.length > 0 && (
          <div className="Header-alert">{cart.length}</div>
        )}
      </div>
    </header>
  );
};

export { Header };
