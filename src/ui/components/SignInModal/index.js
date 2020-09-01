import React, { useState } from "react";
import { Modal } from "antd";
import { LoginOutlined } from "@ant-design/icons";

import "./index.scss";
import SignInForm from "../SignInForm";

const SignInModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="header-sign-in-wrapper">
      <LoginOutlined className="icon" />
      <span onClick={() => setIsVisible(true)}>Sign in</span>
      <Modal
        title="Sign in"
        visible={isVisible}
        closable={false}
        footer={false}
      >
        <SignInForm setIsVisible={setIsVisible} />
      </Modal>
    </div>
  );
};

export default SignInModal;
