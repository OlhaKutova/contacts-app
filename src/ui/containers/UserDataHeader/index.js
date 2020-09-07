import React from "react";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import UserDataHeaderMenu from "../UserDataHeaderMenu/index";
import "./index.scss";

const UserDataHeader = ({ userData }) => {
  const { name } = userData;

  return (
    <div className="header-sign-in-wrapper">
      <Dropdown overlay={() => <UserDataHeaderMenu />}>
        <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          {userData.gender === "male" ? (
            <span>{`Hello ${name.title}. ${name.first} ${name.last}`}</span>
          ) : (
            <span>{`Hello ${name.title} ${name.first} ${name.last}`}</span>
          )}

          <DownOutlined />
          <img src={userData.picture.medium} alt="user" />
        </div>
      </Dropdown>
    </div>
  );
};

export default UserDataHeader;
