import { createContext, useReducer } from "react";
import React from "react";

export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
  const [store, dispatch] = useReducer(reducer, {
    items: [],
    reviews: [],
  });

  function reducer(state, action) {
    switch (action.type) {
      case "AddItem":
        return { ...state, items: [action.payload, ...state.items] };
      case "SetItems":
        return { ...state, items: action.payload }; //we will anyways send data here as an array using axios
      case "ModifyItem":
        return {
          ...state,
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
          ...state,
          items: state.items.filter((data) => {
            return data._id !== action.payload._id;
          }),
        };
      case "AddReview":
        return {
          ...state,
          reviews: [...state.reviews, action.payload],
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
