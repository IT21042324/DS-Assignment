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
  }, [dispatch]);

  function getUser() {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      return user;
    }
  }

  function getUserRole() {
    const userSaved = localStorage.getItem("user");
    if (userSaved) {
      const user = JSON.parse(userSaved);
      return user.role;
    }
  }

  function setUserRole(role) {
    const userSaved = localStorage.getItem("user");
    if (userSaved) {
      const user = JSON.parse(userSaved);
      user.role = role;
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: "SetUser",
        payload: [user],
      });
    }
  }

  function logoutUser() {
    const userSaved = localStorage.getItem("user");
    if (userSaved) {
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
