import React from "react";
import { CheckoutProduct, Subtotal } from "../../components";
import "./Checkout.scss";
import { useStateValue } from "../../StateProvider";

const Checkout = () => {
  const {
    state: { basket },
    dispatch
  } = useStateValue();
  // console.log("Basket from checkout", basket);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div className="">
          <h2 className="checkout__title">Your Shopping basket</h2>
          {basket.map((item, i) => {
            return (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
                dispatch={dispatch}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal basket={basket} />
      </div>
    </div>
  );
};

export default Checkout;
