import { createContext, useReducer } from "react";
import React from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  //The selectedUserRole is to know if the merchant, user or admin who is trying to use the login/signup page to display content accordingly

  const [user, dispatch] = useReducer(reducer, {
    user1: [],
    selectedUserRole: "",
  });

  function reducer(state, action) {
    switch (action.type) {
      case "SetUser":
        return {
          user1: action.payload,
          selectedUserRole: state.selectedUserRole,
        }; //data is sent here as an array using axios since only one user
      case "Logout":
        return { user1: [], selectedUserRole: "" };
      case "SetUserRole":
        return { user1: state.user1, selectedUserRole: action.userRole };
      case "ClearUserRole":
        return {
          user1: state.user1,
          selectedUserRole: "",
        };
      default:
        return state;
    }
  }

  return (
    <UserContext.Provider
      value={{
        user1: user.user1,
        selectedUserRole: user.selectedUserRole,
        dispatch,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
