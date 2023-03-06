import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";
import { BsTrash } from 'react-icons/bs'
import { AppContext } from "../../context/AppContext";

const Checkout = () => {

  const {
    state: {cart},
    removeFromCart,
    totalPriceCart
  } = useContext(AppContext);

  const handleRemove = (index) => {
    removeFromCart(index);
  }

  if(cart.length === 0) return <h3>Sin pedidos</h3>

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de pedidos:</h3>
        {cart.map((item, index) => (
          <div key={`Checkout: ${item.id}`} className="Checkout-item">
          <div className="Checkout-element">
            <h4>{item.title}</h4>
            <span>${item.price}</span>
          </div>
          <button className="fas" type="button">
            <BsTrash size={15} onClick={() => handleRemove(index)} />
          </button>
        </div>
        ))}
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio total: ${totalPriceCart}</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export { Checkout };
