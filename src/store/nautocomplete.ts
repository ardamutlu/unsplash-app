import axios from "axios";
import _debounce from "lodash/debounce";
import {
  createAction,
  createAsyncThunk,
  createSlice,
  PayloadActionCreator,
} from "@reduxjs/toolkit";

const INITIAL_STATE = {};

export const nautocompleteThunk: any = createAsyncThunk(
  "NAUTOCOMPLETE",
  async (query: string, { rejectWithValue, fulfillWithValue }) => {
    try {
      const data = await axios
        .request({
          url: `api/nautocomplete?query=${query}`,
          method: "GET",
        })
        .then((res) => res.data);

      return fulfillWithValue(data.autocomplete);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const debounceFn = _debounce(
  (dispatch: PayloadActionCreator, ...args: string[]) =>
    dispatch(nautocompleteThunk(...args)),
  1000
);

export const fetchNautocomplete =
  (...args: string[]): any =>
  (dispatch: PayloadActionCreator) =>
    debounceFn(dispatch, ...args);

export const resetNautocomplete = createAction("RESET_NAUTOCOMPLETE");

export const slice = createSlice({
  name: "NAUTOCOMPLETE",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(nautocompleteThunk.pending, (_, action) => action);
    builder.addCase(nautocompleteThunk.fulfilled, (_, action) => action);
    builder.addCase(nautocompleteThunk.rejected, (_, action) => action);
    builder.addCase(resetNautocomplete, () => INITIAL_STATE);
  },
});
