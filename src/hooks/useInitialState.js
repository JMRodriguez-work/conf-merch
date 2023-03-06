import React, { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (indexToRemove) => {
    setState({
      ...state,
      cart: state.cart.filter((_, index) => index !== indexToRemove),
    });
  };

  const totalPriceCart = state.cart.reduce((acum, current) => acum + current.price, 0);

  return {
    state,
    addToCart,
    removeFromCart, 
    totalPriceCart,
  };
};

export default useInitialState;
