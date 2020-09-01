import { combineReducers } from "redux";

import contactsReducer from "../reducers/contacts";
import signInReducer from "../reducers/signIn";

export default combineReducers({
  contactList: contactsReducer,
  signIn: signInReducer
});
