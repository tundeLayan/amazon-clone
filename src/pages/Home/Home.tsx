import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";

import "./Home.scss";
import { Product, CategoryCards } from "../../components";
import carousel1 from "../../Assets/carousel1.jpg";
import carousel2 from "../../Assets/carousel2.jpg";
import carousel3 from "../../Assets/carousel3.jpg";
import carousel4 from "../../Assets/carousel4.jpg";
import carousel5 from "../../Assets/carousel5.jpg";
import carousel6 from "../../Assets/carousel6.jpg";
import carousel7 from "../../Assets/carousel7.jpg";
import leftArrow from "../../Assets/carouselArrows/arrow-circle-left-solid.svg";
import rightArrow from "../../Assets/carouselArrows/arrow-circle-right-solid.svg";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideNext = () => setCurrentIndex((currentIndex + 1) % images.length);

  const slidePrev = () => setCurrentIndex((currentIndex - 1) % images.length);
  const handleDragStart = e => e.preventDefault();

  const images = [
    <img
      src={carousel1}
      className="home__image"
      alt="carousel"
      onDragStart={handleDragStart}
    />,
    <img
      src={carousel2}
      className="home__image"
      alt="carousel"
      onDragStart={handleDragStart}
    />,
    <img
      src={carousel3}
      className="home__image"
      alt="carousel"
      onDragStart={handleDragStart}
    />,
    <img
      src={carousel4}
      className="home__image"
      alt="carousel"
      onDragStart={handleDragStart}
    />,
    <img
      src={carousel5}
      className="home__image"
      alt="carousel"
      onDragStart={handleDragStart}
    />,
    <img
      src={carousel6}
      className="home__image"
      alt="carousel"
      onDragStart={handleDragStart}
    />,
    <img
      src={carousel7}
      className="home__image"
      alt="carousel"
      onDragStart={handleDragStart}
    />
  ];
  return (
    <div className="home">
      <div className="home__container">
        <AliceCarousel
          responsive={{ 0: { items: 1 } }}
          disableDotsControls={true}
          controlsStrategy={"responsive"}
          mouseTracking
          items={images}
          activeIndex={currentIndex}
          animationType="fadeout"
          disableButtonsControls={true}
          autoPlay={true}
          autoPlayInterval={1000}
        />
        {/* <ArrowBackIosIcon
          className="custom-arrow-left"
          onClick={() => slidePrev()}
        /> */}
        <img
          className="custom-arrow-left"
          src={leftArrow}
          onClick={() => slidePrev()}
          alt="left-arrow"
        />
        <img
          className="custom-arrow-right"
          src={rightArrow}
          onClick={() => slideNext()}
          alt="right-arrow"
        />
        <div className="home__info">
          You are on amazon.com. You can also shop on Amazon Germany for
          millions of products with fast local delivery.{" "}
          <a>Click here to go to amazon.de</a>
        </div>
        <div className="home__row__main">
          <CategoryCards
            title="Amazon Basics"
            link="See more"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
          />
          <CategoryCards
            title="Get fit at home"
            link="Explore now"
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
          />
          <CategoryCards
            title="Shop by Category"
            link="Shop now"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
          />
          <CategoryCards
            title="Shop by Category"
            link="Shop now"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
          />
        </div>
        <div className="home__row__main">
          <CategoryCards
            title="Oculus"
            link="Shop now"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg"
          />
          <CategoryCards
            title="Find your ideal TV"
            link="See more"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
          />
          <CategoryCards
            title="Gaming accesories"
            link="See more"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
          />
          <CategoryCards
            title="Computers and Accessories"
            link="Shop now"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
