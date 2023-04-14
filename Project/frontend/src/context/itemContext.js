import { createContext, useReducer } from "react";
import React from "react";

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

      case "AddReview":
        //[{userID, userName, rating, review},...{}] what a review contains
        //the payload struture {_id (item), userID, userName, rating, review}
        return {
          ...state,
          items: state.items.map((itm) => {
            if (itm._id === action.payload._id) {
              return {
                ...itm,
                reviews: [
                  ...itm.reviews,
                  {
                    userID: action.payload.userID,
                    userName: action.payload.userName,
                    rating: action.payload.rating,
                    review: action.payload.review,
                  },
                ],
              };
            } else {
              return itm;
            }
          }),
        };

      case "DeleteReview": {
        return {
          ...state,
          items: state.items.map((itm) => {
            if (itm._id === action.payload._id) {
              return {
                ...itm,
                reviews: itm.reviews.filter(
                  (rev) => rev.userID !== action.payload.userID
                ),
              };
            } else return itm;
          }),
        };
      }

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
