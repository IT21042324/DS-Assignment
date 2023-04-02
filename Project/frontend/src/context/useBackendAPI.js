import axios from "axios";
import { UseUserContext } from "./useUserContext";
import { useNavigate } from "react-router-dom";

export function UseBackendAPI() {
  const { dispatch } = UseUserContext();
  const navigate = useNavigate();

  return {
    registerUser: async function (userDetails) {
      try {
        const { data } = await axios.post(
          "http://localhost:8080/api/user/signup",
          userDetails
        );

        dispatch({ type: "SetUser", payload: [data] });

        // Check if a user object is stored in the local storage
        if (localStorage.getItem("user")) {
          localStorage.setItem("user", JSON.stringify(data));
        } else {
          localStorage.setItem("user", JSON.stringify(data));
        }

        //now once the merchant or user is successfully registered,we try to redirect him to his store page once he is registered
        navigate("/product");
      } catch (err) {
        console.log(err);
      }
    },
  };
}
