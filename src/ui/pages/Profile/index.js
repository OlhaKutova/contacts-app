import React from "react";

import { useSelector } from "react-redux";
import PersonDetailsCard from "../../components/PersonDetailsCard";
import "./index.scss";

const Profile = () => {
  const { userData } = useSelector(state => state.signIn);

  return <PersonDetailsCard title="Profile" contactData={userData} />;
};

export default Profile;
