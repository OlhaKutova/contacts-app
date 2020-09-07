import React from "react";
import { Row, Col } from "antd";

import HeaderMenu from "../HeaderMenu";
import SignInModal from "../../components/SignInModal";
import UserDataHeader from "../UserDataHeader";
import "./index.scss";

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
