import types from "../actionTypes/index";
import { getRandomNumber } from "../../utils/helpers";
import config from "../../config";
import { saveDataViewType } from "../../utils/helpers/saveDataLS";
import nationalities from "../../utils/helpers/nationalities";
import openNotification, {
  NotificationType
} from "../../utils/helpers/openNotification";

export const getContactList = (formValues = {}) => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({
          type: types.GET_CONTACT_LIST_START
        });

        const { name, gender, nationality, isCreator } = formValues;

        let optionsString = `&results=${getRandomNumber(1, 500)}`;

        const response = await fetch(
          `${config.contactDataLink}${optionsString}`
        );

        if (!response.ok) {
          throw new Error();
        }

        let { results } = await response.json();

        results = results.map((item, key) => ({
          ...item,
          contactId: key,
          nat: nationalities[item.nat]
        }));

        if (name && name.length > 0) {
          results = results.filter(item => {
            const { title, first, last } = item.name;
            return `${title} ${first} ${last}`
              .toLowerCase()
              .includes(name.toLowerCase());
          });
        }

        if (gender && gender.length > 0) {
          results = results.filter(
            item => item.gender.toLowerCase() === gender.toLowerCase()
          );
        }

        if (nationality && nationality.length > 0) {
          const nationStr = nationality.filter(item => item !== "").join(",");
          results = results.filter(item =>
            nationStr.toLowerCase().includes(item.nat.toLowerCase())
          );
        }

        if (isCreator) {
          results = results.filter(item => item.isCreator === isCreator);
        }

        const summary = {
          size: 0,
          males: 0,
          females: 0,
          indeterminate: 0,
          nationalities: {}
        };

        for (let i = 0; i < results.length; i++) {
          const item = results[i];
          summary.size += 1;
          if (item.gender === "male") {
            summary.males += 1;
          } else if (item.gender === "female") {
            summary.females += 1;
          } else {
            summary.indeterminate += 1;
          }

          const nationality = item.nat;
          if (nationality) {
            if (summary.nationalities[nationality]) {
              summary.nationalities[nationality] += 1;
            } else {
              summary.nationalities[nationality] = 1;
            }
          }
        }
        dispatch({
          type: types.GET_CONTACT_LIST,
          payload: { results, summary, filterData: formValues }
        });
        return resolve();
      } catch (err) {
        openNotification(
          NotificationType.ERROR,
          "Oops",
          "Error while fetching contacts"
        );
        return reject();
      }
    });
  };
};

export const setDataView = dataViewType => {
  return async dispatch => {
    dispatch({
      type: types.SET_DATA_VIEW,
      payload: dataViewType
    });
    saveDataViewType(dataViewType);
  };
};
