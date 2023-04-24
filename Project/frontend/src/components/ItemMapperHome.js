import Item from "./Item";
import { UseItemContext } from "../context/useItemContext";
import { React, useEffect, useState } from "react";

export const ItemMapperHome = () => {
  const { items } = UseItemContext();
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    setSortedItems([...items].sort(() => 0.5 - Math.random()));
  }, [items]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {sortedItems.slice(0, Math.min(sortedItems.length, 3)).map((dat) => (
        <div
          key={dat._id}
          style={{ flexBasis: `${100 / Math.min(sortedItems.length, 8)}%` }}
        >
          <Item details={dat} />
        </div>
      ))}
    </div>
  );
};
