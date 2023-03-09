import axios from "axios";
import _debounce from "lodash/debounce";
import {
  createAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

const INITIAL_STATE = {} as PayloadAction<IPhoto>;

export const getPhoto: any = createAsyncThunk(
  "GET_PHOTO",
  async (id: string, { rejectWithValue, fulfillWithValue }) => {
    try {
      const data = await axios
        .request({
          url: `${process.env.NEXT_PUBLIC_API_URL}/photos/${id}?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`,
          method: "GET",
        })
        .then((res) => res.data);

      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const resetGetPhoto = createAction("RESET_GET_PHOTO");

export const slice = createSlice({
  name: "GET_PHOTO",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhoto.pending, (_, action) => action);
    builder.addCase(getPhoto.fulfilled, (_, action) => action);
    builder.addCase(getPhoto.rejected, (_, action) => action);
    builder.addCase(resetGetPhoto, () => INITIAL_STATE);
  },
});

export type IPhoto = {
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
  links: {};
  likes: number;
  liked_by_user: boolean;
  current_user_collections: [];
  sponsorship: string | null;
  topic_submissions: {};
  user: IUser;
  exif: {};
  location: {};
  meta: {};
  public_domain: boolean;
  tags: [];
  tags_preview: [];
  views: number;
  downloads: number;
  topics: ITopics[];
  related_collections: {
    total: number;
    type: string;
    results: IRelatedCollections[];
  };
};

type IUser = {
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
  links: {};
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
  social: {};
};

type IUrls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

type ITopics = {
  id: string;
  title: string;
  slug: string;
  visibility: string;
};
type IRelatedCollections = {
  id: string;
  title: string;
  cover_photo: {
    id: string;
    urls: IUrls;
    alt_description: string;
  };
};
