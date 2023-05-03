import { createContext, useReducer } from "react";
import React from "react";

export const AdminUserContext = createContext();

export const AdminUserContextProvider = (props) => {
  const [content, dispatch] = useReducer(reducer, {
    users: [],
  });

  function reducer(state, action) {
    switch (action.type) {
      case "SetUsers":
        return {
          users: action.payload.data,
        };
      case "DeleteUser":
        return {
          users: state.users.filter((ord) => ord._id !== action.payload._id),
        };
      default:
        return state;
    }
  }

  return (
    <AdminUserContext.Provider value={{ content, dispatch }}>
      {props.children}
    </AdminUserContext.Provider>
  );
};
