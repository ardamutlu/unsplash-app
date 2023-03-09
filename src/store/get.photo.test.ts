import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getPhoto } from "./get.photo";
import { store } from "./store";

const RESPONSE = {
  id: "xUUZcpQlqpM",
  created_at: "2016-09-22T02:29:11Z",
  updated_at: "2023-03-07T23:50:48Z",
  promoted_at: "2016-09-22T02:29:11Z",
  width: 4928,
  height: 3280,
  color: "#a6a6a6",
  blur_hash: "LSFO+KkC0$t7_2w[RjOFK+WX=Yn$",
  description: "Wildlife in Winter",
  alt_description: "brown fox on snow field",
};
const ERROR_MESSAGE = "Network Error";
const ID = "xUUZcpQlqpM";
const mock = new MockAdapter(axios);

const mockNetworkSuccess = () =>
  mock
    .onGet(
      `${process.env.NEXT_PUBLIC_API_URL}/photos/${ID}?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`
    )
    .reply(200, RESPONSE);

const mockNetworkError = () =>
  mock
    .onGet(
      `${process.env.NEXT_PUBLIC_API_URL}/photos/${ID}?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`
    )
    .networkErrorOnce();

describe("Redux state tests", () => {
  afterEach(() => {
    mock.reset();
  });

  it("Should initially set get_photo to an empty object", () => {
    const state = store.getState();
    expect(state.get_photo).toEqual({});
  });

  it("Should be able to fetch for a specific photo", async () => {
    mockNetworkSuccess();
    const result = await store.dispatch(getPhoto(ID));

    expect(result.type).toBe("GET_PHOTO/fulfilled");
    expect(result.payload).toEqual(RESPONSE);

    const state = store.getState();
    expect(state.get_photo).toEqual(result);
  });

  it("Should throw a network error", async () => {
    mockNetworkError();
    const result = await store.dispatch(getPhoto(ID));

    expect(result.type).toBe("GET_PHOTO/rejected");
    expect(result.payload).toEqual(ERROR_MESSAGE);

    const state = store.getState();
    expect(state.get_photo.payload).toEqual(ERROR_MESSAGE);
  });
});
