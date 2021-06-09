// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as CurrencyFormat from "react-currency-format";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import axiosCustom from "../../axios";
import "./Payment.scss";
import { useStateValue } from "../../StateProvider";
import { CheckoutProduct } from "../../components";
import { calculateTotalPrice, getNumberOfItemsInCart } from "../../utils";
import { routes } from "../../routes";
import { db } from "../../firebase";

const Payment = () => {
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const {
    state: { user, basket },
    dispatch
  } = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  useEffect(() => {
    // const ourRequest = axios.CancelToken.source();
    // Generate special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      // console.log("This is the payment page");
      const response = await axiosCustom({
        method: "post",
        url: `/payments/create?total=${calculateTotalPrice(basket) * 100}`
        // cancelToken: ourRequest.token
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();

    // clean up
    return () => {
      // ourRequest.cancel();
    };
  }, [basket]);

  const handleSubmit = async e => {
    e.preventDefault();
    setProcessing(true);
    console.log("This is the client secret", clientSecret);
    const payload = await stripe
      ?.confirmCardPayment(clientSecret.client_secret, {
        payment_method: {
          card: elements?.getElement(CardElement)
        }
      })
      .then(data => {
        const { paymentIntent } = data;
        // paymentIntent = payment confirmation
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent?.id)
          .set({
            basket: basket,
            amount: paymentIntent?.amount,
            created: paymentIntent?.created
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        // Make the basket empty
        dispatch({ type: "EMPTY_BASKET" });
        history.replace(routes.orders.path);
      });

    // const payload = await stripe
  };
  const handleChange = e => {
    // If the input is empty, make it disabled
    setDisabled(e.empty);
    // If there is an error message, show error message
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <Link to={routes.checkout.path}>
            {getNumberOfItemsInCart(basket)} items
          </Link>
          )
        </h1>
        {/* Payment section --deliver address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123, React Lane</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
        {/* Payment section --Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                dispatch={dispatch}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
        {/* Payment section --Payment Method */}
        <div className="payment__section">
          <div className="payment__title">
            <h1>Payment Method</h1>
          </div>
          <div className="payment__details">
            {/* Stripe magic will happen here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value: any) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={calculateTotalPrice(basket)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
