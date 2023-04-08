import axios from "axios";
import { UseUserContext } from "./useUserContext";
import { useNavigate } from "react-router-dom";
import { SendEmail } from "../components/SendEmail";
import { useCartContext } from "./useCartContext";

export function useBackendAPI() {
  const { info } = useCartContext();
  const { dispatch, user1, setStore } = UseUserContext();

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

        alert("Account Created Successfully");

        if (data.role === "Buyer") navigate("/product");
        else if (data.role === "Merchant") navigate("/seller/store");
      } catch (err) {
        alert("Ooops.. There seems to be an error. Try again later");
        console.log(err);
      }
    },
    login: async function (userDetails) {
      try {
        const { data } = await axios.post(
          "http://localhost:8080/api/user/login/",
          userDetails
        );

        localStorage.setItem("user", JSON.stringify(data));

        dispatch({ type: "SetUser", payload: [data] });

        //now once the merchant or user is successfully registered,we try to redirect him to his store page once he is registered

        if (user1[0].role === "Buyer") navigate("/product");
        else if (user1[0].role === "Merchant") {
          user1[0]?.storeID ? navigate("/seller") : navigate("/seller/store");
        }
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
            return axios.patch(
              "http://localhost:8081/api/product/updateItem/",
              {
                itemID: rec.itemID,
                redQuantity: rec.itemQuantity,
              }
            );
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
    createStore: async function (store) {
      store.merchantID = user1[0]._id;

      try {
        const { data } = await axios.post(
          "http://localhost:8082/api/store/add/",
          store
        );

        await axios.patch("http://localhost:8080/api/user/updateUserStore/", {
          userID: user1[0]._id,
          storeID: data._id,
        });

        setStore(data._id);

        navigate("/seller");

        return true;
      } catch (err) {
        return false;
      }
    },
    getTotalSalesAmount: async function (storeID) {
      try {
        const { data } = await axios.get(
          "http://localhost:8083/api/payment/getStoreTotal/",
          { storeID }
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    },
    getStoreItemCount: async function (storeID) {
      try {
        const { data } = await axios.get(
          "http://localhost:8082/api/store/getStoreItemCount/" + storeID
        );
        return data.itemCount;
      } catch (err) {
        console.log(err);
      }
    },
    saveProduct: async function (product) {
      try {
        const { data } = await axios.post(
          "http://localhost:8081/api/product/addItem/",
          product
        );

        await axios.patch("http://localhost:8082/api/store/updateItem/", {
          storeID: user1[0].storeID,
          item: data,
        });

        alert("Item Added Successfully");
      } catch (err) {
        alert(
          "There seems to be an error. Item cannot be uploaded at the moment"
        );
      }
    },
    getStoreName: async function (storeID) {
      try {
        const { data } = await axios.get(
          "http://localhost:8082/api/store/get/" + storeID
        );
        return data.storeName;
      } catch (err) {
        alert(
          "There seems to be an error. Store Name cannot be fethched at the moment"
        );
      }
    },
    getProductsOfStore: async function () {
      try {
        const { data } = await axios.get(
          "http://localhost:8082/api/store/get/" + user1[0].storeID
        );

        const { storeItem } = data;

        return storeItem;
      } catch (err) {
        alert(
          "There seems to be an error. Store Name cannot be fethched at the moment"
        );
      }
    },
  };
}
