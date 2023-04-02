import { createContext, useReducer } from "react";
import React from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const [user, dispatch] = useReducer(reducer, {
    user1: [],
  });

  function reducer(state, action) {
    switch (action.type) {
      case "SetUser":
        return { user1: action.payload }; //data is sent here as an array using axios since only one user
      default:
        return state;
    }
  }

  return (
    <UserContext.Provider value={{ ...user, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
