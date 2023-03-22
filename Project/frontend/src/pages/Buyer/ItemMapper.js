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
      {items.slice(0, 3).map((dat) => (
        <div key={dat._id} style={{ flexBasis: "33.33%" }}>
          <Item details={dat} />
        </div>
      ))}
    </div>
  );
};
