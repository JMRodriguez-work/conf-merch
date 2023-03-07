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

  const totalPriceCart = state.cart.reduce(
    (acum, current) => acum + current.price,
    0
  );

  const addToBuyer = (data) => {
    setState({
      ...state,
      buyer: [...state.buyer, data],
    });
  };

  const addNewOrder = (order) => {
    setState({
      ...state,
      orders: [...state.orders, order],
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    totalPriceCart,
    addToBuyer,
    addNewOrder
  };
};

export default useInitialState;
