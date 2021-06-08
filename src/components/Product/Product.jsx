import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Product.scss";
import { useStateValue } from "../../StateProvider";
import { getRating } from "../../utils";

// interface IProps {
//   id: string;
//   title: string;
//   image: string;
//   price: number;
//   rating: number;
// }

const Product = props => {
  const { id, title, image, price, rating } = props;
  // what useStateValue is returning is the context object returned from createContext, the default context object is an empty object
  // value contains
  const {
    dispatch,
    state: { basket }
  } = useStateValue();

  const addToBasket = () => {
    // dispatch the item to the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: 1
      }
    });
    toast.success("Item added to basket!");
    // console.log("Added to cart");
  };
  return (
    <div className="product">
      <ToastContainer />
      <div className="product__info">
        {console.log("Basket is", basket)}
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">{getRating(rating)}</div>
      </div>
      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
