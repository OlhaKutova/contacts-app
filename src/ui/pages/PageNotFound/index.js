import React from "react";

import "./index.scss";

const PageNotFound = () => {
  return (
    <div className="page-not-found-wrapper">
      <img src={require("../../../img/error-page.png")} alt="error-404-image" />
    </div>
  );
};

export default PageNotFound;
