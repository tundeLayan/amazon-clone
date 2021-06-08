import React from "react";
import moment from "moment";
import * as CurrencyFormat from "react-currency-format";

import "./Order.scss";
import { CheckoutProduct } from "../";

interface IProps {
  // TODO: I can make this better, define the object it is expecting
  order: any;
}

const Order = (props: IProps) => {
  const { order } = props;
  return (
    <div className="order">
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item, i) => {
        return (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.image}
            rating={item.rating}
            key={i}
            hideButton={true}
          />
        );
      })}
      <CurrencyFormat
        renderText={(value: any) => <h3>Order Total: {value}</h3>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;
