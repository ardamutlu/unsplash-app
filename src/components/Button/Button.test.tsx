import React from "react";
import { render } from "@testing-library/react";
import Button, { VARIANT, SIZE, DEFAULT_CLASS } from "./Button";

describe("<Button>", () => {
  const text = "Button";
  const testid = "test-button";

  it("Should output a button", () => {
    const { container } = render(<Button data-testid={testid}>{text}</Button>);

    expect(container).toBeInTheDocument();
  });

  it('Should default to variant="secondary"', () => {
    const variant = `${VARIANT["secondary"]} ${DEFAULT_CLASS}`;
    const { getByTestId } = render(
      <Button data-testid={testid}>{text}</Button>
    );

    expect(getByTestId(testid)).toHaveClass(variant);
  });

  it('Should default to size="md"', () => {
    const size = SIZE["md"];
    const { getByTestId } = render(
      <Button data-testid={testid}>{text}</Button>
    );

    expect(getByTestId(testid)).toHaveClass(size);
  });
});
