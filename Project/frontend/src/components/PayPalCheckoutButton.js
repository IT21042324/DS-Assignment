import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBackendAPI } from "../context/useBackendAPI";
export function PayPalCheckoutButton(props) {
  const { purchaseItem } = useBackendAPI();

  const { product } = props;

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const usdAmount = parseFloat((product.price / 319.67).toFixed(2));

  const handleApprove = async (orderId) => {
    //To convert the lkr to usd

    await purchaseItem({ total: usdAmount });
    console.log(orderId);
  };

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
                  value: parseFloat((product.price / 319.67).toFixed(2)),
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
          navigate("/buyer/Cart");
        }}
        onError={(err) => {
          setError(err);
          console.log(err);
        }}
      />
    </>
  );
}
