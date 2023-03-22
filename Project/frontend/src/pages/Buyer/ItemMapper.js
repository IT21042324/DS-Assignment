import Item from "../../components/Item";
import { UseItemContext } from "../../context/useItemContext";

export const ItemMapper = () => {
  const useItemContext = UseItemContext();
  const { items } = useItemContext;

  let data = [];

  for (let i = 0; i < items.length; i++) {
    if (i > 2) break;

    data.push(items[i]);
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginLeft: 3,
      }}
    >
      {items.map((dat) => (
        <div key={dat._id} style={{ flexBasis: "33.33%" }}>
          <Item details={dat} />
        </div>
      ))}
    </div>
  );
};
