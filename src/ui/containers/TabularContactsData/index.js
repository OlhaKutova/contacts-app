import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";

import columns from "./TableElements/columns";
import StatisticData from "../StatisticData";
import types from "../../../redux/actionTypes";
import "antd/dist/antd.css";
import "./index.scss";

import { savePaginationData } from "../../../utils/helpers/saveDataLS";

const TabularContactsData = ({ contactList, contactSummary, loading }) => {
  const { paginationData } = useSelector(state => state.contactList);

  const dispatch = useDispatch();

  const handleTableChange = (pagination, filters, sorter) => {
    const { field, order } = sorter;
    dispatch({
      type: types.SORT_CONTACT_LIST,
      payload: { field, order }
    });
    savePaginationData(pagination);
  };

  return (
    <div className="table-wrapper">
      <Table
        columns={columns}
        rowKey={item => item.login.uuid}
        dataSource={contactList}
        loading={loading}
        footer={() => <StatisticData contactSummary={contactSummary} />}
        onChange={handleTableChange}
        pagination={{
          defaultCurrent: (paginationData && paginationData.current) || 1
        }}
      />
    </div>
  );
};

export default TabularContactsData;
