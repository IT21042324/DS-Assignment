import { useContext, useEffect } from "react";
import { AdminContext } from "./adminContext";
import { useBackendAPI } from "./useBackendAPI";

export const useAdminContext = () => {
  const { getAllStoreOrders, getUserCountForAdmin } = useBackendAPI();
  const adminContext = useContext(AdminContext);

  const { dispatch, content } = adminContext;

  useEffect(() => {
    async function getStoreInfo() {
      const { amountForStore, orderCount, userCount, users } =
        await getUserCountForAdmin();

      const allStoreOrders = await getAllStoreOrders();

      dispatch({
        type: "AddOrder",
        payload: {
          data: users,
          dashBoardDetails: { amount: amountForStore, orderCount, userCount },
          orders: allStoreOrders,
        },
      });
    }

    getStoreInfo();
  }, []);

  return { adminContext, dispatch, content };
};
