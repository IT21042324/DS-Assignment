import { createContext, useReducer } from "react";
import React from "react";

export const AdminContext = createContext();

export const AdminContextProvider = (props) => {
  const [content, dispatch] = useReducer(reducer, {
    dashBoardDetails: {},
  });

  function reducer(state, action) {
    switch (action.type) {
      case "SetDashBoardDetails":
        return {
          dashBoardDetails: action.payload.dashBoardDetails,
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
