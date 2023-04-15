import { createContext, useReducer } from "react";
import React from "react";

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(reducer, {
    info: [],
  });

  function reducer(state, action) {
    switch (action.type) {
      case "CreateCart":
        return { info: action.payload };
      case "UpdateCart":
        return {
          info: [
            ...state.info.filter((dat) => dat.itemID !== action.payload.itemID),
            action.payload,
          ],
        };
      case "ClearCart":
        return {
          info: [],
        };
      case "RemoveFromCart":
        return {
          info: [...state.info.filter((dat) => dat.itemID !== action.payload)],
        };
      default:
        return state;
    }
  }

  return (
    <CartContext.Provider value={{ ...cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
