export const saveUserData = userData => {
  localStorage.setItem("userData", JSON.stringify(userData));
};

export const getUserData = () => {
  return JSON.parse(localStorage.getItem("userData")) || null;
};

export const saveDataViewType = dataViewType => {
  localStorage.setItem("dataViewType", JSON.stringify(dataViewType));
};

export const getDataViewType = () => {
  return JSON.parse(localStorage.getItem("dataViewType")) || "tabular";
};

export const savePaginationData = data => {
  localStorage.setItem("paginationData", JSON.stringify(data));
};

export const getPaginationData = () => {
  return JSON.parse(localStorage.getItem("paginationData")) || {};
};

export const savePaginationTiledData = data => {
  localStorage.setItem("paginationTiledData", JSON.stringify(data));
};

export const getPaginationTiledData = () => {
  return JSON.parse(localStorage.getItem("paginationTiledData")) || {};
};

export const saveFilterData = data => {
  localStorage.setItem("filterData", JSON.stringify(data));
};

export const getFilterData = () => {
  return JSON.parse(localStorage.getItem("filterData")) || {};
};
