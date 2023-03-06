import React, { useContext } from "react";
import { Product } from "../index";
import { AppContext } from "../../context/AppContext";

const Products = () => {
  const {
    state: { products, cart },
    addToCart,
  } = useContext(AppContext);

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export { Products };
