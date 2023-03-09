import React from "react";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import Modal from "../Modal/Modal";

describe("<Modal />", () => {
  const testid = "test-modal";
  const title = (
    <div>
      Title <button role="close">Close</button>
    </div>
  );
  const body = <div>Body</div>;

  it("Should render a Modal", async () => {
    const { getByTestId } = render(
      <Modal data-testid={testid} isOpen title={title} body={body} />
    );
    await waitFor(() => getByTestId(testid));
    expect(getByTestId(testid)).toBeInTheDocument();
  });

  it("Should trigger onClose func", async () => {
    const callbackFunc = jest.fn();
    const { getByTestId } = render(
      <Modal
        data-testid={testid}
        isOpen
        onClose={callbackFunc}
        title={title}
        body={body}
      />
    );
    await waitFor(() => getByTestId(testid));
    act(() => {
      fireEvent.keyDown(getByTestId(testid), {
        key: "Escape",
        code: "Escape",
        keyCode: 27,
        charCode: 27,
      });
    });

    expect(callbackFunc).toHaveBeenCalled();
  });
});
