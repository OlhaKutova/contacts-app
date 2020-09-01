import types from "../actionTypes";
import config from "../../config";
import {
  getDataViewType,
  getFilterData,
  getPaginationData,
  getPaginationTiledData,
  getUserData,
  saveDataViewType,
  saveUserData
} from "../../utils/helpers/saveDataLS";
import openNotification, {
  NotificationType
} from "../../utils/helpers/openNotification";
import nationalities from "../../utils/helpers/nationalities";

export const signIn = () => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      dispatch(restoreUserData());
      let optionsString = `&results=25`;
      try {
        const response = await fetch(
          `${config.contactDataLink}${optionsString}`
        );
        let { results } = await response.json();
        results = results.map((item, key) => ({
          ...item,
          contactId: key,
          nat: nationalities[item.nat]
        }));
        const userData = results[5];
        saveUserData(userData);
        dispatch({
          type: types.GET_USER_DATA,
          payload: userData
        });
        openNotification(NotificationType.SUCCESS, "SIGN IN SUCCESSFUL");
        return resolve();
      } catch (error) {
        return reject();
      }
    });
  };
};

export const logOut = () => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      saveUserData(null);
      dispatch({
        type: types.GET_USER_DATA,
        payload: null
      });
      saveDataViewType(null);
      dispatch({
        type: types.SET_DATA_VIEW,
        payload: null
      });
      openNotification(NotificationType.SUCCESS, "LOGOUT SUCCESSFUL");
      resolve();
    });
  };
};

export const restoreUserData = () => {
  return async dispatch => {
    const userData = getUserData();
    dispatch({
      type: types.GET_USER_DATA,
      payload: userData
    });
    const dataViewType = getDataViewType();
    dispatch({
      type: types.SET_DATA_VIEW,
      payload: dataViewType
    });
    const paginationData = getPaginationData();
    dispatch({
      type: types.SET_PAGINATION_DATA,
      payload: paginationData
    });
    const paginationTiledData = getPaginationTiledData();
    dispatch({
      type: types.SET_PAGINATION_TILED_DATA,
      payload: paginationTiledData
    });
    const filterData = getFilterData();
    dispatch({
      type: types.SET_FILTER_DATA,
      payload: filterData
    });
  };
};
