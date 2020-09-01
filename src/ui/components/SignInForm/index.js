import React from "react";
import { useHistory } from "react-router";
import { Formik, Field, Form } from "formik";

import { useDispatch } from "react-redux";
import { signIn } from "../../../redux/actionCreators/signIn";
import { AntInput, AntInputPassword } from "../FormFields/createFormField";
import {
  validateEmail,
  validatePassword
} from "../FormFields/validateFormField";
import "./index.scss";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const SignInForm = ({ setIsVisible }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = values => {
    dispatch(signIn()).then(() => {
      setIsVisible(false);
      history.push("/profile");
    });
  };

  return (
    <div className="sign-in-wrapper">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={values => onSubmit(values)}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              component={AntInput}
              name="email"
              type="email"
              placeholder="Email"
              validate={validateEmail}
            />
            <Field
              component={AntInputPassword}
              name="password"
              type="password"
              placeholder="Password"
              validate={validatePassword}
            />
            <div className="footer">
              <button
                className="submit-btn"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
              <Button
                type="text"
                danger
                disabled={isSubmitting}
                onClick={() => setIsVisible(false)}
              >
                <CloseOutlined />
                Cancel
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
