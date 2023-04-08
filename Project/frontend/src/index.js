import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ItemContextProvider } from "./context/itemContext";
import { CartContextProvider } from "./context/cartContext";
import { UserContextProvider } from "./context/userContext";
import { StoreContextProvider } from "./context/storeContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
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
              <CartContextProvider>
                <App />
              </CartContextProvider>
            </StoreContextProvider>
          </ItemContextProvider>
        </UserContextProvider>
      </PayPalScriptProvider>
    </React.StrictMode>
  </BrowserRouter>
);
