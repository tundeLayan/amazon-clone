import React from "react";
import "./CategoryCards.scss";

interface IProps {
  title: string;
  link: string;
  image: any;
}
const CategoryCards = (props: IProps) => {
  const { title, link, image } = props;
  return (
    <div className="category__cards">
      <div className="category__cards__header">{title}</div>
      <img src={image} className="category__cards__body" />
      <div className="category__cards__footer">
        <a>{link}</a>
      </div>
    </div>
  );
};

export default CategoryCards;
