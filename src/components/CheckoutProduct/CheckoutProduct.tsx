import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "./CheckoutProduct.scss";
import { getRating } from "../../utils";

interface IProps {
  id: string;
  image: string;
  title: string;
  price: string;
  rating: number;
  dispatch?: any;
  hideButton?: boolean;
  quantity: number;
}
const CheckoutProduct = (props: IProps) => {
  const {
    id,
    image,
    title,
    price,
    rating,
    dispatch,
    hideButton,
    quantity
  } = props;
  const removeFromBasket = (id: string) => {
    // dispatch action that will remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
    toast.success("Item removed from basket!");
  };
  return (
    <div className="checkoutProduct">
      <ToastContainer />
      <img className="checkoutProduct__image" alt="product" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="quantity">Quantity: {quantity}</p>
        <div className="checkoutProduct__rating">{getRating(rating)}</div>
        {!hideButton && (
          <button onClick={() => removeFromBasket(id)}>
            Remove from basket
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
