import React from "react";

import "./index.scss";

const PageNotFound = () => {
  return (
    <div className="page-not-found-wrapper">
      <img src={require("../../../img/error-page.png")} />
    </div>
  );
};

export default PageNotFound;
