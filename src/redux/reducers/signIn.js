import types from "../actionTypes/index";

const initialState = {
  isLoading: true,
  userData: null,
  authIsChecked: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_USER_DATA:
      return {
        ...state,
        userData: payload,
        authIsChecked: true,
        isLoading: false
      };
    default:
      return state;
  }
};
