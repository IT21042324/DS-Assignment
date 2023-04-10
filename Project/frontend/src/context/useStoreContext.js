import { useContext, useEffect } from "react";
import { StoreContext } from "./storeContext";
import { UseUserContext } from "./useUserContext";
import axios from "axios";

export const UseStoreContext = () => {
  const storeContext = useContext(StoreContext);
  const { dispatch, items } = storeContext;
  const { user1 } = UseUserContext();

  useEffect(() => {
    async function fetchData() {
      if (user1[0]?.role === "Merchant")
        try {
          const { data } = await axios.get(
            "http://localhost:8082/api/store/get/" + user1[0].storeID
          );

          const { storeItem } = data;
          dispatch({
            type: "SetItems",
            payload: storeItem,
          });
        } catch (err) {
          console.log(err);
        }
    }
    fetchData();
  }, [dispatch, user1]);
  return { storeContext, dispatch, items };
};