import axios from "axios";
import { UseUserContext } from "./useUserContext";
import { useNavigate } from "react-router-dom";
import { SendEmail } from "../components/SendEmail";
import { useCartContext } from "./useCartContext";
import { UseItemContext } from "./useItemContext";

export function useBackendAPI() {
  const { info } = useCartContext();
  const { dispatch, user1 } = UseUserContext();
  const itemContext = UseItemContext();
  const itemDispatch = itemContext.dispatch;

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

        //Here we send an email once the user is registered
        SendEmail({
          user_name: userDetails.userName,
          role: userDetails.role,
        });

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

        // // Check if a user object is stored in the local storage
        // if (localStorage.getItem("user")) localStorage.removeItem("user");

        localStorage.setItem("user", JSON.stringify(data));

        dispatch({ type: "SetUser", payload: [data] });

        //now once the merchant or user is successfully registered,we try to redirect him to his store page once he is registered
        navigate("/product");
      } catch (err) {
        console.log(err.response.data.err);
        return err.response.data.err;
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

    purchaseItem: async function (data) {
      //To create a new payment record
      try {
        await axios.post("http://localhost:8083/api/payment/add/", {
          amount: data.total,
          itemList: info,
          userID: user1[0]._id,
        });

        //To update the itemCount once the purchase is done
        try {
          await info.map((rec) => {
            axios.patch("http://localhost:8081/api/product/updateItem/", {
              itemID: rec.itemID,
              redQuantity: rec.itemQuantity,
            });
          });
        } catch (err) {
          console.log(err);
          return err.message;
        }
      } catch (err) {
        console.log(err);
        return err.message;
      }
    },
  };
}
