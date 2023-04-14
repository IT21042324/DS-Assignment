import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  //The selectedUserRole is to know if the merchant, user or admin who is trying to use the login/signup page to display content accordingly

  const [user, dispatch] = useReducer(reducer, {
    user1: [],
    selectedUserRole: "",
    orders: [],
  });

  function reducer(state, action) {
    switch (action.type) {
      case "SetUser":
        return {
          ...state,
          user1: action.payload,
        };

      case "UpdateUser": {
        return {
          ...state,
          user1: action.payload,
        };
      }

      case "Logout":
        return { user1: [], selectedUserRole: "" };

      case "SetUserRole":
        return { ...state, selectedUserRole: action.userRole };

      case "ClearUserRole":
        return {
          ...state,
          selectedUserRole: "",
        };

      case "SetStore":
        return { ...state, user1: (state.user1[0].storeID = action.payload) };

      case "SetOrders": {
        return {
          ...state,
          orders: action.payload,
        };
      }

      case "ConfirmDelivery": {
        return {
          ...state,
          orders: state.orders.map((ord) => {
            if (ord._id === action.payload._id) {
              return { ...ord, status: "Delivered" };
            } else {
              return ord;
            }
          }),
        };
      }

      case "Reviewed": {
        return {
          ...state,
          orders: state.orders.map((dat) => {
            if (dat._id === action.payload._id)
              return { ...dat, reviewed: true };
            else return dat;
          }),
        };
      }

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
