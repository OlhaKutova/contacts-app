import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

import "./index.scss";
import HeaderMenu from "../HeaderMenu";
import SignInModal from "../../components/SignInModal";
import UserDataHeader from "../UserDataHeader";

const Header = ({ userData }) => {
  return (
    <header className="header-wrapper">
      <Row>
        <Col span={12}>
          <HeaderMenu isLoggedIn={!!userData} />
        </Col>
        <Col span={12}>
          {!!userData ? (
            <UserDataHeader userData={userData} />
          ) : (
            <SignInModal />
          )}
        </Col>
      </Row>
    </header>
  );
};

export default Header;
