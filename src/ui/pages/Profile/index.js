import React from "react";

import "./index.scss";
import { useSelector } from "react-redux";
import PersonDetailsCard from "../../components/PersonDetailsCard";

const Profile = () => {
  const { userData } = useSelector(state => state.signIn);

  return <PersonDetailsCard title="Profile" contactData={userData} />;
};

export default Profile;
