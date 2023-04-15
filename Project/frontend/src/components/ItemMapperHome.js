import Item from "./Item";
import { UseItemContext } from "../context/useItemContext";
import { React } from "react";

export const ItemMapperHome = () => {
  const { items } = UseItemContext();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {items
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.min(items.length, 3))
        .map((dat) => (
          <div
            key={dat._id}
            style={{ flexBasis: `${100 / Math.min(items.length, 8)}%` }}
          >
            <Item details={dat} />
          </div>
        ))}
    </div>
  );
};
