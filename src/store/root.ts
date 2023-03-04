import { combineReducers } from "@reduxjs/toolkit";
import * as nautocomplete from "./nautocomplete";

export const rootReducer = combineReducers({
  nautocomplete: nautocomplete.slice.reducer,
});
