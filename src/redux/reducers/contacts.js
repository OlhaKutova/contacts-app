import types from "../actionTypes/index";

const initialState = {
  loading: true,
  contactList: [],
  contactSummary: null,
  dataView: null,
  paginationData: {},
  paginationTiledData: {},
  filterData: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_CONTACT_LIST_START:
      return {
        ...state,
        loading: true
      };
    case types.GET_CONTACT_LIST:
      return {
        ...state,
        contactList: payload.results,
        contactSummary: payload.summary,
        filterData: payload.filterData,
        loading: false
      };
    case types.SORT_CONTACT_LIST:
      const { order } = payload;

      const newContactList = [...state.contactList].sort((itemA, itemB) => {
        const { title: titleA, first: firstA, last: lastA } = itemA.name;
        const { title: titleB, first: firstB, last: lastB } = itemB.name;
        let fullNameA = `${titleA} ${firstA} ${lastA}`.toLowerCase();
        let fullNameB = `${titleB} ${firstB} ${lastB}`.toLowerCase();
        if (fullNameA < fullNameB) return order === "descend" ? 1 : -1;
        if (fullNameA > fullNameB) return order === "descend" ? -1 : 1;
        return 0;
      });
      return {
        ...state,
        contactList: newContactList,
        loading: false
      };
    case types.SET_DATA_VIEW:
      return {
        ...state,
        dataView: payload
      };
    case types.SET_PAGINATION_DATA:
      return {
        ...state,
        paginationData: payload
      };
    case types.SET_PAGINATION_TILED_DATA:
      return {
        ...state,
        paginationTiledData: payload
      };
    case types.SET_FILTER_DATA:
      return {
        ...state,
        filterData: payload
      };

    default:
      return state;
  }
};
