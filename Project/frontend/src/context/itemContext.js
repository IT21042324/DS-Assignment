import { createContext, useReducer } from "react";
import React from 'react';

export const ItemContext = createContext();

export const ItemContextProvider = (props) => {
  const [item, dispatch] = useReducer(reducer, {
    items: [],
  });

  function reducer(state, action) {
    switch (action.type) {
      case "CreateItem":
        return { items: [action.payload, ...state.items] };
      case "SetItems":
        return { items: action.payload };
      case "DeleteItems":
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
    <ItemContext.Provider value={{ ...item, dispatch }}>
      {props.children}
    </ItemContext.Provider>
  );
};
