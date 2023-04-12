import { useContext, useEffect } from "react";
import { SellerOrderContext } from "./sellerOrderContext";
import { useBackendAPI } from "./useBackendAPI";
import { UseUserContext } from "./useUserContext";

export const useSellerOrderContext = () => {
  const { getUser } = UseUserContext();

  const { getAllItemsFromOneStore } = useBackendAPI();
  const sellerOrderContext = useContext(SellerOrderContext);

  const { dispatch, orders } = sellerOrderContext;

  const user = getUser();

  useEffect(() => {
    async function getStoreInfo() {
      const data = await getAllItemsFromOneStore(user.storeID);
      dispatch({
        type: "AddOrder",
        payload: data,
      });
    }
    getStoreInfo();
  }, [dispatch]);

  return { sellerOrderContext, dispatch, orders };
};
