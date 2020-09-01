import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ReloadOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  LoadingOutlined
} from "@ant-design/icons";

import "./index.scss";

import {
  getContactList,
  setDataView
} from "../../../redux/actionCreators/getContactList";

const ButtonsGroup = ({ dataView }) => {
  const dispatch = useDispatch();
  const { filterData } = useSelector(state => state.contactList);
  const { loading } = useSelector(state => state.contactList);

  const reloadData = useCallback(() => {
    let newFilterData = undefined;
    if (
      filterData &&
      (filterData.name ||
        filterData.gender ||
        filterData.nationality ||
        filterData.isCreator)
    ) {
      newFilterData = filterData;
    }
    dispatch(getContactList(newFilterData));
  }, [dispatch, filterData]);

  return (
    <>
      <button
        className="ant-btn ant-btn-dashed ant-btn-circle ant-btn-icon-only"
        onClick={reloadData}
      >
        {loading ? <LoadingOutlined /> : <ReloadOutlined />}
      </button>
      <div className="ant-btn-group">
        <button
          className={`ant-btn ant-btn-default ant-btn-icon-only ${
            dataView === "tiled" ? "data-view-btn-active" : ""
          }`}
          onClick={() => dispatch(setDataView("tiled"))}
        >
          <AppstoreOutlined />
        </button>
        <button
          className={`ant-btn ant-btn-default ant-btn-icon-only ${
            dataView === "tabular" ? "data-view-btn-active" : ""
          }`}
          onClick={() => dispatch(setDataView("tabular"))}
        >
          <UnorderedListOutlined />
        </button>
      </div>
    </>
  );
};

export default ButtonsGroup;
