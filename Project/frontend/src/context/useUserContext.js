import { useContext, useEffect } from "react";
import { UserContext } from "./userContext";

export const UseUserContext = () => {
  const userContext = useContext(UserContext);
  const { dispatch, user1, selectedUserRole } = userContext;

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

  //Since the login and register function is used between all three client,merchant and admin we try to set the userRole based on the interface login/register is clicked from
  function setUserRole(role) {}

  function logoutUser() {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");

      alert("Logged Out");
      dispatch({ type: "Logout" });
    }
  }

  return {
    userContext,
    dispatch,
    user1,
    selectedUserRole,
    getUser,
    getUserRole,
    setUserRole,
    logoutUser,
  };
};
