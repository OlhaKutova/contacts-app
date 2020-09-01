import React from "react";
import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Spin, Row, Col } from "antd";

import FilterContactsSection from "../../containers/FilterContactsSection";
import TabularContactsData from "../../containers/TabularContactsData";
import ButtonsGroup from "../../components/ButtonsGroup";
import TiledContactsData from "../../containers/TiledContactsData";
import "./index.scss";

const Contacts = () => {
  const { contactList, contactSummary, loading, dataView } = useSelector(
    state => state.contactList
  );

  return (
    <div className="contacts-wrapper">
      {dataView ? (
        <>
          <Row>
            <Col span={12}>
              <h1>Contacts</h1>
            </Col>
            <Col span={12} className="buttons-wrapper">
              <ButtonsGroup dataView={dataView} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <FilterContactsSection />
            </Col>
          </Row>
          {dataView === "tabular" ? (
            <TabularContactsData
              contactList={contactList}
              contactSummary={contactSummary}
              loading={loading}
            />
          ) : (
            <TiledContactsData
              contactList={contactList}
              contactSummary={contactSummary}
            />
          )}
        </>
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
};

export default Contacts;
