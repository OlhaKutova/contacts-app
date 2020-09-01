import React from "react";
import { Link, useLocation } from "react-router-dom";
import "antd/dist/antd.css";
import "antd/dist/antd.css";
import { Menu } from "antd";

import "./index.scss";

const HeaderMenu = ({ isLoggedIn }) => {
  const location = useLocation();

  return (
    <Menu selectedKeys={[location.pathname]} mode="horizontal">
      <Menu.Item key="logo" className="logo">
        <Link to="/">
          <img src={require("../../../img/logo.png")} alt="logo" />
        </Link>
      </Menu.Item>

      <Menu.Item key="/">
        <Link to="/" className="link">
          Home
        </Link>
      </Menu.Item>
      {isLoggedIn && (
        <Menu.Item key="/contacts">
          <Link to="/contacts" className="link">
            Contacts
          </Link>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default HeaderMenu;
