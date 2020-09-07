import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Menu } from "antd";

import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import "./index.scss";

import { logOut } from "../../../redux/actionCreators/signIn";

const UserDataHeaderMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogOut = () => {
    dispatch(logOut()).then(() => history.push("/"));
  };

  return (
    <Menu className="header-dropdown-wrapper">
      <Menu.Item className="profile-link-item">
        <Link to="/profile" className="profile-link">
          <UserOutlined />
          <span className="title">Profile</span>
        </Link>
      </Menu.Item>
      <Menu.Item onClick={onLogOut}>
        <LogoutOutlined />
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );
};

export default UserDataHeaderMenu;
