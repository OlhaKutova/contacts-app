import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { List } from "antd";

import StatisticData from "../StatisticData";
import { savePaginationTiledData } from "../../../utils/helpers/saveDataLS";
import TiledContactCard from "./TiledContactCard";
import "./index.scss";

const TiledContactsData = ({ contactList, contactSummary }) => {
  const { paginationTiledData } = useSelector(state => state.contactList);
  const history = useHistory();

  const handleTableChange = page => {
    savePaginationTiledData({ current: page });
  };

  return (
    <List
      dataSource={contactList}
      pagination={{
        onChange: handleTableChange,
        defaultPageSize: 6,
        defaultCurrent:
          (paginationTiledData && paginationTiledData.current) || 1,
        pageSizeOptions: [6, 12, 36, 48]
      }}
      footer={<StatisticData contactSummary={contactSummary} />}
      renderItem={item => (
        <List.Item>
          <div
            className="card-link"
            onClick={() => history.push(`/contact-details/${item.contactId}`)}
          >
            <TiledContactCard item={item} />
          </div>
        </List.Item>
      )}
    />
  );
};

export default TiledContactsData;
