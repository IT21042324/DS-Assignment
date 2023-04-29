import { useContext, useEffect } from "react";
import { useBackendAPI } from "./useBackendAPI";
import { AdminOrderContext } from "./adminOrdersContext";

export const useAdminOrderContext = () => {
  const { getAllStoreOrders } = useBackendAPI();
  const adminOrderContext = useContext(AdminOrderContext);

  const { dispatch, orders } = adminOrderContext;

  useEffect(() => {
    async function getStoreInfo() {
      const allStoreOrders = await getAllStoreOrders();

      dispatch({
        type: "AddOrder",
        payload: {
          orders: allStoreOrders,
        },
      });
    }

    getStoreInfo();
  }, []);

  return { adminOrderContext, dispatch, orders };
};
