import { combineReducers } from "@reduxjs/toolkit";
import * as nautocomplete from "./nautocomplete";
import * as search_photos from "./search.photos";
import * as get_photo from "./get.photo";

export const rootReducer = combineReducers({
  nautocomplete: nautocomplete.slice.reducer,
  search_photos: search_photos.slice.reducer,
  get_photo: get_photo.slice.reducer,
});
