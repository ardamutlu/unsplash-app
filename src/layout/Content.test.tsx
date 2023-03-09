import React from "react";
import { render } from "@testing-library/react";
import Content from "./Content";

describe("<Content />", () => {
  const testid = "test-content";

  it("Should render a <Content />", () => {
    const { getByTestId } = render(
      <Content data-testid={testid}>
        <div>content</div>
      </Content>
    );

    expect(getByTestId(testid)).toBeInTheDocument();
  });
});
