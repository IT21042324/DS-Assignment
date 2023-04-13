import { createContext, useReducer } from "react";
import React from "react";

export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
  const [store, dispatch] = useReducer(reducer, {
    items: [],
  });

  function reducer(state, action) {
    switch (action.type) {
      case "AddItem":
        return {
          items: [action.payload, ...state.items],
        };
      case "SetItems":
        return { items: action.payload }; //we will anyways send data here as an array using axios
      case "ModifyItem":
        return {
          items: state.items.map((itm) => {
            if (itm._id === action.payload._id)
              return Object.assign({}, itm, action.payload);
            else {
              // Return original object
              return itm;
            }
          }),
        };
      case "DeleteItem":
        return {
          items: state.items.filter((data) => {
            return data._id !== action.payload._id;
          }),
        };
      default:
        return state;
    }
  }

  return (
    <StoreContext.Provider value={{ ...store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};
