import React from "react";
import { Redirect, Route } from "react-router";

const SecureRoute = props => {
  const { authRequired, deniedOnAuth, redirectPath = "/", authUser } = props;
  if ((!authUser && authRequired) || (authUser && deniedOnAuth))
    return <Redirect to={{ pathname: redirectPath }} />;
  return (
    <Route
      {...props}
      component={props.component}
      render={undefined}
      children={props.children}
    />
  );
};

export default SecureRoute;
