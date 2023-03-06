import React from "react";
import "../Products/Products.css";

const Product = ({ product: { image, description, price, id, title } }) => {
  console.log(image);
  return (
    <div className="Products-item">
      <img src={image} alt={title} />
      <div className="Products-item-info">
        <h2>
          {title}
          <span>${price}</span>
        </h2>
        <p>{description}</p>
      </div>
      <button type="button">Comprar</button>
    </div>
  );
};

export { Product };
