import { useContext, useEffect } from "react";
import { CartContext } from "./cartContext";

export const useCartContext = () => {
  const cartContext = useContext(CartContext);
  const { dispatch, info } = cartContext;

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      dispatch({
        type: "CreateCart",
        payload: JSON.parse(localStorage.getItem("cart")),
      });
    }
  }, []);

  function updateCart(data) {
    if (localStorage.getItem("cart") === null)
      localStorage.setItem("cart", JSON.stringify([data]));
    else {
      // cart exists, update it
      let cart = JSON.parse(localStorage.getItem("cart"));

      cart = [...cart.filter((dat) => dat.itemID !== data.itemID), data];

      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
  function clearCart() {
    localStorage.removeItem("cart");
  }
  function getCart() {
    if (localStorage.getItem("cart")) return localStorage.getItem("cart");
    else return [];
  }

  return { cartContext, dispatch, info, updateCart, clearCart, getCart };
};
