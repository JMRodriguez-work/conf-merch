import React, { useContext } from "react";
import "./Payment.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={`Payment: ${item.id}`}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons
              paypalOptions={paypalOptions}
              buttonStyles={buttonStyles}
              amount={totalPriceCart}
              onClick={() => console.log("Start Payment")}
              onApprove={(data) => handlePaymentSuccess(data)}
              onError={(error) => console.log(error)}
              onCancel={(data) => console.log(data)}
              style={{ layout: "horizontal" }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export { Payment };
