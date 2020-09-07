import React from "react";
import { DoubleLeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { Button, Tag } from "antd";

import {
  CopyableEmail,
  CopyableLocation,
  CopyablePhone
} from "../CopyableParagraphs";
import { getRandomItem } from "../../../utils/helpers";
import { tagColors } from "../../../utils/constants";
import "./index.scss";

const PersonDetailsCard = ({ title, contactData }) => {
  const history = useHistory();
  const { name, dob, picture, email, phone, location, nat } = contactData;
  let nameTitle = name.title;
  if (nameTitle === "Ms" || nameTitle === "Mrs" || nameTitle === "Mr") {
    nameTitle = `${nameTitle}.`;
  }
  return (
    <div className="profile-wrapper">
      <h1>{title}</h1>
      <div className="inner-wrapper">
        <div className="card-container">
          <div className="user-avatar-wrapper">
            <img src={picture.large} alt="" />
          </div>
        </div>
        <div className="user-info-wrapper">
          <div className="title-wrapper">
            <p className="title-name">{nameTitle}&nbsp;</p>
            <p className="title-name"> {name.first}</p>
            <p className="title-years">{`(${dob.age} years)`}</p>
          </div>
          <div className="details-wrapper">
            <CopyableEmail email={email} className="paragraph-wrapper" />
            <CopyablePhone phone={phone} className="paragraph-wrapper" />
            <CopyableLocation
              location={location}
              className="paragraph-wrapper"
            />
          </div>
          <Tag className="title-nationality" color={getRandomItem(tagColors)}>
            {nat}
          </Tag>
        </div>
      </div>
      {title === "Contact View" ? (
        <Button
          className="back-button"
          type="primary"
          icon={<DoubleLeftOutlined />}
          onClick={() => history.push("/contacts")}
        >
          Back
        </Button>
      ) : null}
    </div>
  );
};

export default PersonDetailsCard;
