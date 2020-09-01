import React, { useEffect } from "react";

import Header from "./ui/containers/Header";
import Footer from "./ui/containers/Footer";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Home from "./ui/pages/Home";
import Contacts from "./ui/pages/Contacts";
import Profile from "./ui/pages/Profile";
import ContactDetails from "./ui/pages/ContactDetails";
import { restoreUserData } from "./redux/actionCreators/signIn";
import PageNotFound from "./ui/pages/PageNotFound";
import { getContactList } from "./redux/actionCreators/getContactList";
import { Spin } from "antd";
import SecureRoute from "./utils/SecureRoute";

function App() {
  const dispatch = useDispatch();
  const { userData, authIsChecked } = useSelector(state => state.signIn);
  const { contactList } = useSelector(state => state.contactList);

  useEffect(() => {
    dispatch(restoreUserData());
    dispatch(getContactList());
  }, [dispatch]);

  return (
    <>
      <Header userData={userData} />
      {authIsChecked && contactList ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <SecureRoute
            authRequired
            redirectPath="/404"
            authUser={userData}
            exact
            path="/contacts"
          >
            <Contacts />
          </SecureRoute>
          <SecureRoute
            authRequired
            redirectPath="/404"
            authUser={userData}
            exact
            path="/profile"
          >
            <Profile />
          </SecureRoute>
          <SecureRoute
            authRequired
            redirectPath="/404"
            authUser={userData}
            exact
            path="/contact-details/:contactId"
          >
            <ContactDetails />
          </SecureRoute>
          <Route component={PageNotFound} />
        </Switch>
      ) : (
        <Spin size="large" />
      )}
      <Footer />
    </>
  );
}

export default App;
