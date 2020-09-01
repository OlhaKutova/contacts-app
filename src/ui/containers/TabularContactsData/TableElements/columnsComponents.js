import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Tag } from "antd";

import { getRandomItem } from "../../../../utils/helpers/index";
import { tagColors } from "../../../../utils/constants";
import "./index.scss";

export const ContactAvatar = ({ picture }) => (
  <img className="user-avatar" src={picture.medium} alt="" />
);

export const ContactName = ({ name, contactId }) => (
  <Link
    to={`/contact-details/${contactId}`}
  >{`${name.title} ${name.first} ${name.last}`}</Link>
);

export const ContactBirthday = ({ dob }) => (
  <>
    <span>{moment(dob.date).format("dddd, MM/DD/YYYY, h:mm:ss A")}</span>
    <br />
    <span>{`${dob.age} years`}</span>
  </>
);

export const ContactNationality = ({ nat }) => (
  <Tag color={getRandomItem(tagColors)}>{nat}</Tag>
);
