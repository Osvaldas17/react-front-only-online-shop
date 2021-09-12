import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import selectors from "../../Redux/selectors";

function PrivateRoute({ component: Component, ...rest }) {
  const user = useSelector(selectors.currentUser);

  return (
    <Route
      {...rest}
      render={(props) =>
        user.username ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
