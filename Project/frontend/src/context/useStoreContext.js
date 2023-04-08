import { useContext, useEffect } from "react";
import { StoreContext } from "./storeContext";
import { UseUserContext } from "./useUserContext";
import { useBackendAPI } from "./useBackendAPI";

export const UseStoreContext = () => {
  const { getProductsOfStore } = useBackendAPI();
  const storeContext = useContext(StoreContext);
  const { dispatch, items } = storeContext;
  const { user1 } = UseUserContext();

  useEffect(() => {
    async function fetchData() {
      if (user1[0]?.role === "Merchant")
        try {
          const storeItem = await getProductsOfStore();
          dispatch({
            type: "SetItems",
            payload: storeItem,
          });
        } catch (err) {
          console.log(err);
        }
    }
    fetchData();
  }, [dispatch]);
  return { storeContext, dispatch, items };
};
