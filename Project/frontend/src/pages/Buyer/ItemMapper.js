import Item from "../../components/Item";
import { UseItemContext } from "../../context/useItemContext";

export const ItemMapper = () => {
  const { items } = UseItemContext();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "3px",
      }}
    >
      {items
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
  );
};
