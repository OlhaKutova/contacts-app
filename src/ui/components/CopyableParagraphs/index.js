import React from "react";
import { CopyOutlined } from "@ant-design/icons";
import { Typography } from "antd";

import "./index.scss";

const { Paragraph } = Typography;

export const CopyableEmail = ({ email, className }) => {
  return (
    <Paragraph
      copyable={{
        text: email,
        icon: <CopyOutlined key="copy-icon" />,
        tooltips: ["Copy", "Copied"]
      }}
      className={[className, " paragraph-wrapper"]}
    >
      <a href={`mailto:${email}`}>{email}</a>
    </Paragraph>
  );
};

export const CopyablePhone = ({ phone, className }) => {
  return (
    <Paragraph
      copyable={{
        text: phone,
        icon: <CopyOutlined key="copy-icon" />,
        tooltips: ["Copy", "Copied"]
      }}
      className={[className, " paragraph-wrapper"]}
    >
      <a href={`tel:${phone}`}>{phone}</a>
    </Paragraph>
  );
};

export const CopyableLocation = ({ location, className }) => {
  const { country, street, city, state, postcode } = location;
  return (
    <Paragraph
      copyable={{
        text: `/${country}/ ${street.number} ${street.name}, ${city}, ${state} ${postcode} `,
        icon: <CopyOutlined key="copy-icon" />,
        tooltips: ["Copy", "Copied"]
      }}
      className={[className, " paragraph-wrapper"]}
    >
      <div>
        <span className="location-title">/{country}/</span>
        <br />
        <span className="location-data">{`${street.number} ${street.name}, ${city}, ${state} ${postcode} `}</span>
      </div>
    </Paragraph>
  );
};
