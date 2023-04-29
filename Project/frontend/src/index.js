import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ItemContextProvider } from "./context/itemContext";
import { CartContextProvider } from "./context/cartContext";
import { UserContextProvider } from "./context/userContext";
import { StoreContextProvider } from "./context/storeContext";
import { SellerOrderContextProvider } from "./context/sellerOrderContext";
import { AdminContextProvider } from "./context/adminContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { AdminOrderContextProvider } from "./context/adminOrdersContext";
import { AdminUserContextProvider } from "./context/adminUserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <PayPalScriptProvider
        options={{
          "client-id":
            "Ae0K1qpBCZ331xu7kH8SIQSEjtGDFsDQ9qONYWEzWH8YWXnEy-k3Zx7pTi9QTO10zjWsy2if8zRytoj6",
        }}
      >
        <UserContextProvider>
          <ItemContextProvider>
            <StoreContextProvider>
              <SellerOrderContextProvider>
                <AdminContextProvider>
                  <AdminOrderContextProvider>
                    <AdminUserContextProvider>
                      <CartContextProvider>
                        <App />
                      </CartContextProvider>
                    </AdminUserContextProvider>
                  </AdminOrderContextProvider>
                </AdminContextProvider>
              </SellerOrderContextProvider>
            </StoreContextProvider>
          </ItemContextProvider>
        </UserContextProvider>
      </PayPalScriptProvider>
    </React.StrictMode>
  </BrowserRouter>
);
