import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import { Input, Button, Select, Checkbox } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./index.scss";
import { getContactList } from "../../../redux/actionCreators/getContactList";
import nationalities from "../../../utils/helpers/nationalities";
import { saveFilterData } from "../../../utils/helpers/saveDataLS";

const { Search } = Input;
const { Option } = Select;

const FilterContactsSection = () => {
  const { filterData } = useSelector(state => state.contactList);

  const initialState =
    filterData &&
    (filterData.name ||
      filterData.gender ||
      filterData.nationality ||
      filterData.isCreator)
      ? filterData
      : {
          name: "",
          gender: [],
          nationality: [],
          isCreator: false
        };

  const [formValues, setFormValues] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      filterData &&
      (filterData.name ||
        filterData.gender ||
        filterData.nationality ||
        filterData.isCreator)
    ) {
      dispatch(getContactList(filterData));
    }
  }, [dispatch, filterData]);

  const onCheckboxChange = event => {
    const newFormValues = {
      ...formValues,
      isCreator: event.target.checked
    };

    dispatch(getContactList(newFormValues));
    saveFilterData(newFormValues);
    setFormValues(newFormValues);
  };
  const onReset = () => {
    const newFormValues = {
      name: "",
      gender: [],
      nationality: [],
      isCreator: false
    };
    dispatch(getContactList(newFormValues));
    saveFilterData(newFormValues);
    setFormValues(newFormValues);
  };

  const handleNameChange = useCallback(
    event => {
      event.persist();
      const newFormValues = {
        ...formValues,
        name: event.target.value
      };

      dispatch(getContactList(newFormValues));
      saveFilterData(newFormValues);
      setFormValues(newFormValues);
    },
    [dispatch, formValues]
  );

  const handleGenderChange = useCallback(
    gender => {
      const newFormValues = {
        ...formValues,
        gender
      };
      dispatch(getContactList(newFormValues));
      saveFilterData(newFormValues);
      setFormValues(newFormValues);
    },
    [dispatch, formValues]
  );

  const handleNationalityChange = useCallback(
    nationality => {
      const newFormValues = {
        ...formValues,
        nationality
      };

      dispatch(getContactList(newFormValues));
      saveFilterData(newFormValues);
      setFormValues(newFormValues);
    },
    [dispatch, formValues]
  );

  const isClearBtnDisabled = () => {
    const { name, gender, nationality, isCreator } = formValues;
    return (
      name.length === 0 &&
      ((gender && gender.length === 0) || !gender) &&
      ((nationality && nationality.length === 0) || !nationality) &&
      !isCreator
    );
  };

  return (
    <div className="filters-wrapper">
      <div className="filters-container">
        <div className="filter-form-wrapper">
          <div className="filters">
            <div className="search-width">
              <Search
                value={formValues.name}
                name="name"
                placeholder="Search by full name"
                onChange={handleNameChange}
              />
            </div>
            <Select
              value={formValues.gender}
              className="select-width"
              onChange={handleGenderChange}
              name="gender"
              placeholder="Gender"
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="indeterminate">Indeterminate</Option>
            </Select>
            <Select
              value={formValues.nationality}
              className="multiple-select-width"
              name="nationality"
              onChange={handleNationalityChange}
              mode="multiple"
              placeholder="Nationality"
            >
              {Object.keys(nationalities).map(key => {
                return (
                  <Option key={key} value={nationalities[key]}>
                    {nationalities[key]}
                  </Option>
                );
              })}
            </Select>
            <div className="checkbox-width">
              <Checkbox
                checked={formValues.isCreator}
                name="isCreator"
                onChange={onCheckboxChange}
              >
                I am creator
              </Checkbox>
            </div>
          </div>
          <div>
            <Button
              type="link"
              disabled={isClearBtnDisabled()}
              onClick={onReset}
              className="clear-button"
            >
              <CloseOutlined />
              Clear
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterContactsSection;
