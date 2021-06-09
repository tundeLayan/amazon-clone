import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../Assets/amazonLogo.svg";
import { routes } from "../routes";
import "./Header.scss";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

const Header = () => {
  const {
    state: { basket, user }
  } = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      <div className="header">
        <Link to={routes.home.path}>
          <Logo />
        </Link>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          {/* If no user, go to login page */}
          <Link to={!user ? routes.login.path : "#"}>
            <div onClick={handleAuth} className="header__option">
              {!user ? (
                <>
                  <span className="header__optionLineOne">Hello Guest</span>
                  <span className="header__optionLineTwo">Sign In</span>
                </>
              ) : (
                <>
                  <span className="header__optionLineOne">
                    Hello {user.email}
                  </span>
                  <span className="header__optionLineTwo">Sign Out</span>
                </>
              )}
            </div>
          </Link>
          <Link to={routes.orders.path}>
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to={routes.checkout.path}>
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="below-header">
        <div className="left">
          <Link to={""}>{/*<MenuIcon/> */} All</Link>
          <Link to={""}>Today's Deals</Link>
          <Link to={""}>Customer Service</Link>
          <Link to={""}>Gift Cards</Link>
          <Link to={""}>Registry</Link>
          <Link to={""}>Sell</Link>
        </div>
        <div className="right">
          <Link to={""}>Amazon's Response to COVID-19</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
