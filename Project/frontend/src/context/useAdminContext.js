import { useContext, useEffect } from "react";
import { AdminContext } from "./adminContext";
import { useBackendAPI } from "./useBackendAPI";

export const useAdminContext = () => {
  const { getUserCountForAdmin } = useBackendAPI();
  const adminContext = useContext(AdminContext);

  const { dispatch, content } = adminContext;

  useEffect(() => {
    async function getStoreInfo() {
      const dashBoardDetails = await getUserCountForAdmin();

      dispatch({
        type: "SetDashBoardDetails",
        payload: {
          dashBoardDetails,
        },
      });
    }

    getStoreInfo();
  }, []);

  return { dispatch, content };
};
