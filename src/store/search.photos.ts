import axios from "axios";
import _debounce from "lodash/debounce";
import {
  createAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/search/photos?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`;

const INITIAL_STATE = {} as PayloadAction<ISearchPhotos>;

export const fetchSearchPhotos: any = createAsyncThunk(
  "SEARCH_PHOTOS",
  async (
    { query, page = 1 }: { query: string; page?: number },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const data = await axios
        .request({
          url: `${URL}&per_page=20&page=${page}&query=${query}`,
          method: "GET",
        })
        .then((res) => res.data);

      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const resetSearchPhotos = createAction("RESET_SEARCH_PHOTOS");

export const slice = createSlice({
  name: "SEARCH_PHOTOS",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchPhotos.pending, (_, action) => action);
    builder.addCase(fetchSearchPhotos.fulfilled, (_, action) => action);
    builder.addCase(fetchSearchPhotos.rejected, (_, action) => action);
    builder.addCase(resetSearchPhotos, () => INITIAL_STATE);
  },
});

export type ISearchPhotos = {
  total: number;
  total_pages: number;
  results: IPhotos[];
};

export type IUrls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

export type ILinks = {
  self: string;
  html: string;
  download: string;
  download_location: string;
};

export type ITags = {
  type: string;
  title: string;
};

export type ITopicSubmission = {
  "fashion-beauty": {
    status: string;
  };
  experimental: {
    status: string;
    approved_on: string;
  };
  people: {
    status: string;
  };
};

export type IUsers = {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string | null;
  portfolio_url: string;
  bio: string;
  location: string;
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
    following: string;
    followers: string;
  };
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string | null;
    paypal_email: string | null;
  };
};

export type IPhotos = {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: IUrls;
  links: ILinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: [];
  sponsorship: string | null;
  topic_submissions: ITopicSubmission;
  user: IUsers;
  tags: ITags[];
};
