import { useContext, useEffect } from "react";
import { UserContext } from "./userContext";

export const UseUserContext = () => {
  const userContext = useContext(UserContext);
  const { dispatch, user1 } = userContext;

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: "SetUser",
        payload: [user],
      });
    }
  }, []);

  return { userContext, dispatch, user1 };
};
