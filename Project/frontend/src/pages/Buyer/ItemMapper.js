import Item from "../../components/Item";
import { UseItemContext } from "../../context/useItemContext";
import { React, useState } from "react";
import SeachBar from "../../components/SearchComponent";

export const ItemMapper = () => {
  const { items } = UseItemContext();
  const [search, setSearch] = useState("");

  function getSearchValue(searchResult) {
    setSearch(searchResult);
  }

  return (
    <div>
      <SeachBar functionSearch={getSearchValue} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "3px",
        }}
      >
        {items
          .filter((dat) => {
            return (
              dat.itemName.toLowerCase().includes(search.toLowerCase()) ||
              dat.storename.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map((dat) => (
            <div
              key={dat._id}
              style={{ flexBasis: `${100 / Math.min(items.length, 3)}%` }}
            >
              <Item details={dat} />
            </div>
          ))
          .sort(() => 0.5 - Math.random())}
      </div>
    </div>
  );
};
