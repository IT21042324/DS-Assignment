import { useContext, useEffect } from "react";
import { useBackendAPI } from "./useBackendAPI";
import { AdminUserContext } from "./adminUserContext";

export const useAdminUserContext = () => {
  const { getUsersForAdminPage } = useBackendAPI();
  const adminUserContext = useContext(AdminUserContext);

  const { dispatch, content } = adminUserContext;

  useEffect(() => {
    async function getAdminUserInfo() {
      const data = await getUsersForAdminPage();

      console.log(data);

      dispatch({
        type: "SetUsers",
        payload: {
          data: data.users,
        },
      });
    }

    getAdminUserInfo();
  }, []);

  return { adminUserContext, dispatch, content };
};
