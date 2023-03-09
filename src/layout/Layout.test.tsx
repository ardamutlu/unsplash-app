import React from "react";
import { render } from "@testing-library/react";
import Layout from "./Layout";

describe("<Layout />", () => {
  const testid = "test-layout";

  it("Should render a <Layout />", () => {
    const { getByTestId } = render(
      <Layout data-testid={testid}>
        <div>layout</div>
      </Layout>
    );

    expect(getByTestId(testid)).toBeInTheDocument();
  });
});
