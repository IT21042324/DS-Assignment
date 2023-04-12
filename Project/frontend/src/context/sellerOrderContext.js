import { createContext, useReducer } from "react";
import React from "react";

export const SellerOrderContext = createContext();

export const SellerOrderContextProvider = (props) => {
  const [order, dispatch] = useReducer(reducer, {
    orders: [],
  });

  function reducer(state, action) {
    switch (action.type) {
      case "AddOrder":
        return {
          orders: action.payload,
        };
      case "DispatchOrder":
        return {
          orders: state.orders.map((ord) =>
            ord._id === action.payload._id
              ? { ...ord, status: "Dispatched" }
              : ord
          ),
        };
      default:
        return state;
    }
  }

  return (
    <SellerOrderContext.Provider value={{ ...order, dispatch }}>
      {props.children}
    </SellerOrderContext.Provider>
  );
};
