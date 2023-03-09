import React from "react";
import { render } from "@testing-library/react";
import MasonryLayout from "./MasonryLayout";

describe("<MasonryLayout />", () => {
  const testid = "test-masonry-layout";

  it("Should render a Masonry Layout", () => {
    const { getByTestId } = render(
      <MasonryLayout data-testid={testid}>
        <div>1</div>
        <div>2</div>
      </MasonryLayout>
    );

    expect(getByTestId(testid)).toBeInTheDocument();
    expect(getByTestId(testid).children[0].tagName.toLowerCase()).toEqual(
      "div"
    );
  });
});
