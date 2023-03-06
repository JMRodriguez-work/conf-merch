import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BsCartCheck } from 'react-icons/bs'

const Header = () => {
  return (
    <header className="Header">
      <h1 className="Header-title">
        <Link to="/">Conf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout"><BsCartCheck size={20} /></Link>
      </div>
    </header>
  );
};

export { Header };
