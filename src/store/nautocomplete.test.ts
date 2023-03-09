import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { nautocompleteThunk, resetNautocomplete } from "./nautocomplete";
import { store } from "./store";

const RESPONSE = {
  autocomplete: [
    {
      query: "animal",
      priority: 54801,
    },
    {
      query: "funny animal",
      priority: 7445,
    },
  ],
};
const ERROR_MESSAGE = "Network Error";
const mock = new MockAdapter(axios);

const mockNetworkSuccess = () =>
  mock.onGet(`api/nautocomplete?query=animal`).reply(200, RESPONSE);
const mockNetworkError = () =>
  mock.onGet(`api/nautocomplete?query=animal`).networkErrorOnce();

describe("Redux state tests", () => {
  afterEach(() => {
    mock.reset();
  });

  it("Should initially set nautocomplete to an empty object", () => {
    const state = store.getState();
    expect(state.nautocomplete).toEqual({});
  });

  it("Should be able to fetch list for a specific text", async () => {
    mockNetworkSuccess();
    const result = await store.dispatch(nautocompleteThunk("animal"));

    expect(result.type).toBe("NAUTOCOMPLETE/fulfilled");
    expect(result.payload).toEqual(RESPONSE.autocomplete);

    const state = store.getState();
    expect(state.nautocomplete).toEqual(result);
  });

  it("Should throw a network error", async () => {
    mockNetworkError();
    const result = await store.dispatch(nautocompleteThunk("animal"));

    expect(result.type).toBe("NAUTOCOMPLETE/rejected");
    expect(result.payload).toEqual(ERROR_MESSAGE);

    const state = store.getState();
    expect(state.nautocomplete.payload).toEqual(ERROR_MESSAGE);
  });

  it("Should reset store", () => {
    const result = store.dispatch(resetNautocomplete());

    expect(result.type).toBe("NAUTOCOMPLETE/reset");

    const state = store.getState();
    expect(state.nautocomplete).toEqual({});
  });
});
