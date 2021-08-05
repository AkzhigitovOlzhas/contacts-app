import { combineReducers } from "redux";
import { contactsReducer as contacts } from "./contacts/reducer";

export const reducers = combineReducers({ contacts });
