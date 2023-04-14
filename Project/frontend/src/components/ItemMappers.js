import Item from "./Item";
import { UseItemContext } from "../context/useItemContext";
import { React, useState } from "react";
import { SearchBar } from "./SearchComponent";

export const ItemMapper = () => {
  const { items } = UseItemContext();
  const [search, setSearch] = useState("");

  function getSearchValue(searchResult) {
    setSearch(searchResult);
  }

  return (
    <div>
      <SearchBar functionSearch={getSearchValue} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around"
        }}
      >
        {items
          .filter((dat) => {
            return (
              dat.itemName.toLowerCase().includes(search.toLowerCase()) ||
              dat.storeName.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map((dat) => (
            <div
              key={dat._id}
              style={{ flexBasis: `${100 / Math.min(items.length, 8)}%` }}
            >
              <Item details={dat} key={dat._id} />
            </div>
          ))}
      </div>
    </div>
  );
};

export const ItemMapperHome = () => {
  const { items } = UseItemContext();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
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
