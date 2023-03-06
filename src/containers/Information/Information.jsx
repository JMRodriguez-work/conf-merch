import React, { useRef, useContext } from "react";
import "./Information.css";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Information = () => {
  const {
    state: { cart },
    addToBuyer,
    totalPriceCart,
  } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = () => {
    const formData = new FormData(form.current);
    // const buyer = {
    //   name: formData.get("name"),
    //   email: formData.get("email"),
    //   address: formData.get("address"),
    //   apto: formData.get("apto"),
    //   "city:": formData.get("city"),
    //   country: formData.get("country"),
    //   state: formData.get("state"),
    //   cp: formData.get("cp"),
    //   phone: formData.get("phone"),
    // };
    const buyer = Object.fromEntries(formData)
    addToBuyer(buyer);
    navigate('/checkout/payment')
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto: </h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input
              id="name"
              type="text"
              placeholder="Nombre completo"
              name="name"
            />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">
              <button type="button">Regresar</button>
            </Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div key={`Information: ${item.id}`} className="Information-item">
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <h3 className="Information-total">Total: ${totalPriceCart}</h3>
      </div>
    </div>
  );
};

export { Information };
