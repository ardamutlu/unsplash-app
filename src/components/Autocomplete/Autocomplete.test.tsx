import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Autocomplete from "./Autocomplete";

const DATA = [
  {
    id: 1,
    query: "Animal",
  },
  {
    id: 2,
    query: "Funny Animal",
  },
];

describe("<Autocomplete />", () => {
  const testid = "test-autocomplete";

  it("Should render a Autocomplete", () => {
    const { getByTestId } = render(
      <Autocomplete
        data-testid={testid}
        data={DATA}
        displayKey="query"
        placeholder="Search high-resolution images"
      />
    );

    expect(getByTestId(testid)).toBeInTheDocument();
  });

  it("Should select a default data", () => {
    const { getByTestId } = render(
      <Autocomplete
        data-testid={testid}
        data={DATA}
        displayKey="query"
        selected={DATA[1]}
      />
    );

    expect(getByTestId(testid)).toBeInTheDocument();
  });

  it("Should trigger onChange func", async () => {
    const callbackFunc = jest.fn();

    const { getByRole } = render(
      <Autocomplete
        data-testid={testid}
        data={DATA}
        displayKey="query"
        onChange={callbackFunc}
      />
    );
    const input = getByRole("combobox");
    await waitFor(() => {
      fireEvent.change(input, { target: { value: "animal" } });
    });

    expect(callbackFunc).toHaveBeenCalled();
  });

  it("Should trigger onSelect func", async () => {
    const callbackFunc = jest.fn();

    const { getByText, getByRole } = render(
      <Autocomplete
        data-testid={testid}
        data={DATA}
        displayKey="query"
        onSelect={callbackFunc}
      />
    );
    const input = getByRole("combobox");
    await waitFor(() => {
      fireEvent.change(input, { target: { value: "animal" } });
    });
    const item = getByText("Animal");
    await waitFor(() => {
      fireEvent.click(item);
    });

    expect(callbackFunc).toHaveBeenCalled();
  });
});
