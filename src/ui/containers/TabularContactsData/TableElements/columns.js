import React from "react";

import {
  ContactAvatar,
  ContactBirthday,
  ContactName,
  ContactNationality
} from "./columnsComponents";
import {
  CopyableEmail,
  CopyableLocation,
  CopyablePhone
} from "../../../components/CopyableParagraphs";

export default [
  {
    title: "Avatar",
    dataIndex: "picture",
    render: picture => <ContactAvatar picture={picture} />,
    width: "5%"
  },
  {
    title: "Full name",
    dataIndex: "name",
    sorter: true,
    render: (name, item) => (
      <ContactName contactId={item.contactId} name={name} />
    ),
    width: "10%"
  },
  {
    title: "Birthday",
    dataIndex: "dob",
    width: "20%",
    render: dob => <ContactBirthday dob={dob} />
  },
  {
    title: "Email",
    dataIndex: "email",
    render: email => <CopyableEmail email={email} />
  },
  {
    title: "Phone",
    dataIndex: "phone",
    width: "16%",
    render: phone => <CopyablePhone phone={phone} />
  },
  {
    title: "Location",
    render: location => <CopyableLocation location={location} />,
    dataIndex: "location"
  },
  {
    title: "Nationality",
    dataIndex: "nat",
    render: nat => <ContactNationality nat={nat} />
  }
];
