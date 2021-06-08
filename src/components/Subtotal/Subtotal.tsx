import React from "react";
import * as CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import "./Subtotal.scss";
import { getNumberOfItemsInCart, calculateTotalPrice } from "../../utils";
import { routes } from "../../routes";

// TODO: Define an interface for props

const Subtotal = ({ basket }) => {
  // let totalPrice = calculateTotalPrice(basket);
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value: any) => (
          <>
            <p>
              Subtotal ({getNumberOfItemsInCart(basket)} items):{" "}
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={calculateTotalPrice(basket)} //part of the homework
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button onClick={() => history.push(routes.payment.path)}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
