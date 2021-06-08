import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { ReactComponent as Logo } from "../Assets/amazonLogo.svg";

interface IProps {
  onClick: any;
}

const Footer = (props: IProps) => {
  const { onClick: handleClick } = props;
  return (
    <div className="footer-container">
      <a href="#nav-top">
        <div className="back-to-top" onClick={handleClick}>
          Back to top
        </div>
      </a>
      <div className="footer-top">
        <div className="links-container">
          <div className="column">
            <div className="title">Get to Know Us</div>
            <ul className="links">
              <li className="link">
                <Link to="#">Careers</Link>
              </li>
              <li className="link">
                <Link to="#">Blog</Link>
              </li>
              <li className="link">
                <Link to="#">About Amazon</Link>
              </li>
              <li className="link">
                <Link to="#">Investor Relations</Link>
              </li>
              <li className="link">
                <Link to="#">Amazon Devices</Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <div className="title">Make Money with Us</div>
            <ul className="links">
              <li className="link">
                <Link to="#">Sell products on amazon</Link>
              </li>
              <li className="link">
                <Link to="#">Sell on Amazon Business</Link>
              </li>
              <li className="link">
                <Link to="#">Sell Apps on Amazon</Link>
              </li>
              <li className="link">
                <Link to="#">Become an Affiliate</Link>
              </li>
              <li className="link">
                <Link to="#">Advertise your Products</Link>
              </li>
              <li className="link">
                <Link to="#">Self-Publish with Us</Link>
              </li>
              <li className="link">
                <Link to="#">Host an Amazon Hub</Link>
              </li>
              <li className="link">
                <Link to="#">See More Make Money with Us</Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <div className="title">Amazon Payment Products</div>
            <ul className="links">
              <li className="link">
                <Link to="#">Amazon Business Card</Link>
              </li>
              <li className="link">
                <Link to="#">Shop with Points</Link>
              </li>
              <li className="link">
                <Link to="#">Reload Your Balance</Link>
              </li>
              <li className="link">
                <Link to="#">Amazon Currency Converter</Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <div className="title">Let Us Help You</div>
            <ul className="links">
              <li className="link">
                <Link to="#">Amazon and COVID-19</Link>
              </li>
              <li className="link">
                <Link to="#">Your Account</Link>
              </li>
              <li className="link">
                <Link to="#">Your Orders</Link>
              </li>
              <li className="link">
                <Link to="#">Shipping Rates & Policies</Link>
              </li>
              <li className="link">
                <Link to="#">Returns & Replacements</Link>
              </li>
              <li className="link">
                <Link to="#">Manage Your Content and Devices</Link>
              </li>
              <li className="link">
                <Link to="#">Amazon Assistant</Link>
              </li>
              <li className="link">
                <Link to="#">Help</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-preferences">
        <div className="footer-logo">
          <Logo style={{ transform: "scale(0.8)" }} />
        </div>
        <div className="preferences">
          <div className="language">English</div>
          <div className="currency">$ USD-U.S. Dollar</div>
          <div className="country">United States</div>
        </div>
      </div>
      <div className="services-rendered">
        <div className="services-rendered-container">
          <div className="service">
            <Link to="#">
              <div className="title">Amazon Music</div>
              <div className="description">
                Stream millions
                <br /> of songs
              </div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Amazon Advertising</div>
              <div className="description">
                Find, attract, and engage customers
              </div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Amazon Drive</div>
              <div className="description">Cloud storage from Amazon</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">6pm</div>
              <div className="description">Score deals on fashion brands</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">AbeBooks</div>
              <div className="description">Books, art & collectibles</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">ACX</div>
              <div className="description">Audiobook Publishing Made Easy</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Alexa</div>
              <div className="description">
                Actionable Analytics for the Web
              </div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Sell on Amazon</div>
              <div className="description">Start a Selling Account</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Amazon Business</div>
              <div className="description">Everything For Your Business</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">AmazonGlobal</div>
              <div className="description">Ship Orders Internationally</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title"> Home Services</div>
              <div className="description">
                Experienced Pros Happiness Guarantee
              </div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Amazon Ignite</div>
              <div className="description">
                Sell your original Digital Educational Resources
              </div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Amazon Web Services</div>
              <div className="description">
                Scalable Cloud Computing Services
              </div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Audible</div>
              <div className="description">
                Listen to Books & Original Audio Performances
              </div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Book Depository</div>
              <div className="description">
                Books With Free Delivery Worldwide
              </div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Box Office Mojo</div>
              <div className="description">Find Movie Box Office Data</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">ComiXology</div>
              <div className="description">Thousands of Digital Comics</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">DPReview</div>
              <div className="description">Digital Photography</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">East Dane</div>
              <div className="description">Designer Men's Fashion</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Fabric</div>
              <div className="description">Sewing, Quilting & Knitting</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Goodreads</div>
              <div className="description">Book reviews & recommendations</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">IMDb</div>
              <div className="description">Movies, TV & Celebrities</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">IMDbPro</div>
              <div className="description">
                Get Info Entertainment Professionals Need
              </div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Kindle Direct Publishing</div>
              <div className="description">
                Indie Digital & Print Publishing Made Easy
              </div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Prime Video Direct</div>
              <div className="description">Video Distribution Made Easy</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Shopbop</div>
              <div className="description">Designer Fashion Brands</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Woot!</div>
              <div className="description">Deals and Shenanigans</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Zappos</div>
              <div className="description">Shoes & Clothing</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Ring</div>
              <div className="description">Smart Home Security Systems</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">eero WiFi</div>
              <div className="description">Stream 4K Video in Every Room</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Blink</div>
              <div className="description">Smart Security for Every Home</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Neighbors App</div>
              <div className="description">
                Real-Time Crime & Safety Alerts{" "}
              </div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Amazon Subscription Boxes</div>
              <div className="description">
                Top subscription boxes – right to your door
              </div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">PillPack</div>
              <div className="description">Pharmacy Simplified</div>
            </Link>
          </div>

          <div className="service">
            <Link to="#">
              <div className="title">Amazon Second Chance</div>
              <div className="description">
                Pass it on, trade it in, give it a second life
              </div>
            </Link>
          </div>
        </div>
        <div className="terms">
          <Link to="#">
            <span className="conditions">Conditions of Use</span>
          </Link>
          <Link to="#">
            <span className="privacy">Privacy Notice</span>
          </Link>
          <Link to="#">
            <span className="interest-ads">Interest-Based Ads</span>
          </Link>
          <div className="copyright">
            © 1996-2021, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
