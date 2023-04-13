import { createContext, useReducer } from "react";
import React from "react";

export const SellerOrderContext = createContext();

export const SellerOrderContextProvider = (props) => {
  const [order, dispatch] = useReducer(reducer, {
    orders: [],
    dashBoardDetails: {},
  });

  function reducer(state, action) {
    switch (action.type) {
      case "AddOrder":
        return {
          orders: action.payload.data,
          dashBoardDetails: action.payload.dashBoardDetails,
        };
      case "DispatchOrder":
        return {
          ...state,
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
    <SellerOrderContext.Provider value={{ order, dispatch }}>
      {props.children}
    </SellerOrderContext.Provider>
  );
};
