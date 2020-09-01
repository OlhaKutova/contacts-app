import React from "react";

import "./index.scss";
import { Spin } from "antd";

const StatisticData = ({ contactSummary }) => {
  let predominateGender = "";
  if (contactSummary && contactSummary.males > contactSummary.females) {
    predominateGender = "Men predominate";
  } else if (
    contactSummary &&
    contactSummary.males === contactSummary.females
  ) {
    predominateGender = "Equal";
  } else {
    predominateGender = "Women predominate";
  }

  return (
    <div className="statistic-data-wrapper">
      <div className="inner-wrapper">
        {contactSummary ? (
          <>
            <h1>Statistic</h1>
            <div className="wrapper-summary">
              <div className="inner-wrapper-summary">
                <div>
                  <p className="summary-title">Collection size: </p>
                  <p>{contactSummary.size}</p>
                </div>
                <div>
                  <p className="summary-title">Males: </p>
                  <p>{contactSummary.males}</p>
                </div>
                <div>
                  <p className="summary-title">Females: </p>
                  <p>{contactSummary.females}</p>
                </div>
                <div>
                  <p className="summary-title">Intermediate: </p>
                  <p>{contactSummary.indeterminate}</p>
                </div>
              </div>
              <p className="predominate-title">{predominateGender}</p>
            </div>

            <p className="title-nat">NATIONALITIES: </p>
            <div className="nationalities-info-wrapper">
              {Object.keys(contactSummary.nationalities).map((key, index) => {
                return (
                  <div key={index}>
                    <span>
                      <b>{key}: </b>
                    </span>
                    <span className="count">
                      {contactSummary.nationalities[key]}
                    </span>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <Spin size="large" />
        )}
      </div>
    </div>
  );
};

export default StatisticData;
