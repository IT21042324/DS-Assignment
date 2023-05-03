import axios from "axios";
import { UseUserContext } from "./useUserContext";
import { useNavigate } from "react-router-dom";
import { SendEmail } from "../components/SendEmail";
import { useCartContext } from "./useCartContext";
import { UseStoreContext } from "./useStoreContext";
// import { SmsSender } from "../components/SendSMS";

export function useBackendAPI() {
  const { info } = useCartContext();
  const cartDispatch = useCartContext().dispatch;
  const clearCartContext = useCartContext().clearCart;
  const { dispatch, user1, setStore, getUser } = UseUserContext();
  const storeDispatch = UseStoreContext().dispatch;

  //To fetch the user in the localstorage
  const user = getUser();

  // //import the sms sender
  // const {sendSMS} = SmsSender();

  const navigate = useNavigate();

  return {
    registerUser: async function (userDetails) {
      try {
        const { data } = await axios.post(
          "http://localhost:8080/api/user/signup/",
          userDetails
        );

        localStorage.setItem("user", JSON.stringify(data));

        dispatch({ type: "SetUser", payload: [data] });

        //Here we send an email once the user is registered
        SendEmail({
          user_name: userDetails.userName,
          role: userDetails.role,
        });

        alert("Account Created Successfully");

        //To remove the existing cart for a new account
        cartDispatch({ type: "ClearCart" });
        clearCartContext();

        if (data.role === "Buyer") navigate("/buyer/product");
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

        if (data.role) {
          async function configureUser() {
            localStorage.setItem("user", JSON.stringify(data));

            dispatch({ type: "SetUser", payload: [data] });
          }
          await configureUser();

          //now once the merchant or user is successfully registered,we try to redirect him to his store page once he is registered
          if (user.role === "Buyer") navigate("/buyer/product");
          else if (user.role === "Merchant")
            user.storeID ? navigate("/seller") : navigate("/seller/store");
          else if (user.role === "Admin") navigate("/admin");
        } else {
          alert(data.err);
        }
      } catch (err) {
        console.log(err);
        alert(err.response.data.err);
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

        localStorage.setItem("user", JSON.stringify(data));

        dispatch({
          type: "SetUser",
          payload: data,
        });
      } catch (err) {
        return err.message;
      }
    },

    purchaseItem: async function (details) {
      //To create a new payment record
      try {
        const { data } = await axios.post(
          "http://localhost:8083/api/payment/add/",
          {
            amount: details.total,
            itemList: info,
            userID: user1[0]._id,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        //To create a new Order record
        const orderDetails = await axios.post(
          "http://localhost:8082/api/order/add/",
          {
            userID: user1[0]._id,
            paymentID: data._id,
            address: user1[0].address,
            storeID: info[0].storeID,
            itemList: info,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        //To update the itemCount once the purchase is done
        const status = await info.map((rec) => {
          return axios.patch("http://localhost:8081/api/product/updateItem/", {
            itemID: rec.itemID,
            redQuantity: rec.itemQuantity,
          });
        });

        if (status) {
          SendEmail({
            user_name: user1[0].userName,
            role: "purchase",
            paymentID: data._id,
            orderID: orderDetails.data._id,
            amount: details.total,
          });

          // sendSMS();

          alert("Payment Successful");
          cartDispatch({ type: "ClearCart" });
          navigate("/");
        }
      } catch (err) {
        console.log(err);
        alert(err.message);
        return err.message;
      }
    },
    createStore: async function (store) {
      store.merchantID = user._id;

      try {
        const { data } = await axios.post(
          "http://localhost:8082/api/store/add/",
          store,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        await axios.patch("http://localhost:8080/api/user/updateUserStore/", {
          userID: user._id,
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
          "http://localhost:8083/api/payment/getStoreTotal/" + storeID,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    },

    getStoreItemCount: async function (storeID) {
      try {
        const { data } = await axios.get(
          "http://localhost:8082/api/store/getStoreItemCount/" + storeID,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );
        return data.itemCount;
      } catch (err) {
        console.log(err);
      }
    },

    getStoreName: async function (storeID) {
      try {
        const { data } = await axios.get(
          "http://localhost:8082/api/store/get/" + storeID,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
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
          "http://localhost:8082/api/store/get/" + user.storeID,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        const { storeItem } = data;
        return storeItem;
      } catch (err) {
        alert(
          "There seems to be an error. Store Name cannot be fethched at the moment"
        );
      }
    },

    saveProduct: async function (product) {
      try {
        const { data } = await axios.post(
          "http://localhost:8081/api/product/addItem/",
          product
        );

        await axios.patch(
          "http://localhost:8082/api/store/updateItem/",
          {
            storeID: user1[0].storeID,
            item: data,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        storeDispatch({ type: "AddItem", payload: data });

        alert("Item Added Successfully");
        return data;
      } catch (err) {
        alert(
          "There seems to be an error. Item cannot be uploaded at the moment"
        );
      }
    },

    removeItem: async function (itemID) {
      try {
        await axios.delete(
          "http://localhost:8081/api/product/deleteItem/" + itemID
        );

        await axios.patch(
          "http://localhost:8082/api/store/deleteStoreItem/",
          {
            storeID: user1[0].storeID,
            itemID,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        storeDispatch({ type: "DeleteItem", payload: { _id: itemID } });

        alert("Item Removed from the store");
      } catch (err) {
        alert(
          "There seems to be an error. Item cannot be removed at the moment"
        );
      }
    },

    updateItem: async function (product) {
      try {
        const { data } = await axios.patch(
          "http://localhost:8081/api/product/updateItem/",
          product
        );

        await axios.patch(
          "http://localhost:8082/api/store/modifyItem/",
          {
            storeID: user1[0].storeID,
            item: data,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        storeDispatch({ type: "ModifyItem", payload: data });

        alert("Item details updated");
      } catch (err) {
        alert(
          "There seems to be an error. Item cannot be modified at the moment"
        );
      }
    },
    getAllItemsFromOneStore: async function (storeID) {
      try {
        const { data } = await axios.get(
          "http://localhost:8082/api/order/getStoreOrder/" + storeID,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        return data;
      } catch (err) {
        console.log(err);
      }
    },

    updateOrderAndPaymentStatus: async function (orderID, status) {
      try {
        const { data } = await axios.patch(
          "http://localhost:8082/api/order/updateOrderStatus/",
          { orderID, status },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        const response = await axios.patch(
          "http://localhost:8083/api/payment/updatePaymentStatus/",
          { paymentID: data.paymentID, status },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        if (response) {
          return data;
        } else {
          alert(
            "There seems to be a error in the order service.. please try later"
          );
        }
      } catch (err) {
        console.log(err);
        alert(
          "There seems to be a error in the order service.. please try later"
        );
      }
    },

    getUsersForAdminPage: async function () {
      const { data } = await axios.get("http://localhost:8080/api/user/");

      console.log(data);
      return data;
    },

    getUserCountForAdmin: async function () {
      try {
        const adminRevenue = await axios.get(
          "http://localhost:8083/api/payment/getAdminTotal",
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        const adminTotalOrders = await axios.get(
          "http://localhost:8082/api/order/getOrderCountForAdmin/",
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        return {
          orderCount: adminTotalOrders.data.orderCount,
          amountForStore: adminRevenue.data.amountForStore,
        };
      } catch (err) {
        console.log(err);
      }
    },
    deleteUser: async function (userID) {
      try {
        //To delete the user
        const { data } = await axios.delete(
          "http://localhost:8080/api/user/deleteUser/" + userID
        );

        if (data.storeID) {
          //To delete his store
          await axios.delete(
            "http://localhost:8082/api/store/delete/" + data.storeID,
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
                role: user.role,
              },
            }
          );

          //To delete the items of his store
          await axios.delete(
            "http://localhost:8081/api/product/deleteStoreItems/" + data.storeID
          );
        }

        if (data) {
          alert(`User deleted`);
          return data;
        }
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    getAllStoreOrders: async function () {
      try {
        const { data } = await axios.get(
          "http://localhost:8082/api/order/getAllStoreOrders/",
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        return data;
      } catch (err) {
        console.log(err);
      }
    },
    getAllUserOrders: async function (userID) {
      try {
        const { data } = await axios.get(
          `http://localhost:8082/api/order/getAllStoreOrders/${userID}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        return data;
      } catch (err) {
        console.log(err);
      }
    },
    addReviewProduct: async function (details) {
      try {
        const { rating, itemID, review } = details;

        const { data } = await axios.patch(
          "http://localhost:8081/api/product/addReview/",
          { userID: user._id, userName: user.userName, rating, itemID, review }
        );

        return data;
      } catch (err) {
        alert("Oops.. We are facing an issue right now. Please try again");
      }
    },

    addReviewStore: async function (details) {
      try {
        const { rating, storeID, review, orderID } = details;

        await axios.patch(
          "http://localhost:8082/api/store/addReview/",
          {
            userID: user._id,
            userName: user.userName,
            rating,
            storeID,
            review,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        const orderDetails = await axios.patch(
          "http://localhost:8082/api/order/setReviewStatus/" + orderID,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              role: user.role,
            },
          }
        );

        return orderDetails;
      } catch (err) {
        alert("Oops.. We are facing an issue right now. Please try again");
      }
    },
  };
}
