import React from "react";
import { Card, Tag } from "antd";

import {
  CopyableEmail,
  CopyableLocation,
  CopyablePhone
} from "../../components/CopyableParagraphs/index";
import "./index.scss";
import { getRandomItem } from "../../../utils/helpers";
import { tagColors } from "../../../utils/constants";

const TiledContactCard = ({ item }) => {
  const { name, dob, picture, email, phone, location, nat } = item;
  let nameTitle = name.title;
  if (nameTitle === "Ms" || nameTitle === "Mrs" || nameTitle === "Mr") {
    nameTitle = `${nameTitle}.`;
  }
  return (
    <Card hoverable key={item.contactId}>
      <img src={picture.large} className="contact-avatar" alt="" />
      <div className="contact-info-wrapper">
        <div className="title-wrapper">
          <p className="title-name">{nameTitle}&nbsp;</p>
          <p className="title-name"> {name.first}</p>
          <p className="title-years">{`(${dob.age} years)`}</p>
        </div>
        <div className="details-wrapper">
          <CopyableEmail email={email} className="paragraph-wrapper" />
          <CopyablePhone phone={phone} className="paragraph-wrapper" />
          <CopyableLocation location={location} className="paragraph-wrapper" />
        </div>
        <Tag className="title-nationality" color={getRandomItem(tagColors)}>
          {nat}
        </Tag>
      </div>
    </Card>
  );
};

export default TiledContactCard;
