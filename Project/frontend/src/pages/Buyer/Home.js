import { useEffect, useContext } from "react";
import { ItemContext } from "../../context/itemContext";
import axios from "axios";
import Header from "../../components/Header";
import Item from "../../components/Item";
import Footer from "../../components/Footer";

export default function Home() {
  const itemContext = useContext(ItemContext);
  const { dispatch, items } = itemContext;

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("http://localhost:8081/api/product/");
        dispatch({
          type: "SetItems",
          payload: data,
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <Header />
      {items.map((dat) => (
        <Item key={dat._id} details={dat} />
      ))}
      <Footer />
    </div>
  );
}
