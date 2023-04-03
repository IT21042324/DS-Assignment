import axios from "axios";
import { UseUserContext } from "./useUserContext";
import { useNavigate } from "react-router-dom";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";

export function useBackendAPI() {
  const { dispatch } = UseUserContext();
  const navigate = useNavigate();

  return {
    registerUser: async function (userDetails) {
      try {
        const { data } = await axios.post(
          "http://localhost:8080/api/user/signup/",
          userDetails
        );

        // Check if a user object is stored in the local storage
        if (localStorage.getItem("user")) {
          localStorage.removeItem("user");
        }
        localStorage.setItem("user", JSON.stringify(data));

        dispatch({ type: "SetUser", payload: [data] });

        //now once the merchant or user is successfully registered,we try to redirect him to his store page once he is registered
        navigate("/product");
      } catch (err) {
        console.log(err);
      }
    },
    login: async function (userDetails) {
      try {
        const { data } = await axios.post(
          "http://localhost:8080/api/user/login/",
          userDetails
        );

        // Check if a user object is stored in the local storage
        if (localStorage.getItem("user")) localStorage.removeItem("user");

        localStorage.setItem("user", JSON.stringify(data));

        dispatch({ type: "SetUser", payload: [data] });

        //now once the merchant or user is successfully registered,we try to redirect him to his store page once he is registered
        navigate("/product");
      } catch (err) {
        return err;
      }
    },
    updateUser: async function ({ userId, userName, image }) {
      try {
        const { data } = await axios.patch(
          "http://localhost:8080/api/user/update/",
          {
            userId,
            userName,
            image,
          }
        );

        const obj = await axios.get(
          "http://localhost:8080/api/user/" + data._id
        );

        async function updateLocalStorage(data) {
          // Check if a user object is stored in the local storage
          if (localStorage.getItem("user")) {
            localStorage.setItem("user", JSON.stringify(obj.data[0]));

            dispatch({
              type: "SetUser",
              payload: obj.data,
            });
          }
        }

        await updateLocalStorage(data);
      } catch (err) {
        return err.message;
      }
    },
  };
}
