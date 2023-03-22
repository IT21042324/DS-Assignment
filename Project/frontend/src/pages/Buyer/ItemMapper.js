import Item from "../../components/Item";
import { UseItemContext } from "../../context/useItemContext";

export const ItemMapper = () => {
  const { items } = UseItemContext();

  //To get only the 1st three items from the item Array
  const data = items.slice(0, 3);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginLeft: 3,
      }}
    >
      {data.map((dat) => (
        <div key={dat._id} style={{ flexBasis: "33.33%" }}>
          <Item details={dat} />
        </div>
      ))}
    </div>
  );
};
