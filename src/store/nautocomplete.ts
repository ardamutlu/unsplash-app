import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const FETCH_URL = `${process.env.NEXT_PUBLIC_API_URL}/photos/?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`;

export const fetchAutocomplete: any = createAsyncThunk(
  "NAUTOCOMPLETE",
  async (query: string, { rejectWithValue, fulfillWithValue }: any) => {
    try {
      const { data } = await axios
        .request({
          url: `${FETCH_URL}&query=${query}`,
          method: "GET",
        })
        .then((res) => res.data);

      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const slice = createSlice({
  name: "NAUTOCOMPLETE",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAutocomplete.pending, (_, action) => action);
    builder.addCase(fetchAutocomplete.fulfilled, (_, action) => action);
    builder.addCase(fetchAutocomplete.rejected, (_, action) => action);
  },
});
