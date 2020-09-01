import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import PersonDetailsCard from "../../components/PersonDetailsCard";
import "./index.scss";
import { Spin } from "antd";

const ContactDetails = () => {
  const { contactId } = useParams();
  const { contactList } = useSelector(state => state.contactList);
  const contactDetails = contactList.find(
    item => item.contactId.toString() === contactId.toString()
  );

  if (!contactDetails)
    return (
      <div className="empty-content-wrapper">
        <Spin size="large" />
      </div>
    );

  return (
    <PersonDetailsCard title="Contact View" contactData={contactDetails} />
  );
};

export default ContactDetails;
