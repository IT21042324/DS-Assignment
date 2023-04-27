import { useContext, useEffect } from "react";
import { UserContext } from "./userContext";
import axios from "axios";

export const UseUserContext = () => {
  const { dispatch, user1, selectedUserRole, orders } = useContext(UserContext);

  useEffect(() => {
    async function getDataForUserContext() {
      if (localStorage.getItem("user")) {
        const user = JSON.parse(localStorage.getItem("user"));

        dispatch({
          type: "SetUser",
          payload: [user],
        });

        const { data } = await axios.get(
          `http://localhost:8082/api/order/getAllStoreOrders/${user._id}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        //We try to determine the status of order so that we can display the tracking interface accordingly
        data.forEach((ord) => {
          if (ord.status === "Pending") ord.statusValue = 0;
          else if (ord.status === "Confirmed") ord.statusValue = 1;
          else if (ord.status === "Dispatched") ord.statusValue = 2;
          else if (ord.status === "Delivered") ord.statusValue = 3;
        });

        dispatch({
          type: "SetOrders",
          payload: data,
        });
      }
    }

    getDataForUserContext();
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

  function setStore(storeID) {
    const userSaved = localStorage.getItem("user");
    if (userSaved) {
      const user = JSON.parse(userSaved);
      user.storeID = storeID;
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: "SetStore",
        payload: storeID,
      });
    }
  }

  function logoutUser() {
    const userSaved = localStorage.getItem("user");
    if (userSaved) {
      localStorage.removeItem("user");
      dispatch({ type: "Logout" });
      return true;
    } else return false;
  }

  return {
    dispatch,
    user1,
    orders,
    selectedUserRole,
    setStore,
    getUser,
    getUserRole,
    setUserRole,
    logoutUser,
  };
};
