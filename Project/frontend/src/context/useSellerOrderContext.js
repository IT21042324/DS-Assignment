import { useContext, useEffect } from "react";
import { SellerOrderContext } from "./sellerOrderContext";
import { useBackendAPI } from "./useBackendAPI";
import { UseUserContext } from "./useUserContext";

export const useSellerOrderContext = () => {
  const { getUser } = UseUserContext();

  const { getAllItemsFromOneStore, getStoreItemCount, getTotalSalesAmount } =
    useBackendAPI();
  const sellerOrderContext = useContext(SellerOrderContext);

  const { dispatch, order } = sellerOrderContext;

  const user = getUser();

  useEffect(() => {
    async function getStoreInfo() {
      const data = await getAllItemsFromOneStore(user.storeID);
      const itemCount = await getStoreItemCount(user.storeID);
      const { total, orderCount } = await getTotalSalesAmount(user.storeID);

      dispatch({
        type: "AddOrder",
        payload: { data, dashBoardDetails: { total, orderCount, itemCount } },
      });
    }
    getStoreInfo();
  }, []);

  return { sellerOrderContext, dispatch, order };
};
