import { createContext, useReducer } from "react";
import React from "react";

export const AdminOrderContext = createContext();

export const AdminOrderContextProvider = (props) => {
  const [order, dispatch] = useReducer(reducer, {
    orders: [],
  });

  function reducer(state, action) {
    switch (action.type) {
      case "AddOrder":
        return {
          orders: action.payload.orders,
        };
      case "ConfirmOrder":
        return {
          orders: state.orders.map((ord) =>
            ord._id === action.payload._id
              ? { ...ord, status: "Confirmed" }
              : ord
          ),
        };

      default:
        return state;
    }
  }

  return (
    <AdminOrderContext.Provider value={{ ...order, dispatch }}>
      {props.children}
    </AdminOrderContext.Provider>
  );
};
