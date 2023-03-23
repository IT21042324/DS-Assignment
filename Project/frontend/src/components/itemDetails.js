import { useContext } from "react";
import { ItemContext } from "../context/itemContext";

export default function () {
  const itemContext = useContext(ItemContext);

  const { dispatch } = itemContext;

  return <div>{}</div>;
}
