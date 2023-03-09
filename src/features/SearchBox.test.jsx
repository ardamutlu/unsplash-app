import React from "react";
import { useRouter } from "next/router";
import { fireEvent, waitFor } from "@testing-library/react";
import { useSelector } from "react-redux";
import renderWithProviders from "../test-utils/cutomRender";
import SearchBox from "./SearchBox";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn().mockReturnValueOnce({}),
}));

describe("<SearchBox>", () => {
  const testid = "test-searchbox";
  useRouter.mockReturnValue({
    query: {},
    push: jest.fn(),
  });

  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback({
        nautocomplete: {
          payload: [
            {
              id: 1,
              query: "Animal",
            },
            {
              id: 2,
              query: "Funny Animal",
            },
          ],
        },
      });
    });
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it("Should output a <SearchBox>", async () => {
    const { container } = renderWithProviders(
      <SearchBox data-testid={testid} />
    );
    expect(container).toBeInTheDocument();
  });

  it("Should change page when trigger onSelect", async () => {
    const { getByText, getByRole } = renderWithProviders(<SearchBox />);

    const input = getByRole("combobox");
    await waitFor(() => {
      fireEvent.change(input, { target: { value: "animal" } });
    });
    const item = getByText("Animal");
    await waitFor(() => {
      fireEvent.click(item);
    });
    expect(useRouter).toHaveBeenCalled();
  });
});
