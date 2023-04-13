import { createContext, useReducer } from "react";
import React from "react";

export const AdminContext = createContext();

export const AdminContextProvider = (props) => {
  const [content, dispatch] = useReducer(reducer, {
    users: [],
    orders: [],
    dashBoardDetails: {},
  });

  function reducer(state, action) {
    switch (action.type) {
      case "AddOrder":
        return {
          users: action.payload.data,
          orders: action.payload.orders,
          dashBoardDetails: action.payload.dashBoardDetails,
        };
      case "ConfirmOrder":
        return {
          ...state,
          orders: state.orders.map((ord) =>
            ord._id === action.payload._id
              ? { ...ord, status: "Confirmed" }
              : ord
          ),
        };
      case "DeleteUser":
        return {
          ...state,
          users: state.users.filter((ord) => ord._id !== action.payload._id),
        };

      default:
        return state;
    }
  }

  return (
    <AdminContext.Provider value={{ content, dispatch }}>
      {props.children}
    </AdminContext.Provider>
  );
};
