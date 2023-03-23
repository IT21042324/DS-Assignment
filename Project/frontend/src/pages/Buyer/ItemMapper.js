import { useState } from "react";
import Item from "../../components/Item";
import { UseItemContext } from "../../context/useItemContext";

export const ItemMapper = () => {
  const { items } = UseItemContext();

  const [search, setSearch] = useState("");

  return (
    <div>
      <div
        class="input-group"
        style={{ width: "30%", float: "right", marginRight: "20px" }}
      >
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button" class="btn btn-outline-primary">
          search
        </button>
      </div>
      <br />
      <br />
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
          .sort(() => 0.5 - Math.random())
          .map((dat) => (
            <div
              key={dat._id}
              style={{ flexBasis: `${100 / Math.min(items.length, 3)}%` }}
            >
              <Item details={dat} />
            </div>
          ))}
      </div>
    </div>
  );
};
