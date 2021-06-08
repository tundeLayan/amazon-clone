import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./Login.scss";
import { routes } from "../../routes";
import { auth } from "../../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = (message: string) => {
    return toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true
    });
  };

  const notifyError = (error: string) => {
    return toast.error(error);
  };

  const handleSubmit = e => {
    e.preventDefault();

    //firebase login logic here
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        notify("User Logged in Successfully... page will redirect");
        setTimeout(() => history.push(routes.home.path), 5000);
      })
      .catch(err => {
        notifyError(err.message);
        // alert(err.message)
      });
  };
  const handleRegister = e => {
    e.preventDefault();
    console.log("Submitted");

    //firebase signup logic here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // console.log(auth);
        notify("Account created successfully... page will redirect");
        setTimeout(() => history.push(routes.home.path), 5000);
      })
      .catch(err => {
        notifyError(err.message);
      });
  };
  return (
    <div className="login">
      <ToastContainer autoClose={5000} />
      <Link to={routes.home.path}>
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon-logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form onSubmit={handleSubmit}>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={handleRegister}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
