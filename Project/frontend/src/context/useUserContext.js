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

  function getUser() {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));

      return user;
    }
  }
  function getUserRole() {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));

      return user.role;
    }
  }

  function logoutUser() {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");

      alert("Logged Out");
      dispatch({ type: "Logout" });
    }
  }
  function login() {}

  return {
    userContext,
    dispatch,
    user1,
    getUser,
    getUserRole,
    logoutUser,
    login,
  };
};
