import { useContext } from "react";
import { CartContext } from "./cartContext";

export const useCartContext = () => {
  const cartContext = useContext(CartContext);
  const { dispatch, info } = cartContext;

  return { cartContext, dispatch, info };
};
