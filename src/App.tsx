// @ts-nocheck
import { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import { AuthLayout, MainLayout } from "./layouts";

import { routerObject } from "./router";
import { routes } from "./routes";
import { useStateValue } from "./StateProvider";

const promise = loadStripe(
  "pk_test_51Iwu4lF2xYJmZfQp4DmO3M2wku5qUnmuu3vh1i54vBm3dYEp6lFd6GzCXn4fwHtsQhgWvNV55HOut89SeV2xeC6700J8jkZBUd"
);

function App({ location }) {
  const authRoutes = [routes.login.path];

  const { dispatch } = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log("The user is >>>", authUser);
      if (authUser) {
        // The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Switch>
        {authRoutes.includes(location.pathname) ? (
          <AuthLayout>
            {routerObject.map((route, index) => {
              return (
                <Route
                  exact
                  key={index}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          </AuthLayout>
        ) : (
          <MainLayout>
            <Elements stripe={promise}>
              {routerObject.map(({ path, component }) => (
                <Route key={path} exact path={path} component={component} />
              ))}
            </Elements>
          </MainLayout>
        )}
      </Switch>
    </div>
  );
}

export default withRouter(App);
