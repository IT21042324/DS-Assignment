import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/useCartContext";
import { useBackendAPI } from "../context/useBackendAPI";
export function PayPalCheckoutButton(props) {
  const { purchaseItem } = useBackendAPI();

  const { product } = props;

  const { dispatch } = useCartContext();

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleApprove = async (orderId) => {
    await purchaseItem({ total: product.price });
    console.log(orderId);
    setPaidFor(true);
  };

  if (paidFor && !error) {
    alert("Payment Successfully Completed");
    dispatch({ type: "ClearCart" });
    navigate("/product");
  }

  return (
    <>
      {error && <div>{error}</div>}
      <PayPalButtons
        key={product.id}
        style={{ color: "gold" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  value: product.price,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);

          handleApprove(data.orderID);
        }}
        onCancel={() => {
          alert("Payment Cancelled");
          navigate("/Cart");
        }}
        onError={(err) => {
          setError(err);
          console.log(err);
        }}
      />
    </>
  );
}
